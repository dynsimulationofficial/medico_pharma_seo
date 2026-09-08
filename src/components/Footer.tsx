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

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.009-.371-.011-.57-.011-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.99c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.14 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
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
            {/* <Link href="/#quality">Resources</Link> */}
          <Link href="/contact">Contact us</Link>
         
        
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

          <a
            href="https://wa.me/919768118800"
            className="footer-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="footer-whatsapp-icon"><WhatsAppIcon /></span>
            <span>
              <small>WhatsApp us</small>
              <strong>+91 97681 18800</strong>
            </span>
          </a>
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
