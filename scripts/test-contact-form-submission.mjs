import nodemailer from "nodemailer";

const host = "mail.medicos-pharma.com";
const port = 465;
const user = "info@medicos-pharma.com";
const pass = "y?mG]2S=E_";
const fromName = "Medicos Pharma";
const fromEmail = "info@medicos-pharma.com";
const toEmail = "danishkkhan13@gmail.com";

const transporter = nodemailer.createTransport({
  host,
  port,
  secure: true,
  auth: {
    user,
    pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Sample contact form data filled by a user
const sampleForm = {
  name: "Danish Khan",
  email: "danishkkhan13@gmail.com",
  phone: "+91 98765 43210",
  company: "Medicos Pharma Healthcare",
  enquiry: "Product information & Bulk Purchase",
  message: "Hello Medicos Pharma team,\n\nWe would like to request bulk pricing and availability details for Pharmaceutical Tablets & Injections range.\n\nPlease get back to us at the earliest with your catalog and commercial terms.\n\nThanks & Regards,\nDanish Khan",
};

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
          <td style="padding: 12px; border-bottom: 1px solid #eeeeee; color: #111111; font-weight: 600;">${sampleForm.name}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #eeeeee; font-weight: bold; color: #555555; background-color: #fcfcfc;">Email Address:</td>
          <td style="padding: 12px; border-bottom: 1px solid #eeeeee; color: #111111;"><a href="mailto:${sampleForm.email}" style="color: #0b4d26; text-decoration: none; font-weight: 600;">${sampleForm.email}</a></td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #eeeeee; font-weight: bold; color: #555555; background-color: #fcfcfc;">Phone:</td>
          <td style="padding: 12px; border-bottom: 1px solid #eeeeee; color: #111111;">${sampleForm.phone}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #eeeeee; font-weight: bold; color: #555555; background-color: #fcfcfc;">Company:</td>
          <td style="padding: 12px; border-bottom: 1px solid #eeeeee; color: #111111;">${sampleForm.company}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #eeeeee; font-weight: bold; color: #555555; background-color: #fcfcfc;">Enquiry Type:</td>
          <td style="padding: 12px; border-bottom: 1px solid #eeeeee; color: #0b4d26; font-weight: bold;">${sampleForm.enquiry}</td>
        </tr>
      </table>

      <div style="margin-top: 24px;">
        <h4 style="margin: 0 0 10px 0; color: #0b4d26; font-size: 15px;">Requirement / Message Details:</h4>
        <div style="background-color: #f8faf8; border-left: 4px solid #0b4d26; padding: 16px; font-size: 14px; color: #222222; line-height: 1.6; white-space: pre-wrap; border-radius: 4px;">${sampleForm.message}</div>
      </div>
    </div>
    <div style="background-color: #f4f4f4; padding: 14px 20px; text-align: center; font-size: 12px; color: #777777; border-top: 1px solid #eeeeee;">
      Sent automatically from Medicos Pharma Contact Form
    </div>
  </div>
`;

async function main() {
  try {
    const info = await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: toEmail,
      replyTo: `"${sampleForm.name}" <${sampleForm.email}>`,
      subject: `[New Form Enquiry] ${sampleForm.enquiry} - ${sampleForm.name}`,
      text: `Full Name: ${sampleForm.name}\nEmail: ${sampleForm.email}\nPhone: ${sampleForm.phone}\nCompany: ${sampleForm.company}\nEnquiry Type: ${sampleForm.enquiry}\n\nMessage:\n${sampleForm.message}`,
      html: htmlContent,
    });

    console.log("✅ Contact form email with FULL DETAILS sent successfully! MessageId:", info.messageId);
  } catch (error) {
    console.error("❌ Email error:", error);
  }
}

main();
