import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Herbal Products | Medico Pharma",
  description:
    "Explore herbal product solutions including botanical formulations, herbal powders, capsules, tablets and wellness products for private label, OEM, contract manufacturing and export requirements.",
  keywords: [
    "herbal products",
    "herbal product manufacturer",
    "private label herbal products",
    "herbal supplement manufacturer",
    "botanical formulations",
    "OEM herbal products",
    "contract manufacturing herbal supplements",
    "herbal wellness products",
  ],
};

const herbalCategories = [
  {
    title: "Single-Herb Formulations",
    description:
      "Herbal product concepts based on selected individual botanical ingredients, subject to formulation and regulatory requirements.",
  },
  {
    title: "Multi-Herb Formulations",
    description:
      "Combination products developed using selected botanical ingredients according to defined product concepts.",
  },
  {
    title: "Herbal Capsules",
    description:
      "Convenient capsule formats suitable for selected powdered extracts, botanicals and herbal formulations.",
  },
  {
    title: "Herbal Tablets",
    description:
      "Solid-dose herbal product formats developed according to formulation compatibility and manufacturing feasibility.",
  },
  {
    title: "Herbal Powders",
    description:
      "Powder-based botanical formulations suitable for selected wellness and nutritional product applications.",
  },
  {
    title: "Herbal Extract Products",
    description:
      "Selected standardized or non-standardized botanical extract concepts, subject to ingredient availability and specifications.",
  },
  {
    title: "Herbal Wellness Products",
    description:
      "Botanical product concepts positioned around general wellness and lifestyle support without unsupported therapeutic claims.",
  },
  {
    title: "Custom Herbal Formulations",
    description:
      "Custom botanical product concepts evaluated according to ingredient selection, dosage format, market and technical feasibility.",
  },
];

const botanicalExamples = [
  "Selected Botanical Extracts",
  "Plant-Based Powders",
  "Herbal Blends",
  "Traditional Botanical Ingredients",
  "Standardized Extract Concepts",
  "Single-Herb Products",
  "Multi-Herb Products",
  "Custom Botanical Combinations",
];

const formats = [
  {
    title: "Capsules",
    description:
      "A convenient format for selected herbal powders, botanical extracts and combination formulations.",
  },
  {
    title: "Tablets",
    description:
      "Solid-dose formats suitable for selected botanical ingredients and herbal combinations.",
  },
  {
    title: "Powders",
    description:
      "Flexible powder formats for selected herbal, plant-based and botanical product concepts.",
  },
  {
    title: "Sachets",
    description:
      "Single-use packaging suitable for selected powdered herbal formulations.",
  },
  {
    title: "Liquid Preparations",
    description:
      "Selected liquid herbal product concepts may be considered depending on formulation and manufacturing capabilities.",
  },
  {
    title: "Bulk Herbal Ingredients",
    description:
      "Selected botanical ingredients or formulations may be available for appropriate bulk and B2B requirements.",
  },
];

const capabilities = [
  {
    title: "Private Label",
    description:
      "Build a herbal product range under your own brand with suitable product selection, packaging and branding support.",
  },
  {
    title: "OEM Manufacturing",
    description:
      "OEM manufacturing solutions for businesses looking to establish or expand their herbal wellness portfolio.",
  },
  {
    title: "Contract Manufacturing",
    description:
      "Commercial manufacturing support for suitable herbal and botanical product requirements.",
  },
  {
    title: "Custom Formulation Support",
    description:
      "Custom herbal concepts can be evaluated based on botanical ingredients, dosage format, target market and technical feasibility.",
  },
  {
    title: "Ingredient Sourcing",
    description:
      "Ingredient requirements can be evaluated according to botanical identity, specifications, availability and project needs.",
  },
  {
    title: "Packaging Solutions",
    description:
      "Suitable bottles, containers, pouches, cartons and other packaging formats can be considered depending on product requirements.",
  },
  {
    title: "Bulk Supply",
    description:
      "B2B supply options can be discussed for distributors, retailers, wellness businesses and other commercial partners.",
  },
  {
    title: "Export Support",
    description:
      "International requirements can be supported where permitted, subject to destination-market product and documentation rules.",
  },
];

const qualityPoints = [
  "Botanical ingredient identity and specification considerations",
  "Ingredient sourcing based on defined product requirements",
  "Formulation compatibility review",
  "Batch-based production documentation",
  "Packaging selected according to product characteristics",
  "Labeling reviewed according to applicable product requirements",
  "Traceability and documentation support where applicable",
  "Market-specific ingredient and claim considerations",
];

