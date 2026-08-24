import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ayurvedic Products | Medico Pharma",
  description:
    "Explore Ayurvedic product solutions including herbal powders, tablets, capsules, traditional botanical formulations and wellness-focused products for private label, OEM, contract manufacturing and export requirements.",
  keywords: [
    "Ayurvedic products",
    "Ayurvedic product manufacturer",
    "private label Ayurvedic products",
    "Ayurvedic supplements",
    "Ayurvedic formulation manufacturer",
    "OEM Ayurvedic products",
    "contract manufacturing Ayurvedic products",
    "Ayurvedic wellness products",
  ],
};

const productCategories = [
  {
    title: "Ayurvedic Tablets",
    description:
      "Convenient solid-dose formats developed using suitable Ayurvedic and botanical ingredients according to defined product specifications.",
  },
  {
    title: "Ayurvedic Capsules",
    description:
      "Capsule-based formulations suitable for selected botanical powders, extracts and traditional ingredient combinations.",
  },
  {
    title: "Ayurvedic Powders",
    description:
      "Traditional-style powdered formulations developed from selected plant-based and botanical ingredients.",
  },
  {
    title: "Herbal & Botanical Blends",
    description:
      "Multi-ingredient botanical product concepts developed according to agreed Ayurvedic wellness positioning.",
  },
  {
    title: "Single-Herb Products",
    description:
      "Selected single-botanical formulations designed around clearly defined ingredient and product specifications.",
  },
  {
    title: "Ayurvedic Wellness Products",
    description:
      "Wellness-oriented formulations positioned around traditional-use concepts without unsupported disease-treatment claims.",
  },
  {
    title: "Traditional Formulation Concepts",
    description:
      "Selected traditional-style product concepts may be evaluated according to ingredients, format and applicable regulatory requirements.",
  },
  {
    title: "Custom Ayurvedic Formulations",
    description:
      "Custom product concepts evaluated according to botanical ingredients, intended positioning, dosage format and target-market requirements.",
  },
];

const formulationAreas = [
  {
    title: "Daily Wellness",
    description:
      "Ayurvedic product concepts developed for general wellness-focused product portfolios.",
  },
  {
    title: "Active Lifestyle",
    description:
      "Selected traditional botanical formulations positioned for consumers following active everyday lifestyles.",
  },
  {
    title: "Nutrition & Wellness",
    description:
      "Botanical formulations developed around general nutritional and wellness-oriented product concepts.",
  },
  {
    title: "Traditional Botanical Care",
    description:
      "Products combining selected traditional botanical ingredients within an appropriately positioned wellness range.",
  },
  {
    title: "Single Botanical Concepts",
    description:
      "Focused products based on one selected botanical ingredient where suitable.",
  },
  {
    title: "Multi-Botanical Blends",
    description:
      "Combination formulations developed using multiple suitable Ayurvedic and botanical ingredients.",
  },
];

const formats = [
  {
    title: "Tablets",
    description:
      "Solid-dose formats suitable for selected Ayurvedic botanical formulations.",
  },
  {
    title: "Capsules",
    description:
      "Convenient formats for selected powders, extracts and botanical combinations.",
  },
  {
    title: "Powders",
    description:
      "Traditional-style powdered formats suitable for selected herbal and botanical formulations.",
  },
  {
    title: "Sachets",
    description:
      "Single-use formats suitable for selected powdered Ayurvedic formulations.",
  },
  {
    title: "Liquid Preparations",
    description:
      "Selected liquid-format concepts may be evaluated according to formulation and manufacturing feasibility.",
  },
  {
    title: "Selected External-Use Formats",
    description:
      "Suitable external-use Ayurvedic product concepts may be considered separately according to product category and applicable requirements.",
  },
];

const manufacturingCapabilities = [
  {
    title: "Private Label",
    description:
      "Launch suitable Ayurvedic products under your own brand with support for product selection, packaging and commercial presentation.",
  },
  {
    title: "OEM Manufacturing",
    description:
      "OEM support for businesses looking to develop or expand an Ayurvedic and traditional wellness product range.",
  },
  {
    title: "Contract Manufacturing",
    description:
      "Commercial manufacturing support for suitable Ayurvedic products according to agreed specifications.",
  },
  {
    title: "Custom Formulation Support",
    description:
      "Custom Ayurvedic concepts can be evaluated based on ingredients, product format, intended positioning and technical feasibility.",
  },
  {
    title: "Botanical Ingredient Support",
    description:
      "Ingredient requirements can be reviewed according to botanical identity, specifications, availability and product requirements.",
  },
  {
    title: "Packaging Solutions",
    description:
      "Suitable packaging formats can be considered according to product type, quantity, branding and commercial requirements.",
  },
  {
    title: "Bulk Supply",
    description:
      "Commercial supply options can be discussed for distributors, retailers, wellness businesses and other B2B buyers.",
  },
  {
    title: "Export Support",
    description:
      "International project requirements can be supported where permitted and subject to destination-market regulations.",
  },
];

