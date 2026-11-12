import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug } from "@/data/products";
import CategoryProductList from "@/components/CategoryProductList";

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

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Category Not Found | Medico Pharma",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${category.name} | Medico Pharma`,
    description:
      category.description ||
      `B2B information about ${category.name} from Medico Pharma. Availability is subject to regulatory requirements, market approvals and commercial verification.`,
    keywords: [
      category.name,
      `${category.name} B2B supplier`,
      `${category.name} manufacturing`,
      `${category.name} export`,
      "Medico Pharma Mumbai",
    ],
    alternates: {
      canonical: `/products/${category.slug}`,
    },
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
      question: `What products are listed under ${category.name}?`,
      answer: `This page provides B2B catalogue information for ${category.name}. Product availability, formulation, packaging and supply are confirmed only after a commercial and regulatory review.`,
    },
    {
      question: `Who can submit an enquiry for ${category.name}?`,
      answer: `Medico Pharma handles business, institutional, wholesale, manufacturing and export enquiries. We may request organisation details, intended market and applicable licences before progressing a regulated-product request.`,
    },
    {
      question: `Does this website sell prescription medicines directly to consumers?`,
      answer:
        "No. This website is for B2B information and business enquiries and does not provide medical advice or direct-to-consumer prescription medicine sales.",
    },
    {
      question: `Can ${category.name} be supplied for export?`,
      answer: `Export discussions are subject to product classification, destination-country approvals, licences, documentation and applicable trade and pharmaceutical regulations.`,
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

  const faqSchemaJson = JSON.stringify(faqSchema).replace(/</g, "\\u003c");

  return (
    <main className="dynamic-category-page dynamic-category-split-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchemaJson }}
      />

      <section className="dynamic-category-split-shell">
        <div className="dynamic-category-split-grid">
          <aside className="dynamic-category-split-hero">
            <div className="dynamic-category-hero-dots" aria-hidden="true" />
            <div
              className="dynamic-category-hero-glow dynamic-category-hero-glow-a"
              aria-hidden="true"
            />
            <div
              className="dynamic-category-hero-glow dynamic-category-hero-glow-b"
              aria-hidden="true"
            />

            <div className="dynamic-category-split-hero-inner">
              <h1>
                {category.name}
                <em>B2B product information.</em>
              </h1>

              <p>
                {category.description ||
                  `Explore ${category.name} information for qualified business, institutional and export enquiries.`}
              </p>

              <div className="dynamic-category-compliance-note" role="note">
                <strong className="dynamic-category-compliance-notice-title">
                  Business & regulatory notice
                </strong>
                <p>
                  Product listings are informational and do not constitute a
                  consumer offer, prescription, medical advice or guaranteed
                  availability. Regulated supply is subject to applicable licences,
                  approvals, documentation and market requirements.
                </p>
              </div>

              <div
                className="dynamic-category-split-trust"
                aria-label="Category benefits"
              >
                <div>
                  <span className="dynamic-category-split-trust-icon">✓</span>
                  <p>
                    <strong>Quality Focused</strong>
                    <small>Documented B2B supply</small>
                  </p>
                </div>
                <div>
                  <span className="dynamic-category-split-trust-icon">◎</span>
                  <p>
                    <strong>B2B Only</strong>
                    <small>Commercial enquiries</small>
                  </p>
                </div>
                <div>
                  <span className="dynamic-category-split-trust-icon">↗</span>
                  <p>
                    <strong>Export Review</strong>
                    <small>Market-specific checks</small>
                  </p>
                </div>
              </div>

              <div
                className="dynamic-category-split-stats dynamic-category-split-stats-v9"
                aria-label="Category service highlights"
              >
                <div>
                  <i aria-hidden="true" />
                  <strong>{String(productsList.length).padStart(2, "0")}</strong>
                  <span>Listed items</span>
                </div>
                <div>
                  <i aria-hidden="true" />
                  <strong>B2B</strong>
                  <span>Enquiry focus</span>
                </div>
                <div>
                  <i aria-hidden="true" />
                  <strong>REG</strong>
                  <span>Subject to review</span>
                </div>
              </div>

              <div className="dynamic-category-split-contact dynamic-category-split-contact-v9">
                <div className="dynamic-category-split-contact-copy">
                  <span>BUSINESS REQUIREMENT?</span>
                  <strong>Contact our commercial team.</strong>
                </div>

                <div className="dynamic-category-split-contact-actions">
                  <Link href="/contact" className="dynamic-category-enquiry-btn">
                    Get in touch <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          <CategoryProductList
            productsList={productsList}
            categoryName={category.name}
          />
        </div>
      </section>

      <section
        className="section faq-section home-faq-section dynamic-category-faq"
        id="faq"
      >
        <div className="container faq-grid">
          <div>
            <div className="section-heading">
              <span className="eyebrow">Frequently asked questions</span>
              <h2>Useful answers before you enquire.</h2>
              <p>
                Information about B2B availability, verification and
                market-specific regulatory requirements.
              </p>
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
