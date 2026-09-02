import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug } from "@/data/products";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Category Not Found | Medico Pharma",
    };
  }

  return {
    title: `${category.name} | Medico Pharma`,
    description:
      category.description ||
      `Explore high-quality ${category.name} solutions from Medico Pharma. Wholesaler, manufacturer, private label and export supplier from Mumbai.`,
    keywords: [
      category.name,
      `${category.name} manufacturer`,
      `${category.name} supplier`,
      `wholesaler ${category.name}`,
      "Medico Pharma Mumbai",
    ],
  };
}

function getProductMeta(name: string) {
  const strength = name.match(/\b\d+(?:\.\d+)?\s?(?:mg|mcg|g|ml|iu|%)\b/i)?.[0] || "B2B";
  const lower = name.toLowerCase();

  let form = "Medicine";
  if (lower.includes("capsule")) form = "Capsule";
  else if (lower.includes("tablet")) form = "Tablet";
  else if (lower.includes("injection")) form = "Injection";
  else if (lower.includes("ointment")) form = "Ointment";
  else if (lower.includes("cream")) form = "Cream";
  else if (lower.includes("gel")) form = "Gel";
  else if (lower.includes("syrup")) form = "Syrup";

  return { strength, form };
}

export default async function DynamicCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const productsList = category.products || [];

  const faqs = [
    {
      question: `What products are available under ${category.name}?`,
      answer: `We supply a comprehensive range of ${category.name} including certified formulations for hospital, wholesale, and export distribution. Contact our team for full batch details and stock availability.`,
    },
    {
      question: `Do you offer B2B wholesale prices for ${category.name}?`,
      answer: `Yes, Medico Pharma specializes in bulk B2B supply, contract manufacturing, OEM, and private labeling for ${category.name}. Prices are quoted based on order volume and packaging specifications.`,
    },
    {
      question: `How can I place an inquiry or request product samples?`,
      answer: `Click on 'Enquire Now' for any product or reach out directly via call/WhatsApp at +91 98765 43210 or email info@medico-pharma.com. Our commercial team responds within 24 business hours.`,
    },
    {
      question: `Are these products eligible for export?`,
      answer: `Yes, we support export of ${category.name} with compliance documentation and custom labeling for permitted international markets.`,
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="dynamic-category-page dynamic-category-split-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* SPLIT CATEGORY EXPERIENCE — HERO LEFT / PRODUCTS RIGHT */}
      <section className="dynamic-category-split-shell">
        <div className="dynamic-category-split-grid">
          {/* LEFT — SAME GREEN CATEGORY BACKGROUND */}
          <aside className="dynamic-category-split-hero">
            <div className="dynamic-category-hero-dots" aria-hidden="true" />
            <div className="dynamic-category-hero-glow dynamic-category-hero-glow-a" aria-hidden="true" />
            <div className="dynamic-category-hero-glow dynamic-category-hero-glow-b" aria-hidden="true" />

            <div className="dynamic-category-split-hero-inner">
              <h1>
                {category.name}
                <em>built for clear discovery.</em>
              </h1>

              <p>
                {category.description ||
                  `Explore high-grade ${category.name} range supplied by Medico Pharma. Available for B2B wholesale, private-label branding, and export markets.`}
              </p>

              <div className="dynamic-category-split-trust" aria-label="Category benefits">
                <div>
                  <span className="dynamic-category-split-trust-icon">✓</span>
                  <p><strong>Quality Assured</strong><small>Verified supply</small></p>
                </div>
                <div>
                  <span className="dynamic-category-split-trust-icon">◎</span>
                  <p><strong>B2B Ready</strong><small>Wholesale support</small></p>
                </div>
                <div>
                  <span className="dynamic-category-split-trust-icon">↗</span>
                  <p><strong>Export Support</strong><small>Global enquiries</small></p>
                </div>
              </div>

              <div className="dynamic-category-split-stats dynamic-category-split-stats-v9" aria-label="Category service highlights">
                <div>
                  <i aria-hidden="true" />
                  <strong>{String(productsList.length).padStart(2, "0")}</strong>
                  <span>Products</span>
                </div>
                <div>
                  <i aria-hidden="true" />
                  <strong>24h</strong>
                  <span>Business response</span>
                </div>
                <div>
                  <i aria-hidden="true" />
                  <strong>B2B</strong>
                  <span>Supply focus</span>
                </div>
              </div>

              <div className="dynamic-category-split-contact dynamic-category-split-contact-v9">
                <div className="dynamic-category-split-contact-copy">
                  <span>NEED PRODUCT SUPPORT?</span>
                  <strong>Talk to our commercial team.</strong>
                </div>

                <div className="dynamic-category-split-contact-actions">
                  {/* <a href="tel:+919876543210" className="premium-mobile-enquire">
                    <span className="dynamic-category-contact-icon" aria-hidden="true">⌕</span>
                    Call now
                  </a> */}
                  <Link href="/contact" className="dynamic-category-enquiry-btn">
                    Get in touch <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT — PREMIUM PRODUCT LIST */}
          <section className="dynamic-category-split-products">
            <div className="dynamic-category-split-products-head">
              <div>
                <h2>Products under {category.name}</h2>
                <p>Browse the available products and open an enquiry for the item that fits your requirement.</p>
              </div>

              <div className="dynamic-category-split-count">
                <span>SHOWING</span>
                <strong>{String(productsList.length).padStart(2, "0")}</strong>
                <small>items</small>
              </div>
            </div>

            {productsList.length > 0 ? (
              <div className="dynamic-product-premium-list">
                {productsList.map((product, index) => {
                  const displayImg = product.image || product.remoteImage || "/Medics_pharma1.png";
                  const meta = getProductMeta(product.name);

                  return (
                    <article
                      className="dynamic-product-premium-card"
                      key={product.id}
                      style={{ "--product-delay": `${index * 70}ms` } as CSSProperties}
                    >
                      <span className="dynamic-product-premium-rail" aria-hidden="true" />
                      <span className="dynamic-product-premium-index">{String(index + 1).padStart(2, "0")}</span>

                      <div className="dynamic-product-premium-media">
                        <span className="dynamic-product-premium-orbit" aria-hidden="true" />
                        <span className="dynamic-product-premium-shine" aria-hidden="true" />
                        <img src={displayImg} alt={product.name} loading="lazy" />
                      </div>

                      <div className="dynamic-product-premium-main">
                        <div className="dynamic-product-premium-label-row">
                          <span>{product.category}</span>
                          <small>ID / {product.id}</small>
                        </div>

                        <h3>{product.name}</h3>

                        <div className="dynamic-product-premium-specs">
                          <span><i>◉</i><b>{meta.strength}</b><small>Strength</small></span>
                          <span><i>○</i><b>{meta.form}</b><small>Form</small></span>
                          <span><i>□</i><b>B2B</b><small>Supply</small></span>
                        </div>
                      </div>

                      <div className="dynamic-product-premium-side">
                        <div className="dynamic-product-premium-price">
                          <span>Commercial quote</span>
                          <strong>{product.price}</strong>
                        </div>

                        <div className="dynamic-product-premium-actions">
                          <Link href="/contact" className="dynamic-product-premium-enquire">
                            Enquire Now <span aria-hidden="true">→</span>
                          </Link>

                          {product.productUrl && (
                            <a
                              href={product.productUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="dynamic-product-premium-external"
                              title="View product source"
                              aria-label={`View ${product.name} source`}
                            >
                              ↗
                            </a>
                          )}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="dynamic-category-empty-state">
                <span>CATALOGUE UPDATE</span>
                <h3>Products for this category are currently being updated.</h3>
                <Link href="/contact" className="text-link">
                  Request Catalogue <span aria-hidden="true">→</span>
                </Link>
              </div>
            )}
          </section>
        </div>
      </section>

      {/* FAQ — CONTENT UNCHANGED */}
      <section className="section faq-section home-faq-section dynamic-category-faq" id="faq">
        <div className="container faq-grid">
          <div>
            <div className="section-heading">
              <span className="eyebrow">Frequently asked Questions</span>
              <h2>Useful answers before you enquire.</h2>
              <p>Quick answers about availability, wholesale pricing, samples and export support for this category.</p>
            </div>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>
                  <span>{faq.question}</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
