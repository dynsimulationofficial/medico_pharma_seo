"use client";

import Link from "next/link";
import type { CSSProperties } from "react";

const categories = [
  {
    number: "10",
    title: 'Antimalarial Medicine',
    label: 'Anti-infective',
    href: '/products/antimalarial-medicine',
    image: "/images/product-categories/antimalarial-medicine.webp",
  },
  {
    number: "11",
    title: 'Anti Cancer Medicine',
    label: 'Oncology range',
    href: '/products/anti-cancer-medicine',
    image: "/images/product-categories/anti-cancer-medicine.webp",
  },
  {
    number: "12",
    title: 'Antidiabetic Medicine',
    label: 'Metabolic care',
    href: '/products/antidiabetic-medicine',
    image: "/images/product-categories/antidiabetic-medicine.webp",
  },
  {
    number: "13",
    title: 'Erectile Dysfunction Medicine',
    label: "Men's health",
    href: '/products/erectile-dysfunction-medicine',
    image: "/images/product-categories/erectile-dysfunction-medicine.webp",
  },
  {
    number: "14",
    title: 'Pain Relief Medicines',
    label: 'Pain management',
    href: '/products/pain-relief-medicines',
    image: "/images/product-categories/pain-relief-medicines.webp",
  },
  {
    number: "15",
    title: 'Herbal Capsul',
    label: 'Herbal wellness',
    href: '/products/herbal-capsul',
    image: "/images/product-categories/herbal-capsul.webp",
  },
  {
    number: "16",
    title: 'Anti Psychotic Medicines',
    label: 'Neuro / psychiatry',
    href: '/products/anti-psychotic-medicines',
    image: "/images/product-categories/anti-psychotic-medicines.webp",
  },
  {
    number: "17",
    title: 'Antiparasitic Medicine',
    label: 'Anti-infective',
    href: '/products/antiparasitic-medicine',
    image: "/images/product-categories/antiparasitic-medicine.webp",
  },
  {
    number: "18",
    title: 'Pharmaceutical Syrup',
    label: 'Liquid dosage',
    href: '/products/pharmaceutical-syrup',
    image: "/images/product-categories/pharmaceutical-syrup.webp",
  }
] as const;

export default function Product02Page() {
  return (
    <main className="medico-cat-page">
      <section className="medico-cat-hero">
        <div className="medico-cat-pattern" aria-hidden="true" />
        <div className="medico-cat-glow medico-cat-glow-a" aria-hidden="true" />
        <div className="medico-cat-glow medico-cat-glow-b" aria-hidden="true" />

        <div className="container medico-cat-hero-inner">
          <div className="medico-cat-hero-copy">
            {/* <span className="medico-cat-kicker">Portfolio / Product 02</span> */}

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
              <span>Product set 2 of 4</span>
              <h2>Browse categories</h2>
            </div>

            <div className="medico-cat-page-links" aria-label="Product pages">
              <Link href="/products" className={false ? "active" : ""}>01</Link>
              <Link href="#" className={true ? "active" : ""}>02</Link>
              <Link href="/product-03" className={false ? "active" : ""}>03</Link>
              <Link href="/product-04" className={false ? "active" : ""}>04</Link>
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
                  <span className="medico-cat-image-fallback">
                    Add product image
                  </span>

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

            <Link href="/product-03" className="medico-cat-more-card">
              <span className="medico-cat-more-label">Product 03</span>

              <div>
                <strong>View more categories</strong>
                <span aria-hidden="true">↗</span>
              </div>

              <i className="medico-cat-orbit medico-cat-orbit-a" aria-hidden="true" />
              <i className="medico-cat-orbit medico-cat-orbit-b" aria-hidden="true" />
            </Link>
          </div>

          <div className="medico-cat-bottom-nav">
            <Link href="/products" className={false ? "disabled" : ""}>
              ← Previous
            </Link>

            <span>Product 02</span>

            <Link href="/product-03" className={false ? "disabled" : ""}>
              Next →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
