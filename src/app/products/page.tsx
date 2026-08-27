"use client";

import Link from "next/link";
import type { CSSProperties } from "react";

const categories = [
  {
    number: "01",
    title: 'Pharmaceutical Tablets',
    label: 'Oral solid dosage',
    href: '/products/pharmaceutical-tablets',
    image: "/Medics_pharma1.png",
  },
  {
    number: "02",
    title: 'Pharmaceutical Capsules',
    label: 'Capsule formulations',
    href: '/products/pharmaceutical-capsules',
    image: "/capsules.png",
  },
  {
    number: "03",
    title: 'Pharmaceutical Injection',
    label: 'Injectable range',
    href: '/products/pharmaceutical-injection',
    image: "/injection.png",
  },
  {
    number: "04",
    title: 'Anti Depressants Medicines',
    label: 'Therapy range',
    href: '/products/anti-depressants-medicines',
    image: "/medicines.png",
  },
  {
    number: "05",
    title: 'Skin Care Products',
    label: 'Dermatology & care',
    href: '/products/skin-care-products',
    image: "/p[roducts.png",
  },
  {
    number: "06",
    title: 'Pharmaceutical Medicines',
    label: 'General medicines',
    href: '/products/pharmaceutical-medicines',
    image: "/medicies.png",
  },
  {
    number: "07",
    title: 'Pharmaceutical Ointment',
    label: 'Topical formulations',
    href: '/products/pharmaceutical-ointment',
    image: "/cream.png",
  },
  {
    number: "08",
    title: 'Antibiotic Medicines',
    label: 'Anti-infective',
    href: '/products/antibiotic-medicines',
    image: "/phasma.png",
  },
  {
    number: "09",
    title: 'Steroids Injections',
    label: 'Specialty injectable',
    href: '/products/steroids-injections',
    image: "/mp_injection.png",
  }
] as const;

export default function Product01Page() {
  return (
    <main className="medico-cat-page">
      <section className="medico-cat-hero">
        <div className="medico-cat-pattern" aria-hidden="true" />
        <div className="medico-cat-glow medico-cat-glow-a" aria-hidden="true" />
        <div className="medico-cat-glow medico-cat-glow-b" aria-hidden="true" />

        <div className="container medico-cat-hero-inner">
          <div className="medico-cat-hero-copy">
            {/* <span className="medico-cat-kicker">Portfolio / Product 01</span> */}

            <h1>
              Healthcare categories
              <em> built for clear discovery.</em>
            </h1>

            <p>
              Browse nine product categories in this portfolio set. Each card is
              image-ready, so you can place your own real product photography for
              tablets, capsules, injections, skin care and the rest of the range.
            </p>
          </div>

          <div className="medico-cat-hero-stat">
            <span>PRODUCT SET</span>
            <strong>09</strong>
            <p>categories on this page</p>
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
              <span>Product set 1 of 4</span>
              <h2>Browse categories</h2>
            </div>

            <div className="medico-cat-page-links" aria-label="Product pages">
              <Link href="#" className={true ? "active" : ""}>01</Link>
              <Link href="/product-01" className={false ? "active" : ""}>02</Link>
              <Link href="/product-02" className={false ? "active" : ""}>03</Link>
              <Link href="/product-03" className={false ? "active" : ""}>04</Link>
               <Link href="/product-04" className={false ? "active" : ""}>05</Link>
            </div>
          </div>

          <div className="medico-cat-grid">
            {categories.map((category, index) => (
              <Link
                href={category.href}
                className="medico-cat-card"
                style={{
                  "--card-delay": `${index * 65}ms`,
                } as CSSProperties}
                key={category.title}
              >
                <div
                  className="medico-cat-image"
                  style={{
                    backgroundImage: `url("${category.image}")`,
                  }}
                >
                  {/* <span className="medico-cat-image-fallback">
                    Add product image
                  </span> */}

                  <span className="medico-cat-number">
                    {category.number}
                  </span>

                  <span className="medico-cat-image-shine" aria-hidden="true" />
                </div>

                <div className="medico-cat-card-copy">
                  <span>{category.label}</span>
                  <h3>{category.title}</h3>
                </div>

                <span className="medico-cat-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}

            <Link href="/product-01" className="medico-cat-more-card">
              <span className="medico-cat-more-label">Product 02</span>

              <div>
                <strong>View more categories</strong>
                <span aria-hidden="true">↗</span>
              </div>

              <i className="medico-cat-orbit medico-cat-orbit-a" aria-hidden="true" />
              <i className="medico-cat-orbit medico-cat-orbit-b" aria-hidden="true" />
            </Link>
          </div>

          <div className="medico-cat-bottom-nav">
            <Link href="/product-01" className={true ? "disabled" : ""}>
              ← Previous
            </Link>

            <span>Product 01</span>

            <Link href="/product-01" className={false ? "disabled" : ""}>
              Next →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
