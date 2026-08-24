import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Medico Pharma for product, distribution, partnership, and general business enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero contact-hero">
        <div className="container page-hero-grid">
          <div><span className="eyebrow light">Contact us</span><h1>Tell us what you&apos;re looking for.</h1></div>
          <p>Use the enquiry form to share your requirement. Contact details and form delivery can be connected to your real company email or CRM before production launch.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <span className="eyebrow">Start here</span>
            <h2>One clear route for every enquiry.</h2>
            <p>Choose the enquiry type that best matches your requirement so the message can be routed correctly when the form backend is connected.</p>
            <div className="contact-mini-cards">
              <div><span>01</span><strong>Product enquiries</strong><p>Portfolio, availability, and product information.</p></div>
              <div><span>02</span><strong>Business partnerships</strong><p>Distribution, institutional, export, or collaboration requests.</p></div>
              <div><span>03</span><strong>General support</strong><p>Company information and other business questions.</p></div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