const process = [
  {
    number: "01",
    title: "Share Your Requirement",
    description:
      "Tell us your preferred herbal product concept, botanical ingredients, format, quantity, packaging and target market.",
  },
  {
    number: "02",
    title: "Ingredient & Product Review",
    description:
      "The proposed botanical ingredients, formulation concept and product format are reviewed for suitability and feasibility.",
  },
  {
    number: "03",
    title: "Formulation & Packaging",
    description:
      "Suitable formulation, dosage format, packaging and private-label requirements are defined.",
  },
  {
    number: "04",
    title: "Manufacturing",
    description:
      "Production proceeds according to the agreed product specification and manufacturing requirements.",
  },
  {
    number: "05",
    title: "Quality Review & Supply",
    description:
      "Finished products undergo applicable quality review before domestic distribution or agreed export supply.",
  },
];

const audiences = [
  "Herbal Wellness Brands",
  "Nutraceutical Companies",
  "Healthcare Businesses",
  "Natural Product Brands",
  "Distributors & Importers",
  "Retail Chains",
  "E-commerce Brands",
  "Private Label Businesses",
];

const faqs = [
  {
    question: "What types of herbal products can be manufactured?",
    answer:
      "Herbal product projects may include selected single-herb formulations, multi-herb blends, botanical capsules, tablets, powders, extracts and other suitable wellness-focused products. Final availability depends on ingredients, technical feasibility and applicable regulations.",
  },
  {
    question: "Do you provide private-label herbal products?",
    answer:
      "Yes. Suitable herbal products can be considered for private-label projects. Services may include product selection, formulation review, packaging coordination, branding requirements and commercial manufacturing.",
  },
  {
    question: "Can you develop custom herbal formulations?",
    answer:
      "Custom herbal formulation concepts can be evaluated based on botanical ingredients, intended product positioning, dosage format, quantity, technical feasibility and target-market regulations.",
  },
  {
    question: "Do you manufacture herbal capsules and tablets?",
    answer:
      "Selected herbal capsule and tablet formulations can be considered depending on ingredient characteristics, product specifications and manufacturing feasibility.",
  },
  {
    question: "Can you manufacture herbal powders?",
    answer:
      "Selected botanical and herbal powder formulations can be considered for suitable B2B, private-label and commercial manufacturing requirements.",
  },
  {
    question: "Can I select my own herbal ingredients?",
    answer:
      "Ingredient preferences can be discussed, but final ingredient selection depends on botanical suitability, availability, formulation compatibility and applicable regulations in the intended market.",
  },
  {
    question: "Do you provide herbal extracts?",
    answer:
      "Selected herbal extract-based product concepts may be considered depending on ingredient specifications, availability and project requirements.",
  },
  {
    question: "Can herbal products be exported?",
    answer:
      "Export projects can be supported where permitted. Botanical ingredients, product classification, labeling, documentation and permitted claims may vary between destination markets.",
  },
  {
    question: "Can herbal products claim to treat diseases?",
    answer:
      "Herbal products should not be marketed with disease-treatment, prevention or cure claims unless such claims are specifically permitted and supported under the applicable regulatory framework.",
  },
  {
    question: "Are herbal products the same as Ayurvedic products?",
    answer:
      "Not necessarily. Herbal products broadly use plant-derived or botanical ingredients, while Ayurvedic products may follow traditional Ayurvedic principles, formulations or regulatory classifications. The two categories should be described and marketed according to their applicable regulatory requirements.",
  },
];

