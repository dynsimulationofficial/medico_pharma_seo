import Link from "next/link";

const products = [
  ["Pharmaceutical Tablets", "/products/pharmaceutical-tablets"],
   ["Antidiabetic Medicine", "/products/antidiabetic-medicine"],
  ["Skin Care Products", "/products/skin-care-products"],
  ["Protein Powders", "/products/protein-powders"],
  ["Herbal Capsules", "/products/herbal-capsules"],
];

const services = [
  ["Pharmaceutical", "/services/pharmaceutical-manufacturing"],
  ["Contract Manufacturing", "/services/contract-manufacturing"],
  ["OEM / Private Label", "/services/oem-private-label"],
  ["Third-Party Manufacturing", "/services/third-party-manufacturing"],
  ["Export Services", "/services/export-services"],
];

function SocialIcon({ name }: { name: "linkedin" | "instagram" | "facebook" | "whatsapp" }) {
  const iconProps = {
    width: 14,
    height: 14,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "instagram") {
    return (
      <svg {...iconProps}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "facebook") {
    return (
      <svg {...iconProps}>
        <path d="M14 21v-8h2.7l.4-3H14V8.1c0-.9.3-1.5 1.6-1.5h1.7V4a22 22 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.3V10H8v3h2.6v8" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg {...iconProps}>
        <path d="M6 9v9M6 6.2v.1M10 18v-5a3 3 0 0 1 6 0v5M10 9v9" />
      </svg>
    );
  }

  return (
    <svg {...iconProps}>
      <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.7A8 8 0 1 1 20 11.5Z" />
      <path d="M8.8 8.7c.2-.4.5-.4.8-.4l.7 1.7c.1.3 0 .5-.2.7l-.5.5a6 6 0 0 0 2.9 2.9l.5-.5c.2-.2.4-.3.7-.2l1.7.7c0 .3 0 .6-.4.8-.4.4-1 .7-1.6.5a8.2 8.2 0 0 1-4.9-4.9c-.2-.6.1-1.2.3-1.8Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main footer-directory-layout">

        {/* BRAND */}
        <div className="footer-brand-column">
          <Link
            href="/"
            className="brand on-dark"
            aria-label="Medico Pharma — home"
          >
            <span className="brand-mark" aria-hidden="true">
              <span />
              <i />
            </span>

            <span className="brand-text">
              <strong>Medico Pharma</strong>
              <small>Healthcare</small>
            </span>
          </Link>

          <p>
            Healthcare products, manufacturing support and partnership services
            presented with clarity, quality and responsible communication.
          </p>

          <svg
            className="footer-trace"
            viewBox="0 0 140 26"
            aria-hidden="true"
          >
            <path d="M0 13h34l6-10 7 20 6-16 5 6h12l5-4 5 8 4-4h51" />
          </svg>
        </div>

        {/* COMPANY */}
        <div className="footer-links-column">
          <p className="footer-label">Company</p>

          <Link href="/about">About us</Link>  <Link href="/#faq">Products</Link>
           <Link href="/#faq">Services</Link>
            <Link href="/#quality">Resources</Link>
          <Link href="/contact">Contact</Link>
         
        
        </div>

        {/* PRODUCTS */}
        <div className="footer-links-column">
          <p className="footer-label">Products</p>

          {products.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}

          <Link href="/products" className="footer-view-all">
            View all products <span>→</span>
          </Link>
        </div>

        {/* SERVICES */}
        <div className="footer-links-column">
          <p className="footer-label">Services</p>

          {services.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}

          <Link href="/services" className="footer-view-all">
            View all services <span>→</span>
          </Link>
        </div>

        {/* COMPANY POLICY */}
        <div className="footer-links-column footer-policy-column">
          <p className="footer-label">Company Policy</p>

          <Link
            href="/terms-&-conditions"
           
          >
           
            Terms & Conditions
          </Link>

          <Link
            href="/privacy-policy"
            
          >
           
            Privacy Policy
          </Link>
        </div>

        {/* CONTACT */}
        <div className="footer-contact-column">
          <p className="footer-label">Contact</p>

          <a href="tel:+919768118800" className="footer-contact-item">
            <span className="footer-contact-icon">↗</span>
            <span>+91 97681 18800</span>
          </a>

          <a
            href="mailto:info@medico-pharma.com"
            className="footer-contact-item footer-email"
          >
            <span className="footer-contact-icon">@</span>
            <span>info@medico-pharma.com</span>
          </a>

          <div className="footer-contact-item">
            <span className="footer-contact-icon">⌖</span>
            <span>
              Mumbai, Maharashtra
              <br />
              India
            </span>
          </div>

          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <SocialIcon name="linkedin" />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <SocialIcon name="instagram" />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <SocialIcon name="facebook" />
            </a>

            <a
              href="https://wa.me/919768118800"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <SocialIcon name="whatsapp" />
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
       <p>
  © 2020{" "}
  <Link href="/" className="footer-medico-highlight">
    Medico Pharma
  </Link>
  . All rights reserved.
</p>

        <p className="footer-powered">
          Powered by{" "}
          <a
            href="https://dynsimulation.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dynsimulation Technologies Pvt Ltd
          </a>
        </p>
      </div>
    </footer>
  );
}