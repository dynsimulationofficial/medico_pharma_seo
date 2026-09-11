import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const ALLOWED_ENQUIRIES = new Set([
  "Product information",
  "Distribution partnership",
  "Institutional supply",
  "Export enquiry",
  "General question",
]);

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const MAX_REQUEST_BYTES = 16_384;

type RateEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateEntry>();

function response(
  body: { success: boolean; message?: string; error?: string },
  status = 200
) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store, no-cache, max-age=0, must-revalidate",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function isRateLimited(key: string) {
  const now = Date.now();

  if (rateLimitStore.size > 1000) {
    for (const [entryKey, entry] of rateLimitStore) {
      if (entry.resetAt <= now) rateLimitStore.delete(entryKey);
    }
  }

  const current = rateLimitStore.get(key);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX) return true;

  current.count += 1;
  return false;
}

function readText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  const cleaned = value.replace(/\u0000/g, "").trim();
  return cleaned.length <= maxLength ? cleaned : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isAllowedOrigin(request: Request) {
  if (process.env.NODE_ENV !== "production") return true;

  const origin = request.headers.get("origin");
  if (!origin) return true;

  const allowed = new Set([
    "https://www.medicos-pharma.com",
    "https://medicos-pharma.com",
  ]);

  const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "");
  if (configuredSiteUrl) allowed.add(configuredSiteUrl);

  return allowed.has(origin);
}

export async function POST(request: Request) {
  try {
    if (!isAllowedOrigin(request)) {
      return response({ success: false, error: "Request origin is not allowed." }, 403);
    }

    const contentType = request.headers.get("content-type") || "";
    if (!contentType.toLowerCase().includes("application/json")) {
      return response({ success: false, error: "Unsupported request format." }, 415);
    }

    const contentLength = Number(request.headers.get("content-length") || 0);
    if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES) {
      return response({ success: false, error: "Request is too large." }, 413);
    }

    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return response(
        { success: false, error: "Too many requests. Please try again later." },
        429
      );
    }

    const body = (await request.json()) as Record<string, unknown>;

    const website = readText(body.website, 200);
    if (website) {
      // Honeypot: return a normal success response without sending mail.
      return response({
        success: true,
        message: "Enquiry submitted successfully.",
      });
    }

    const formStartedAt = Number(body.formStartedAt);
    const formAge = Date.now() - formStartedAt;
    if (
      !Number.isFinite(formStartedAt) ||
      formStartedAt <= 0 ||
      formAge < 1500 ||
      formAge > 24 * 60 * 60 * 1000
    ) {
      return response(
        { success: false, error: "Please reload the form and try again." },
        400
      );
    }

    const name = readText(body.name, 100);
    const email = readText(body.email, 254).toLowerCase();
    const company = readText(body.company, 120);
    const phone = readText(body.phone, 25);
    const enquiry = readText(body.enquiry, 80);
    const message = readText(body.message, 3000);

    if (!name || !email || !enquiry || !message) {
      return response(
        { success: false, error: "Please fill in all required fields." },
        400
      );
    }

    if (name.length < 2 || message.length < 20) {
      return response(
        { success: false, error: "Please provide a complete enquiry." },
        400
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || /[\r\n]/.test(email)) {
      return response({ success: false, error: "Enter a valid email address." }, 400);
    }

    if (phone && !/^[\d+\s().-]{7,25}$/.test(phone)) {
      return response({ success: false, error: "Enter a valid phone number." }, 400);
    }

    if (!ALLOWED_ENQUIRIES.has(enquiry)) {
      return response({ success: false, error: "Choose a valid enquiry type." }, 400);
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const fromName = process.env.FROM_NAME || "Medico Pharma";
    const fromEmail = process.env.FROM_EMAIL || user;
    const toEmail = process.env.TO_EMAIL;

    if (!host || !user || !pass || !fromEmail || !toEmail) {
      console.error("Contact form SMTP configuration is incomplete.");
      return response(
        {
          success: false,
          error: "The contact service is temporarily unavailable. Please try again later.",
        },
        503
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      requireTLS: port !== 465,
      auth: {
        user,
        pass,
      },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
      tls: {
        rejectUnauthorized: true,
        minVersion: "TLSv1.2",
      },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company || "Not provided");
    const safePhone = escapeHtml(phone || "Not provided");
    const safeEnquiry = escapeHtml(enquiry);
    const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br />");

    const htmlContent = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e0e0e0;border-radius:8px;overflow:hidden">
        <div style="background:#0b4d26;color:#fff;padding:20px;text-align:center">
          <h2 style="margin:0;font-size:22px">New B2B website enquiry</h2>
          <p style="margin:6px 0 0;font-size:14px;opacity:.9">Medico Pharma</p>
        </div>
        <div style="padding:24px;background:#fff;color:#222">
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr><td style="padding:10px;font-weight:700">Name</td><td style="padding:10px">${safeName}</td></tr>
            <tr><td style="padding:10px;font-weight:700">Email</td><td style="padding:10px">${safeEmail}</td></tr>
            <tr><td style="padding:10px;font-weight:700">Phone</td><td style="padding:10px">${safePhone}</td></tr>
            <tr><td style="padding:10px;font-weight:700">Company</td><td style="padding:10px">${safeCompany}</td></tr>
            <tr><td style="padding:10px;font-weight:700">Enquiry</td><td style="padding:10px">${safeEnquiry}</td></tr>
          </table>
          <div style="margin-top:20px;padding:16px;background:#f7faf8;border-left:4px solid #0b4d26;line-height:1.6">
            ${safeMessage}
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: {
        name: fromName.replace(/[\r\n]/g, " ").slice(0, 100),
        address: fromEmail,
      },
      to: toEmail,
      replyTo: {
        name: name.replace(/[\r\n]/g, " ").slice(0, 100),
        address: email,
      },
      subject: `Website B2B enquiry: ${enquiry.replace(/[\r\n]/g, " ")}`,
      text: [
        `Full Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "N/A"}`,
        `Company: ${company || "N/A"}`,
        `Enquiry Type: ${enquiry}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: htmlContent,
      disableFileAccess: true,
      disableUrlAccess: true,
    });

    return response({
      success: true,
      message: "Enquiry submitted successfully.",
    });
  } catch (error) {
    console.error(
      "Contact form error:",
      error instanceof Error ? error.message : "Unknown error"
    );

    return response(
      {
        success: false,
        error: "We could not send your enquiry right now. Please try again later.",
      },
      500
    );
  }
}