const qualityPoints = [
  "Clearly defined botanical ingredient specifications",
  "Ingredient identity and sourcing considerations",
  "Formulation compatibility review",
  "Defined product and manufacturing specifications",
  "Batch-oriented manufacturing documentation",
  "Packaging selected according to formulation requirements",
  "Product labeling aligned with applicable requirements",
  "Traceability and documentation support where applicable",
  "Review of target-market ingredient restrictions",
  "Careful review of permitted wellness and product claims",
];

const audiences = [
  "Ayurvedic Brands",
  "Wellness Companies",
  "Nutraceutical Businesses",
  "Healthcare Companies",
  "Natural Product Brands",
  "Distributors & Importers",
  "Retail & E-commerce Brands",
  "Private Label Businesses",
];

const process = [
  {
    number: "01",
    title: "Share Your Requirement",
    description:
      "Tell us your preferred Ayurvedic product concept, ingredients, format, packaging, quantity and intended market.",
  },
  {
    number: "02",
    title: "Ingredient & Concept Review",
    description:
      "The proposed botanical ingredients, product positioning and format are reviewed for suitability and feasibility.",
  },
  {
    number: "03",
    title: "Formulation Planning",
    description:
      "The formulation concept, dosage format and relevant product specifications are defined.",
  },
  {
    number: "04",
    title: "Packaging & Branding",
    description:
      "Suitable packaging and private-label presentation requirements are coordinated according to the project.",
  },
  {
    number: "05",
    title: "Manufacturing & Supply",
    description:
      "Production and applicable quality review are completed before agreed domestic or export supply.",
  },
];

const faqs = [
  {
    question: "What types of Ayurvedic products can be manufactured?",
    answer:
      "Ayurvedic product projects may include suitable tablets, capsules, powders, selected liquid preparations, botanical blends, single-herb products and other wellness-focused formulations. Final availability depends on the proposed ingredients, product classification, manufacturing feasibility and applicable regulations.",
  },
  {
    question: "Do you provide private-label Ayurvedic products?",
    answer:
      "Yes. Suitable Ayurvedic products can be considered for private-label projects. Support may include product selection, formulation requirements, packaging coordination, branding and manufacturing according to agreed specifications.",
  },
  {
    question: "Can you develop custom Ayurvedic formulations?",
    answer:
      "Custom Ayurvedic product concepts can be evaluated according to botanical ingredients, intended product positioning, dosage format, commercial quantity, technical feasibility and applicable regulatory requirements.",
  },
  {
    question: "Can I choose the Ayurvedic ingredients for my product?",
    answer:
      "Ingredient preferences can be discussed. Final ingredient selection should consider botanical identity, formulation compatibility, ingredient availability, intended product category and applicable regulatory requirements.",
  },
  {
    question: "Do you manufacture Ayurvedic tablets and capsules?",
    answer:
      "Selected Ayurvedic tablet and capsule formulations can be considered depending on ingredient characteristics, product specifications and manufacturing feasibility.",
  },
  {
    question: "Do you offer Ayurvedic powders?",
    answer:
      "Selected Ayurvedic and botanical powder formulations can be considered for suitable private-label, contract manufacturing and commercial B2B requirements.",
  },
  {
    question: "What is the difference between Herbal and Ayurvedic products?",
    answer:
      "Herbal products broadly refer to products containing plant-derived or botanical ingredients. Ayurvedic products may additionally be positioned or formulated according to Ayurvedic traditions, principles or regulatory classifications. The exact classification depends on the product and applicable regulations.",
  },
  {
    question: "Can Ayurvedic products be exported?",
    answer:
      "Export projects may be supported where permitted. Product classification, ingredients, labeling, documentation, registration and permitted claims may differ according to the destination market.",
  },
  {
    question: "Can Ayurvedic products claim to cure or treat diseases?",
    answer:
      "Disease-treatment, prevention or cure claims should not be used unless they are specifically permitted, appropriately supported and legally authorized for the relevant product and market.",
  },
  {
    question: "Can packaging be customized for an Ayurvedic private-label range?",
    answer:
      "Suitable packaging and branding requirements can be discussed for private-label projects. Final options depend on product format, quantity, packaging availability and applicable labeling requirements.",
  },
];

