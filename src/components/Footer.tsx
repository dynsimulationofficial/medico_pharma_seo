import Link from "next/link";
import Brand from "./Brand";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-column">
          <Brand />
          <p>
            A modern pharmaceutical brand experience built around quality,
            responsible communication, and dependable partnerships.
          </p>
        </div>

        <div className="footer-links-column">
          <p className="footer-label">Company</p>
          <Link href="/about">About us</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-links-column">
          <p className="footer-label">Explore</p>
          <Link href="/#quality">Quality approach</Link>
          <Link href="/#capabilities">Capabilities</Link>
          <Link href="/#faq">FAQ</Link>
        </div>

        <div className="footer-cta-column">
          <p className="footer-label">Start a conversation</p>
          <h3>Have a product or partnership enquiry?</h3>
          <Link href="/contact" className="footer-text-link">
            Contact our team <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Medico Pharma. All rights reserved.</p>
        <p>Healthcare communication with clarity and care.</p>
      </div>
    </footer>
  );
}
