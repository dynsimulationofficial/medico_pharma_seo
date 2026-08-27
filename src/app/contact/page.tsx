// app/contact/page.tsx  —  CONTACT
import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Medico Pharma for product, distribution, partnership, export, and general business enquiries.",
};

const routes = [
  {
    title: "Product enquiries",
    text: "Portfolio, availability, and product information.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="8.5" width="20" height="7" rx="3.5" />
        <path d="M12 8.5v7" />
      </svg>
    ),
  },
  {
    title: "Business partnerships",
    text: "Distribution, institutional, export, or collaboration requests.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m11 17-4.6 4.6a2.4 2.4 0 0 1-3.4-3.4L7.6 13.6" />
        <path d="m13 7 4.6-4.6a2.4 2.4 0 0 1 3.4 3.4L16.4 10.4" />
        <path d="m9 15 6-6" />
      </svg>
    ),
  },
  {
    title: "General support",
    text: "Company information and other business questions.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9.2" />
        <path d="M9.6 9.4a2.5 2.5 0 1 1 3.4 2.3c-.7.3-1 .9-1 1.6v.4" />
        <path d="M12 17.2h.01" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="page-hero contact-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow light hero-anim" style={{ animationDelay: "80ms" }}>
              Contact us
            </span>
            <h1 className="hero-anim" style={{ animationDelay: "170ms" }}>
              Tell us what you&apos;re <em>looking for</em>.
            </h1>
            <nav className="crumb hero-anim" style={{ animationDelay: "320ms" }} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>Contact</span>
            </nav>
          </div>
          <p className="hero-anim" style={{ animationDelay: "260ms" }}>
            Use the enquiry form to share your requirement. Form delivery connects to your company
            email or CRM before production launch.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div data-reveal="left">
            <div className="contact-info">
              <span className="eyebrow">Start here</span>
              <h2>One clear route for every enquiry.</h2>
              <p>
                Pick the enquiry type that matches your requirement so the message reaches the right
                desk once the form backend is connected.
              </p>

              <div className="contact-mini-cards">
                {routes.map((route) => (
                  <div key={route.title}>
                    <span className="mini-icon" aria-hidden="true">{route.icon}</span>
                    <div>
                      <strong>{route.title}</strong>
                      <p>{route.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div data-reveal="right" style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
