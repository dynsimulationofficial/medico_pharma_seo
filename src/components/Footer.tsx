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

          <a href="tel:+919876543210" className="footer-contact-item">
            <span className="footer-contact-icon">↗</span>
            <span>+91 98765 43210</span>
          </a>

          <a
            href="mailto:info@medico-pharma.com"
            className="footer-contact-item"
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
              in
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              ig
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              f
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              wa
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