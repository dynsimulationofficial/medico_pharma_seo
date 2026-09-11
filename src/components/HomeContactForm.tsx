"use client";

import { useState } from "react";

const enquiryMap: Record<string, string> = {
  product: "Product information",
  manufacturing: "Institutional supply",
  "private-label": "Distribution partnership",
  export: "Export enquiry",
  other: "General question",
};

type Status = "idle" | "sending" | "sent" | "error";

export default function HomeContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [website, setWebsite] = useState("");
  const [startedAt, setStartedAt] = useState(() => Date.now());

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const interest = String(data.get("interest") || "other");
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      company: "",
      enquiry: enquiryMap[interest] || "General question",
      message: String(data.get("message") || "").trim(),
      website,
      formStartedAt: startedAt,
    };

    if (!payload.name || !payload.email || payload.message.length < 20) {
      setError("Please add your name, email and a requirement of at least 20 characters.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        credentials: "same-origin",
        cache: "no-store",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as
        | { success?: boolean; error?: string }
        | null;

      if (!response.ok || !result?.success) {
        throw new Error(result?.error || "Unable to send your enquiry right now.");
      }

      form.reset();
      setWebsite("");
      setStartedAt(Date.now());
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to send your enquiry right now.");
      setStatus("error");
    }
  }

  return (
    <form className="home-contact-form" onSubmit={handleSubmit} noValidate>
      <select name="interest" defaultValue="product" aria-label="Enquiry type">
        <option value="product">Product enquiry</option>
        <option value="manufacturing">Manufacturing</option>
        <option value="private-label">OEM / Private Label</option>
        <option value="export">Export Services</option>
        <option value="other">Other partnership</option>
      </select>
      <input type="text" name="name" placeholder="Name" aria-label="Name" autoComplete="name" maxLength={100} required />
      <input type="email" name="email" placeholder="Email" aria-label="Email" autoComplete="email" maxLength={254} required />
      <input type="tel" name="phone" placeholder="Phone number" aria-label="Phone number" autoComplete="tel" maxLength={25} />
      <textarea name="message" placeholder="Your business requirement" aria-label="Your business requirement" rows={4} maxLength={3000} required />

      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="home-website">Website</label>
        <input
          id="home-website"
          name="website"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send enquiry"} <span aria-hidden="true">→</span>
      </button>

      {status === "sent" ? (
        <p role="status">Thanks. Your business enquiry has been received.</p>
      ) : null}
      {status === "error" && error ? (
        <p role="alert">{error}</p>
      ) : null}
    </form>
  );
}
