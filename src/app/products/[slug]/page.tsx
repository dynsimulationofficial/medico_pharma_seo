import type { Metadata } from "next";
import Link from "next/link";
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
      answer: `Click on 'Enquire Now' for any product or reach out directly via call/WhatsApp at +91 98765 43210 or email info@medicopharma.com. Our commercial team responds within 24 business hours.`,
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
    <main className="medico-cat-page" style={{ background: "#f8fafc", minHeight: "100vh" }}>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* HERO SECTION */}
      <section
        style={{
          background: "linear-gradient(165deg, #052a33 0%, #083a46 50%, #03202a 100%)",
          color: "#ffffff",
          padding: "72px 0 84px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle at 12px 12px, rgba(159, 220, 214, 0.12) 3.5px, transparent 4px)",
            backgroundSize: "26px 26px",
            opacity: 0.6,
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: "800px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                borderRadius: "999px",
                background: "rgba(16, 145, 154, 0.2)",
                border: "1px solid rgba(53, 179, 179, 0.3)",
                color: "#9fdcd6",
                fontSize: "0.75rem",
                fontFamily: "var(--font-code, monospace)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#e4573d",
                  boxShadow: "0 0 8px #e4573d",
                }}
              />
              <span>{productsList.length} Products Available</span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.15,
                marginBottom: "18px",
                letterSpacing: "-0.03em",
              }}
            >
              {category.name}
            </h1>

            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.65,
                color: "rgba(224, 240, 242, 0.85)",
                maxWidth: "680px",
                marginBottom: "32px",
              }}
            >
              {category.description ||
                `Explore high-grade ${category.name} range supplied by Medico Pharma. Available for B2B wholesale, private-label branding, and export markets.`}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
              <Link
                href="/contact"
                className="button"
                style={{
                  background: "linear-gradient(135deg, #10919a 0%, #0b6e77 100%)",
                  color: "#ffffff",
                  borderColor: "transparent",
                  boxShadow: "0 8px 24px -6px rgba(16, 145, 154, 0.5)",
                }}
              >
                <span>Enquire Bulk Order</span>
                <span>→</span>
              </Link>

              <Link
                href="/products"
                className="button button-ghost-light"
              >
                <span>View All Categories</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BREADCRUMB BAR */}
      <div
        style={{
          background: "#ffffff",
          borderBottom: "1px solid var(--line, #dde9ec)",
          padding: "14px 0",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "0.85rem",
            color: "var(--ink-500, #3d6b77)",
          }}
        >
          <Link href="/" style={{ color: "inherit" }}>Home</Link>
          <span>/</span>
          <Link href="/products" style={{ color: "inherit" }}>Products</Link>
          <span>/</span>
          <strong style={{ color: "var(--brand-600, #0b6e77)", fontWeight: 600 }}>{category.name}</strong>
        </div>
      </div>

      {/* MAIN PRODUCTS GRID SECTION */}
      <section style={{ padding: "60px 0 90px" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "16px",
              marginBottom: "40px",
            }}
          >
            <div>
              <span className="eyebrow">Category Catalogue</span>
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
                  color: "var(--ink-900, #052a33)",
                  marginTop: "8px",
                }}
              >
                Products under {category.name}
              </h2>
            </div>

            <div
              style={{
                fontFamily: "var(--font-code, monospace)",
                fontSize: "0.8rem",
                padding: "6px 16px",
                borderRadius: "var(--r-pill, 999px)",
                background: "var(--mint-100, #dcefeb)",
                color: "var(--brand-700, #085a63)",
                fontWeight: 600,
              }}
            >
              Showing {productsList.length} items
            </div>
          </div>

          {/* GRID */}
          {productsList.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "28px",
              }}
            >
              {productsList.map((product) => {
                const displayImg = product.image || product.remoteImage || "/Medics_pharma1.png";
                return (
                  <div
                    key={product.id}
                    style={{
                      background: "#ffffff",
                      borderRadius: "20px",
                      border: "1px solid var(--line, #dde9ec)",
                      boxShadow: "0 4px 20px -8px rgba(5, 42, 51, 0.08)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      overflow: "hidden",
                      transition: "transform 260ms ease, box-shadow 260ms ease, border-color 260ms ease",
                      padding: "20px",
                    }}
                  >
                    <div>
                      {/* Product Image Frame */}
                      <div
                        style={{
                          height: "210px",
                          width: "100%",
                          background: "#f4f8f9",
                          borderRadius: "14px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "16px",
                          marginBottom: "18px",
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={displayImg}
                          alt={product.name}
                          style={{
                            maxHeight: "100%",
                            maxWidth: "100%",
                            objectFit: "contain",
                            transition: "transform 320ms ease",
                          }}
                          loading="lazy"
                        />
                        <span
                          style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            fontFamily: "var(--font-code, monospace)",
                            fontSize: "0.62rem",
                            background: "rgba(5, 42, 51, 0.85)",
                            color: "#ffffff",
                            padding: "3px 8px",
                            borderRadius: "6px",
                            letterSpacing: "0.08em",
                          }}
                        >
                          ID: {product.id}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          color: "var(--ink-900, #052a33)",
                          lineHeight: 1.35,
                          marginBottom: "10px",
                        }}
                      >
                        {product.name}
                      </h3>

                      {/* Category Tag */}
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "0.75rem",
                          fontWeight: 500,
                          color: "var(--brand-600, #0b6e77)",
                          background: "var(--mint-50, #eef7f5)",
                          padding: "4px 10px",
                          borderRadius: "6px",
                          marginBottom: "14px",
                        }}
                      >
                        {product.category}
                      </div>

                      {/* Price */}
                      <div
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: 700,
                          color: "var(--ink-900, #052a33)",
                          marginBottom: "16px",
                        }}
                      >
                        {product.price}
                      </div>
                    </div>

                    {/* Actions */}
                    <div
                      style={{
                        paddingTop: "14px",
                        borderTop: "1px solid var(--line, #dde9ec)",
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                      <Link
                        href="/contact"
                        style={{
                          flex: 1,
                          textAlign: "center",
                          padding: "10px 16px",
                          borderRadius: "var(--r-pill, 999px)",
                          background: "var(--ink-900, #052a33)",
                          color: "#ffffff",
                          fontWeight: 600,
                          fontSize: "0.85rem",
                          transition: "background 200ms ease",
                        }}
                      >
                        Enquire Now
                      </Link>

                      {product.productUrl && (
                        <a
                          href={product.productUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View on IndiaMART"
                          style={{
                            padding: "10px 14px",
                            borderRadius: "var(--r-pill, 999px)",
                            border: "1px solid var(--line-strong, #c4dae0)",
                            color: "var(--ink-700, #0d4c5a)",
                            display: "grid",
                            placeItems: "center",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                          }}
                        >
                          ↗
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div
              style={{
                background: "#ffffff",
                padding: "60px",
                borderRadius: "24px",
                textAlign: "center",
                border: "1px dashed var(--line-strong, #c4dae0)",
              }}
            >
              <p style={{ fontSize: "1.1rem", color: "var(--ink-500)" }}>
                Products for this category are currently being updated.
              </p>
              <Link
                href="/contact"
                className="button"
                style={{ marginTop: "20px" }}
              >
                <span>Request Catalogue</span>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section
        style={{
          background: "#ffffff",
          padding: "70px 0",
          borderTop: "1px solid var(--line, #dde9ec)",
        }}
      >
        <div className="container" style={{ maxWidth: "840px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span className="eyebrow">FAQs</span>
            <h2 style={{ fontSize: "2rem", marginTop: "10px" }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {faqs.map((faq) => (
              <details
                key={faq.question}
                style={{
                  background: "var(--sky-50, #f3f8f9)",
                  borderRadius: "14px",
                  padding: "18px 22px",
                  border: "1px solid var(--line, #dde9ec)",
                  cursor: "pointer",
                }}
              >
                <summary
                  style={{
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "var(--ink-900, #052a33)",
                    outline: "none",
                  }}
                >
                  {faq.question}
                </summary>
                <p
                  style={{
                    marginTop: "12px",
                    color: "var(--ink-500, #3d6b77)",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                  }}
                >
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, #0b6e77 0%, #052a33 100%)",
          color: "#ffffff",
          padding: "60px 0",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: "700px" }}>
          <h2 style={{ color: "#ffffff", fontSize: "2rem", marginBottom: "14px" }}>
            Looking for wholesale or contract manufacturing of {category.name}?
          </h2>
          <p style={{ color: "rgba(255, 255, 255, 0.8)", marginBottom: "28px", fontSize: "1rem" }}>
            Contact our commercial team today for custom quotes, product certificates, and export support.
          </p>
          <Link
            href="/contact"
            className="button button-light"
          >
            <span>Get Quote & Catalogue</span>
            <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
