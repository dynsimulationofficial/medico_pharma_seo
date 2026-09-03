import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, enquiry, message } = body;

    if (!name || !email || !enquiry || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Read strictly from environment variables (No hardcoded credentials in code)
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const fromName = process.env.FROM_NAME || "Medicos Pharma";
    const fromEmail = process.env.FROM_EMAIL || user;
    const toEmail = process.env.TO_EMAIL;

    if (!host || !user || !pass || !toEmail) {
      console.error("Missing SMTP environment variables. Please check process.env.");
      return NextResponse.json(
        { success: false, error: "SMTP server credentials are not configured in environment variables." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
        <div style="background-color: #0b4d26; color: #ffffff; padding: 20px; text-align: center;">
          <h2 style="margin: 0; font-size: 22px; font-weight: 600;">New Contact Form Enquiry</h2>
          <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">Medicos Pharma Healthcare Website</p>
        </div>
        <div style="padding: 24px; background-color: #ffffff;">
          <p style="font-size: 15px; color: #333333; margin-top: 0;">A new business enquiry has been submitted on the website with the following details:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #eeeeee; font-weight: bold; width: 140px; color: #555555; background-color: #fcfcfc;">Full Name:</td>
              <td style="padding: 12px; border-bottom: 1px solid #eeeeee; color: #111111; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #eeeeee; font-weight: bold; color: #555555; background-color: #fcfcfc;">Email Address:</td>
              <td style="padding: 12px; border-bottom: 1px solid #eeeeee; color: #111111;"><a href="mailto:${email}" style="color: #0b4d26; text-decoration: none; font-weight: 600;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #eeeeee; font-weight: bold; color: #555555; background-color: #fcfcfc;">Phone:</td>
              <td style="padding: 12px; border-bottom: 1px solid #eeeeee; color: #111111;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #eeeeee; font-weight: bold; color: #555555; background-color: #fcfcfc;">Company:</td>
              <td style="padding: 12px; border-bottom: 1px solid #eeeeee; color: #111111;">${company || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #eeeeee; font-weight: bold; color: #555555; background-color: #fcfcfc;">Enquiry Type:</td>
              <td style="padding: 12px; border-bottom: 1px solid #eeeeee; color: #0b4d26; font-weight: bold;">${enquiry}</td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <h4 style="margin: 0 0 10px 0; color: #0b4d26; font-size: 15px;">Requirement / Message Details:</h4>
            <div style="background-color: #f8faf8; border-left: 4px solid #0b4d26; padding: 16px; font-size: 14px; color: #222222; line-height: 1.6; white-space: pre-wrap; border-radius: 4px;">${message}</div>
          </div>
        </div>
        <div style="background-color: #f4f4f4; padding: 14px 20px; text-align: center; font-size: 12px; color: #777777; border-top: 1px solid #eeeeee;">
          Sent automatically from Medicos Pharma Contact Form
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"${fromName}" <${fromEmail}>`,
      to: toEmail,
      replyTo: `"${name}" <${email}>`,
      subject: `[New Form Enquiry] ${enquiry} - ${name}`,
      text: `Full Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nCompany: ${company || 'N/A'}\nEnquiry Type: ${enquiry}\n\nMessage:\n${message}`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Enquiry submitted and email sent successfully." });
  } catch (error: any) {
    console.error("Error sending email via SMTP:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