export default function AyurvedicProductsPage() {
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
      {/* FAQ SCHEMA */}
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
              Ayurvedic Products
            </p>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Traditional Ayurvedic product concepts for modern wellness
              brands.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              Explore Ayurvedic and botanical product solutions for wellness
              brands, distributors and businesses seeking private-label, OEM,
              contract manufacturing and commercial supply support.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-400">
              Product classification, ingredients, labeling and permitted
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
              Ayurvedic formulations combining traditional botanical concepts
              with structured product development.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-slate-600">
            <p>
              Ayurveda has a long tradition of using botanical ingredients and
              plant-based formulations as part of wellness practices.
            </p>

            <p>
              Our Ayurvedic product solutions are structured for businesses
              looking to develop modern commercial products while maintaining
              clear botanical ingredient specifications, defined product
              formats and appropriate market positioning.
            </p>

            <p>
              Each project should be evaluated according to ingredient
              selection, formulation, manufacturing requirements, packaging,
              product classification and the regulations applicable in the
              intended market.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT RANGE */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Ayurvedic Product Range
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Flexible Ayurvedic product concepts across multiple formats.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Product concepts can be evaluated according to selected
              botanicals, formulation requirements, dosage format and
              commercial positioning.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-7"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 font-semibold text-emerald-700">
                  A
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

      {/* FORMULATION AREAS */}
      <section className="bg-emerald-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-800">
                Product Concepts
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Wellness-focused Ayurvedic formulations for different product
                portfolios.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-700">
                Product concepts can be developed around general wellness and
                traditional botanical positioning while avoiding unsupported
                therapeutic claims.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {formulationAreas.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl bg-white p-6 shadow-sm"
                >
                  <h3 className="font-semibold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
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
              Multiple formats for Ayurvedic and botanical product
              requirements.
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

      {/* TRADITION + MODERN MANUFACTURING */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
              Tradition + Structured Manufacturing
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Traditional botanical concepts developed for modern commercial
              requirements.
            </h2>
          </div>

          <div className="space-y-5 leading-7 text-slate-300">
            <p>
              Commercial Ayurvedic products require more than selecting
              traditional ingredients. Each project needs clearly defined
              ingredients, manufacturing specifications, dosage formats,
              packaging and labeling.
            </p>

            <p>
              The traditional positioning of a product should also remain
              consistent with the applicable product classification and the
              permitted claims in its intended market.
            </p>
          </div>
        </div>
      </section>

      {/* B2B MANUFACTURING */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
              B2B Ayurvedic Manufacturing
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Flexible solutions from product concept to commercial supply.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Support for Ayurvedic brands, wellness companies, distributors
              and businesses requiring scalable manufacturing and private-label
              solutions.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {manufacturingCapabilities.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-7"
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
              Clearly defined ingredients and specifications are essential for
              Ayurvedic products.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Botanical identity, ingredient quality, formulation
              compatibility, manufacturing controls, packaging and appropriate
              labeling should be considered throughout product development.
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

      {/* AYURVEDIC VS HERBAL */}
      <section className="bg-emerald-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-800">
              Ayurvedic vs Herbal Products
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Related categories, but not necessarily the same.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              Herbal products broadly contain plant-derived or botanical
              ingredients. Ayurvedic products may additionally be developed,
              positioned or classified according to traditional Ayurvedic
              concepts and applicable regulatory frameworks.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Keeping the categories separate helps customers understand the
              portfolio while allowing each product type to follow the
              appropriate formulation, labeling and regulatory approach.
            </p>

            <Link
              href="/products/herbal-products"
              className="mt-7 inline-flex font-semibold text-emerald-800 hover:text-emerald-950"
            >
              Explore Herbal Products →
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
              Ayurvedic product solutions for wellness brands and commercial
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
              From Ayurvedic product concept to commercial supply.
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

      {/* PRIVATE LABEL */}
      <section className="bg-emerald-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  Private Label / OEM
                </p>

                <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950">
                  Planning to launch your own Ayurvedic product range?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                  Share your preferred product concept, botanical ingredients,
                  format, packaging, quantity, branding and target-market
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
              Ayurvedic Products FAQ
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
              Common questions about Ayurvedic product development, private
              labeling, manufacturing, packaging and commercial supply.
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
            Ayurvedic product classification, ingredients, formulation,
            labeling, registration and permitted claims vary according to the
            relevant product category and jurisdiction. Information on this
            page is intended for general B2B product and manufacturing
            enquiries and should not be interpreted as medical advice or as a
            claim that any product diagnoses, treats, prevents or cures
            disease.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-emerald-600 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-100">
            Start Your Ayurvedic Product Project
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Looking for Ayurvedic manufacturing or private-label solutions?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-50">
            Tell us your product concept, preferred botanical ingredients,
            format, packaging, commercial quantity and target market.
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