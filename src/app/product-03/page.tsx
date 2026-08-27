"use client";

import Link from "next/link";
import type { CSSProperties } from "react";

const categories = [
  {
    number: "19",
    title: 'Anti Fungal Medicine',
    label: 'Anti-infective',
    href: '/products/anti-fungal-medicine',
    image: "/images/product-categories/anti-fungal-medicine.webp",
  },
  {
    number: "20",
    title: 'Steroids Tablets',
    label: 'Specialty oral range',
    href: '/products/steroids-tablets',
    image: "/images/product-categories/steroids-tablets.webp",
  },
  {
    number: "21",
    title: 'Protein Powder',
    label: 'Nutrition',
    href: '/products/protein-powders',
    image: "/images/product-categories/protein-powder.webp",
  },
  {
    number: "22",
    title: 'Anti Acne Medicines',
    label: 'Dermatology',
    href: '/products/anti-acne-medicines',
    image: "/images/product-categories/anti-acne-medicines.webp",
  },
  {
    number: "23",
    title: 'Hypertension Medicine',
    label: 'Cardiovascular',
    href: '/products/hypertension-medicine',
    image: "/images/product-categories/hypertension-medicine.webp",
  },
  {
    number: "24",
    title: 'Analgesic And Anti Inflammatory Drugs',
    label: 'Pain & inflammation',
    href: '/products/analgesic-and-anti-inflammatory-drugs',
    image: "/images/product-categories/analgesic-anti-inflammatory.webp",
  },
  {
    number: "25",
    title: 'Pharmaceutical Cream',
    label: 'Topical formulations',
    href: '/products/pharmaceutical-cream',
    image: "/images/product-categories/pharmaceutical-cream.webp",
  },
  {
    number: "26",
    title: 'Foam Face Wash',
    label: 'Skin care',
    href: '/products/foam-face-wash',
    image: "/images/product-categories/foam-face-wash.webp",
  },
  {
    number: "27",
    title: 'Variable Auto Transformer',
    label: 'Miscellaneous listing',
    href: '/products/variable-auto-transformer',
    image: "/images/product-categories/variable-auto-transformer.webp",
  }
] as const;

export default function Product03Page() {
  return (
    <main className="medico-cat-page">
      <section className="medico-cat-hero">
        <div className="medico-cat-pattern" aria-hidden="true" />
        <div className="medico-cat-glow medico-cat-glow-a" aria-hidden="true" />
        <div className="medico-cat-glow medico-cat-glow-b" aria-hidden="true" />

        <div className="container medico-cat-hero-inner">
          <div className="medico-cat-hero-copy">
            {/* <span className="medico-cat-kicker">Portfolio / Product 03</span> */}

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
              <span>Product set 3 of 4</span>
              <h2>Browse categories</h2>
            </div>

            <div className="medico-cat-page-links" aria-label="Product pages">
              <Link href="/products" className={false ? "active" : ""}>01</Link>
              <Link href="/product-01" className={false ? "active" : ""}>02</Link>
              <Link href="#" className={true ? "active" : ""}>03</Link>
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

            <Link href="/product-04" className="medico-cat-more-card">
              <span className="medico-cat-more-label">Product 04</span>

              <div>
                <strong>View more categories</strong>
                <span aria-hidden="true">↗</span>
              </div>

              <i className="medico-cat-orbit medico-cat-orbit-a" aria-hidden="true" />
              <i className="medico-cat-orbit medico-cat-orbit-b" aria-hidden="true" />
            </Link>
          </div>

          <div className="medico-cat-bottom-nav">
            <Link href="/product-01" className={false ? "disabled" : ""}>
              ← Previous
            </Link>

            <span>Product 03</span>

            <Link href="/product-04" className={false ? "disabled" : ""}>
              Next →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