export default function HerbalProductsPage() {
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* HERO */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Herbal Products
            </p>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Botanical and herbal product solutions for modern wellness
              brands.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              Explore herbal and botanical product solutions for wellness
              companies, nutraceutical brands, distributors and businesses
              seeking private-label, OEM or contract manufacturing support.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-400">
              Product ingredients, classification, labeling and permitted
              claims are subject to applicable regulations in the intended
              market.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-emerald-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-emerald-400"
              >
                Request Product Information
              </Link>

              <Link
                href="/services/oem-private-label"
                className="rounded-full border border-slate-700 px-6 py-3 font-medium text-white transition hover:border-slate-500"
              >
                Discuss Private Label
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT OVERVIEW */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Product Overview
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Herbal formulations built around carefully selected botanical
              ingredients.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-slate-600">
            <p>
              Herbal products use ingredients derived from plants and
              botanicals and may be offered across different formulations,
              dosage forms and product categories.
            </p>

            <p>
              Our B2B herbal product solutions are structured for brands,
              distributors and wellness businesses looking for private-label,
              OEM, contract manufacturing and commercial supply support.
            </p>

            <p>
              Each project should be evaluated according to botanical
              identity, ingredient specifications, formulation compatibility,
              product format, packaging and applicable regulatory
              requirements.
            </p>
          </div>
        </div>
      </section>

      {/* HERBAL PRODUCT RANGE */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Herbal Product Range
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Botanical product concepts across multiple formats.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Herbal product concepts can be evaluated according to selected
              botanicals, formulation requirements and intended market.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {herbalCategories.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-7"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 font-semibold text-emerald-700">
                  H
                </div>

                <h3 className="text-xl font-semibold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BOTANICAL SOLUTIONS */}
      <section className="bg-emerald-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-800">
              Botanical Solutions
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Flexible botanical concepts for differentiated herbal products.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              Depending on product requirements, projects may involve
              individual botanicals, selected extracts or combinations of
              multiple herbal ingredients.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Specific herbs or botanical ingredients should only be promoted
              with claims that are permitted for the intended product category
              and market.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {botanicalExamples.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white p-5 font-medium text-slate-900 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT FORMATS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Product Formats
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Multiple formats for herbal and botanical product requirements.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {formats.map((format) => (
              <article
                key={format.title}
                className="rounded-3xl border border-slate-200 p-7 transition hover:border-emerald-300"
              >
                <h3 className="text-xl font-semibold text-slate-950">
                  {format.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {format.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* B2B MANUFACTURING */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
              B2B Herbal Manufacturing
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Support for herbal brands from product concept to commercial
              supply.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Flexible manufacturing and supply solutions for wellness brands,
              distributors, retailers and other B2B partners.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-7"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Quality & Botanical Considerations
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Herbal products begin with clearly defined ingredient and
              formulation specifications.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Botanical products require attention to ingredient identity,
              quality specifications, formulation compatibility, packaging,
              labeling and target-market requirements.
            </p>
          </div>

          <div className="grid gap-4">
            {qualityPoints.map((point) => (
              <div
                key={point}
                className="flex gap-4 rounded-2xl border border-slate-200 p-5"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-800">
                  ✓
                </span>

                <p className="leading-7 text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HERBAL VS AYURVEDIC */}
      <section className="bg-emerald-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-800">
              Herbal vs Ayurvedic
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Herbal and Ayurvedic products should remain clearly separated.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              Herbal products broadly refer to formulations that contain
              plant-derived or botanical ingredients. Ayurvedic products may
              additionally follow traditional Ayurvedic formulations,
              principles and specific regulatory classifications.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Medico Pharma therefore presents Herbal Products and Ayurvedic
              Products as separate product categories to provide clearer
              product positioning and regulatory communication.
            </p>

            <Link
              href="/products/ayurvedic-products"
              className="mt-7 inline-flex font-semibold text-emerald-800 hover:text-emerald-950"
            >
              Explore Ayurvedic Products →
            </Link>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Who We Serve
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              Herbal product solutions for wellness brands and commercial
              partners.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-6 font-medium text-slate-900"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Our Process
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              From herbal product requirement to commercial supply.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-5">
            {process.map((step) => (
              <article
                key={step.number}
                className="rounded-3xl border border-slate-200 p-6"
              >
                <span className="text-sm font-semibold text-emerald-700">
                  {step.number}
                </span>

                <h3 className="mt-5 text-lg font-semibold text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRIVATE LABEL CTA */}
      <section className="bg-emerald-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  Private Label / OEM
                </p>

                <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950">
                  Planning to launch your own herbal product range?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                  Share your botanical ingredients, preferred product format,
                  packaging, quantity, branding and target-market
                  requirements.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex rounded-full bg-slate-950 px-7 py-3.5 font-medium text-white transition hover:bg-slate-800"
              >
                Discuss Your Requirement
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Herbal Products FAQ
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
              Common questions about herbal products, botanical formulations,
              private labeling, manufacturing and commercial supply.
            </p>
          </div>

          <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold text-slate-950">
                  {faq.question}

                  <span className="text-xl font-normal text-slate-500 transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* REGULATORY NOTICE */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <p className="text-sm leading-6 text-slate-500">
            <strong className="text-slate-700">Regulatory Notice:</strong>{" "}
            Herbal product classification, permitted botanical ingredients,
            labeling and product claims vary by jurisdiction. Product
            information on this page is intended for general B2B enquiries and
            does not represent medical advice or a claim that any herbal
            product diagnoses, treats, prevents or cures disease.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-emerald-600 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-100">
            Start Your Herbal Product Project
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Looking for herbal product manufacturing or private-label
            solutions?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-50">
            Tell us your preferred botanical ingredients, formulation, format,
            packaging, quantity and target market.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-7 py-3.5 font-medium text-emerald-800 transition hover:bg-emerald-50"
            >
              Request a Quote
            </Link>

            <Link
              href="/products"
              className="rounded-full border border-emerald-300 px-7 py-3.5 font-medium text-white transition hover:bg-emerald-500"
            >
              Explore All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}