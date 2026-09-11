"use client";

import Link from "next/link";
import type { CSSProperties } from "react";

const categories = [
  {
    number: "01",
    title: "Pharmaceutical Tablets",
    label: "Oral solid dosage",
    href: "/products/pharmaceutical-tablets",
    image: "/tablets.png",
  },
  {
    number: "02",
    title: "Pharmaceutical Capsules",
    label: "Capsule formulations",
    href: "/products/pharmaceutical-capsules",
    image: "/capsuless.png",
  },
  {
    number: "03",
    title: "Pharmaceutical Injection",
    label: "Injectable range",
    href: "/products/pharmaceutical-injection",
    image: "/injection.png",
  },
  {
    number: "04",
    title: "Anti Depressants Medicines",
    label: "Regulated therapy range",
    href: "/products/anti-depressants-medicines",
    image: "/medicines.png",
  },
  {
    number: "05",
    title: "Skin Care Products",
    label: "Dermatology & care",
    href: "/products/skin-care-products",
    image: "/p[roducts.png",
  },
  {
    number: "06",
    title: "Pharmaceutical Medicines",
    label: "General medicines",
    href: "/products/pharmaceutical-medicines",
    image: "/medicies.png",
  },
  {
    number: "07",
    title: "Pharmaceutical Ointment",
    label: "Topical formulations",
    href: "/products/pharmaceutical-ointment",
    image: "/cream.png",
  },
  {
    number: "08",
    title: "Antibiotic Medicines",
    label: "Regulated anti-infective range",
    href: "/products/antibiotic-medicines",
    image: "/phasma.png",
  },
  {
    number: "09",
    title: "Steroids Injections",
    label: "Regulated specialty range",
    href: "/products/steroids-injections",
    image: "/mp_injection.png",
  },
] as const;

export default function ProductsPage() {
  return (
    <main className="medico-cat-page">
      <section className="medico-cat-hero">
        <div className="medico-cat-pattern" aria-hidden="true" />
        <div className="medico-cat-glow medico-cat-glow-a" aria-hidden="true" />
        <div className="medico-cat-glow medico-cat-glow-b" aria-hidden="true" />

        <div className="container medico-cat-hero-inner">
          <div className="medico-cat-hero-copy">
            <h1>
              Pharmaceutical categories
              <em> for verified B2B enquiries.</em>
            </h1>

            <p>
              Explore product categories for institutional, wholesale,
              manufacturing and export discussions. Availability is subject to
              applicable licences, market approvals and commercial verification.
            </p>

            <div className="medico-compliance-note" role="note">
              <strong>Regulated-product notice</strong>
              <span>
                This website is intended for business and procurement enquiries.
                Medico Pharma does not provide medical advice or sell prescription
                medicines directly to consumers through this website.
              </span>
            </div>
          </div>

          <div className="medico-cat-hero-stat">
            <span>PRODUCT CATEGORIES</span>
            <strong>09</strong>
            <p>B2B catalogue categories</p>
            <svg viewBox="0 0 220 34" aria-hidden="true">
              <path d="M0 18h42l8-12 10 24 8-18 10 6h26l7-6 10 12 8-6h91" />
            </svg>
          </div>
        </div>
      </section>

      <section className="medico-cat-catalog">
        <div className="container">
          <div className="medico-cat-heading">
            <div>
              <span>B2B product directory</span>
              <h2>Browse categories</h2>
            </div>
          </div>

          <div className="medico-cat-grid">
            {categories.map((category, index) => (
              <Link
                href={category.href}
                className="medico-cat-card"
                style={
                  {
                    "--card-delay": `${index * 65}ms`,
                  } as CSSProperties
                }
                key={category.title}
              >
                <div
                  className="medico-cat-image"
                  style={{
                    backgroundImage: `url("${category.image}")`,
                  }}
                >
                  <span className="medico-cat-number">{category.number}</span>
                  <span className="medico-cat-image-shine" aria-hidden="true" />
                </div>

                <div className="medico-cat-card-copy">
                  <span>{category.label}</span>
                  <h3>{category.title}</h3>
                </div>

                <span className="medico-cat-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}

            <Link href="/contact" className="medico-cat-more-card">
              <span className="medico-cat-more-label">Business enquiry</span>
              <div>
                <strong>Discuss a verified B2B requirement</strong>
                <span aria-hidden="true">↗</span>
              </div>
              <i className="medico-cat-orbit medico-cat-orbit-a" aria-hidden="true" />
              <i className="medico-cat-orbit medico-cat-orbit-b" aria-hidden="true" />
            </Link>
          </div>

          <div className="medico-cat-bottom-nav">
            <Link href="/contact">Contact commercial team →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
