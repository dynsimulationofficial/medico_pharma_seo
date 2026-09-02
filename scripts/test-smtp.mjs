import nodemailer from "nodemailer";

const host = "mail.medicos-pharma.com";
const port = 465;
const user = "info@medicos-pharma.com";
const pass = "y?mG]2S=E_";
const fromName = "Medicos Pharma";
const fromEmail = "info@medicos-pharma.com";
const toEmail = "danishkkhan13@gmail.com";

console.log("Connecting to SMTP server...");

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

async function main() {
  try {
    await transporter.verify();
    console.log("✅ SMTP Connection verified successfully!");

    const info = await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: toEmail,
      subject: "Test Contact Form Email - Medicos Pharma",
      text: "This is a test email sent using Medicos Pharma SMTP credentials.",
      html: "<h3>Test Contact Form Email</h3><p>Medicos Pharma SMTP integration working properly!</p>",
    });

    console.log("✅ Test email sent successfully! MessageId:", info.messageId);
  } catch (error) {
    console.error("❌ SMTP Error:", error);
  }
}

main();
