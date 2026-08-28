"use client";

import Link from "next/link";
import type { CSSProperties } from "react";

const categories = [
  {
    number: "28",
    title: 'Minoxidil Topical Solution',
    label: 'Hair care / topical',
    href: '/products/minoxidil-topical-solution',
    image: "/minoxidil.png",
  },
  {
    number: "29",
    title: 'Check Shirt',
    label: 'Miscellaneous listing',
    href: '/products/check-shirt',
    image: "/Miscellaneous listing.png",
  },
  {
    number: "30",
    title: 'Womens Health',
    label: "Women's health",
    href: '/products/womens-health',
    image: "/Womens Health.png",
  },
  {
    number: "31",
    title: 'Hair Loss Medicine',
    label: 'Hair care',
    href: '/products/hair-loss-medicine',
    image: "/hair loss medicine.png",
  },
  {
    number: "32",
    title: 'Eye Care Medicine',
    label: 'Ophthalmic',
    href: '/products/eye-care-medicine',
    image: "/Eye Care Medicine.png",
  },
  {
    number: "33",
    title: 'Testosterone Gel',
    label: 'Specialty topical',
    href: '/products/testosterone-gel',
    image: "/Testosterone Gel.png",
  },
  {
    number: "34",
    title: 'Anti Alcohol Drugs',
    label: 'Dependence management',
    href: '/products/anti-alcohol-drugs',
    image: "/Anti Alcohol Drugs.png",
  },
  {
    number: "35",
    title: 'Pain Relief Gel',
    label: 'Topical pain relief',
    href: '/products/pain-relief-gel',
    image: "/Pain Relief Gel.png",
  },

] as const;

export default function Product04Page() {
  return (
    <main className="medico-cat-page">
      <section className="medico-cat-hero">
        <div className="medico-cat-pattern" aria-hidden="true" />
        <div className="medico-cat-glow medico-cat-glow-a" aria-hidden="true" />
        <div className="medico-cat-glow medico-cat-glow-b" aria-hidden="true" />

        <div className="container medico-cat-hero-inner">
          <div className="medico-cat-hero-copy">
            {/* <span className="medico-cat-kicker">Portfolio / Product 04</span> */}

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
              <span>Product set 4 of 4</span>
              <h2>Browse categories</h2>
            </div>

            <div className="medico-cat-page-links" aria-label="Product pages">
              <Link href="/products" className={false ? "active" : ""}>01</Link>
              <Link href="/product-01" className={false ? "active" : ""}>02</Link>
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

            <Link href="/products" className="medico-cat-more-card">
              <span className="medico-cat-more-label">Other products</span>

              <div>
                <strong>Browse additional products</strong>
                <span aria-hidden="true">↗</span>
              </div>

              <i className="medico-cat-orbit medico-cat-orbit-a" aria-hidden="true" />
              <i className="medico-cat-orbit medico-cat-orbit-b" aria-hidden="true" />
            </Link>
          </div>

          <div className="medico-cat-bottom-nav">
            <Link href="/product-03" className={false ? "disabled" : ""}>
              ← Previous
            </Link>

            <span>Product 04</span>

            {/* <Link href="/product-04" className={true ? "disabled" : ""}>
              Next →
            </Link> */}
          </div>
        </div>
      </section>
    </main>
  );
}
