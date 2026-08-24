import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vitamins & Minerals | Medico Pharma",
  description:
    "Explore vitamin and mineral supplement solutions including multivitamins, vitamin formulations, mineral supplements and combination products for private label, contract manufacturing and export requirements.",
  keywords: [
    "vitamins and minerals",
    "vitamin supplements",
    "mineral supplements",
    "multivitamin manufacturing",
    "private label vitamins",
    "vitamin contract manufacturing",
    "mineral supplement manufacturer",
    "OEM supplements",
  ],
};

const vitaminCategories = [
  {
    title: "Multivitamin Formulations",
    description:
      "Balanced formulations combining selected vitamins and minerals for general nutritional supplementation.",
  },
  {
    title: "Vitamin C Formulations",
    description:
      "Vitamin C-based nutritional supplement formats developed according to product and market requirements.",
  },
  {
    title: "Vitamin D Formulations",
    description:
      "Vitamin D nutritional formulations available in suitable dosage and delivery formats depending on project requirements.",
  },
  {
    title: "B-Complex Formulations",
    description:
      "Formulations combining selected B-group vitamins for nutritional supplementation.",
  },
  {
    title: "Single Vitamin Products",
    description:
      "Individual vitamin formulations developed according to dosage format, specification and applicable regulations.",
  },
  {
    title: "Vitamin Combination Products",
    description:
      "Multi-ingredient vitamin formulations designed around defined nutritional product concepts.",
  },
];

const mineralCategories = [
  {
    title: "Calcium Formulations",
    description:
      "Calcium-based nutritional supplement formulations available in suitable formats and combinations.",
  },
  {
    title: "Magnesium Formulations",
    description:
      "Magnesium-focused nutritional products developed according to formulation and market requirements.",
  },
  {
    title: "Zinc Formulations",
    description:
      "Zinc-based nutritional supplement solutions for standalone or combination formulations.",
  },
  {
    title: "Iron Formulations",
    description:
      "Iron-containing nutritional products developed subject to formulation, dosage and regulatory requirements.",
  },
  {
    title: "Multi-Mineral Formulations",
    description:
      "Formulations combining multiple selected minerals according to the intended nutritional product profile.",
  },
  {
    title: "Vitamin & Mineral Combinations",
    description:
      "Integrated formulations combining selected vitamins and minerals within a single nutritional product.",
  },
];

const formats = [
  {
    title: "Tablets",
    description:
      "A widely used solid dosage format suitable for many vitamin and mineral formulations.",
  },
  {
    title: "Capsules",
    description:
      "Flexible capsule formats suitable for selected single-ingredient and combination nutritional formulations.",
  },
  {
    title: "Softgels",
    description:
      "Suitable for selected oil-based and fat-soluble nutritional ingredients where technically appropriate.",
  },
  {
    title: "Effervescent Tablets",
    description:
      "Dissolvable formats that can be considered for selected vitamin and mineral formulations.",
  },
  {
    title: "Powders",
    description:
      "Flexible powdered formats suitable for selected nutritional blends and combination products.",
  },
  {
    title: "Sachets",
    description:
      "Convenient single-use packaging suitable for selected powdered or granulated formulations.",
  },
];

const capabilities = [
  {
    title: "Private Label Vitamins",
    description:
      "Develop vitamin and mineral products under your own brand with support for suitable product selection, packaging and presentation.",
  },
  {
    title: "Contract Manufacturing",
    description:
      "Manufacturing solutions for businesses requiring commercial-scale production of vitamin and mineral supplements.",
  },
  {
    title: "OEM Solutions",
    description:
      "OEM manufacturing support for brands looking to expand or establish their nutritional supplement portfolio.",
  },
  {
    title: "Custom Formulation Support",
    description:
      "Formulation concepts can be evaluated based on ingredients, dosage format, technical feasibility and regulatory requirements.",
  },
  {
    title: "Custom Packaging",
    description:
      "Packaging options can be considered based on product format, quantity, branding requirements and target market.",
  },
  {
    title: "Bulk & Export Supply",
    description:
      "Commercial supply solutions for distributors, healthcare businesses, retailers and international partners.",
  },
];

const qualityPoints = [
  "Ingredient specifications reviewed according to product requirements",
  "Defined formulation and production specifications",
  "Batch-based manufacturing documentation",
  "Suitable packaging selected according to product characteristics",
  "Quality checks appropriate to the selected product category",
  "Labeling considerations based on applicable market regulations",
  "Traceability and product documentation where applicable",
  "Market-specific regulatory requirements considered for export projects",
];

const process = [
  {
    number: "01",
    title: "Product Requirement",
    description:
      "Share your preferred vitamin or mineral category, format, quantity, target market and branding requirements.",
  },
  {
    number: "02",
    title: "Formulation Review",
    description:
      "The proposed ingredients, format and product concept are reviewed for technical and regulatory feasibility.",
  },
  {
    number: "03",
    title: "Packaging Selection",
    description:
      "Suitable packaging and private-label presentation options are selected according to project requirements.",
  },
  {
    number: "04",
    title: "Manufacturing",
    description:
      "Production is carried out according to the agreed formulation, specifications and manufacturing requirements.",
  },
  {
    number: "05",
    title: "Quality & Supply",
    description:
      "Finished products undergo applicable quality review before agreed domestic or export supply.",
  },
];

const faqs = [
  {
    question: "What types of vitamin supplements can be manufactured?",
    answer:
      "Vitamin supplement projects may include multivitamin formulations, single-vitamin products, B-complex formulations and selected vitamin combinations. Final availability depends on formulation requirements, dosage format, manufacturing feasibility and applicable regulations.",
  },
  {
    question: "What types of mineral supplements are available?",
    answer:
      "Mineral formulations may include products containing calcium, magnesium, zinc, iron and selected multi-mineral combinations. The final formulation should be evaluated according to technical requirements and the regulations of the intended market.",
  },
  {
    question: "Do you manufacture multivitamin products?",
    answer:
      "Multivitamin and vitamin-mineral combination products can be considered for suitable private-label, OEM and contract manufacturing projects based on the required formulation and product specifications.",
  },
  {
    question: "Can I launch vitamins and minerals under my own brand?",
    answer:
      "Yes, suitable products can be developed for private-label or OEM projects. Support may include product selection, packaging coordination, branding requirements and manufacturing based on agreed specifications.",
  },
  {
    question: "Can you develop a custom vitamin or mineral formulation?",
    answer:
      "Custom formulation concepts can be evaluated based on ingredient selection, dosage format, intended market, manufacturing feasibility and applicable regulatory requirements.",
  },
  {
    question: "Which dosage formats are available?",
    answer:
      "Depending on the product and manufacturing feasibility, formats may include tablets, capsules, softgels, powders, sachets and selected effervescent formats.",
  },
  {
    question: "Do you provide bulk vitamin and mineral supply?",
    answer:
      "Bulk and commercial supply requirements can be discussed for distributors, retailers, healthcare companies, wellness brands and institutional buyers, subject to product availability and minimum quantities.",
  },
  {
    question: "Can vitamin and mineral products be exported?",
    answer:
      "Export projects can be supported where permitted. Ingredients, dosage levels, labeling, documentation and permitted product claims may differ according to the destination country's regulations.",
  },
  {
    question: "Can I choose my own packaging?",
    answer:
      "Packaging options can be discussed according to the selected product format, commercial quantity, branding requirements and packaging availability.",
  },
  {
    question: "Are vitamins and minerals medicines?",
    answer:
      "Vitamin and mineral products may be regulated differently depending on their composition, dosage, intended use and country of sale. Dietary supplements should not be presented as diagnosing, treating, preventing or curing diseases unless specifically permitted under applicable regulations.",
  },
];

export default function VitaminsMineralsPage() {
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
              Vitamins & Minerals
            </p>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Vitamin & mineral solutions for modern nutritional brands.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              Explore vitamin, mineral and combination nutritional
              formulations for private-label brands, distributors, healthcare
              businesses and commercial supplement requirements.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-400">
              Product composition, dosage, labeling and permitted claims are
              subject to applicable regulations and target-market
              requirements.
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

      {/* OVERVIEW */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Product Overview
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Nutritional formulations built around vitamins, minerals and
              carefully selected combinations.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-slate-600">
            <p>
              Vitamins and minerals are important components of nutritional
              supplementation and are available across a wide range of
              formulation and delivery formats.
            </p>

            <p>
              Our vitamin and mineral product solutions are designed for
              businesses looking to develop nutritional products for retail,
              distribution, private-label and commercial supply requirements.
            </p>

            <p>
              Projects can range from single-ingredient formulations to
              multivitamin, multi-mineral and selected combination products,
              depending on technical feasibility and applicable regulations.
            </p>
          </div>
        </div>
      </section>

      {/* VITAMINS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Vitamin Formulations
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Flexible vitamin solutions for different nutritional product
              concepts.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Available product concepts can be evaluated according to desired
              formulation, dosage format and target-market requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {vitaminCategories.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-7"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 font-semibold text-emerald-700">
                  V
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

      {/* MINERALS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Mineral Formulations
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Mineral-focused and combination supplement solutions.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mineralCategories.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 p-7"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 font-semibold text-slate-700">
                  M
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

      {/* COMBINATION SOLUTIONS */}
      <section className="bg-emerald-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-800">
                Combination Formulations
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                More than standalone vitamins and minerals.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-700">
                Product concepts can combine selected vitamins, minerals and
                other suitable nutritional ingredients to create differentiated
                supplement formulations.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Multivitamin Products",
                "Multi-Mineral Products",
                "Vitamin + Mineral Blends",
                "Daily Nutrition Formulations",
                "Selected Nutritional Combinations",
                "Custom Product Concepts",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white p-5 font-medium text-slate-900 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Product Formats
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Multiple delivery formats for vitamin and mineral products.
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

      {/* B2B SOLUTIONS */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
              B2B Manufacturing Solutions
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Build and scale your vitamin & mineral product portfolio.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Flexible support for brands at different stages of product
              development, manufacturing and commercial supply.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
              Quality & Product Considerations
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Product quality starts with clearly defined specifications.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Vitamin and mineral products require consideration of ingredient
              specifications, formulation compatibility, manufacturing,
              packaging and market-specific labeling requirements.
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

      {/* WHO WE SERVE */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Who We Serve
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              Vitamin and mineral supply solutions for growing businesses.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Supplement Brands",
              "Healthcare Companies",
              "Pharmaceutical Businesses",
              "Distributors",
              "Retail Chains",
              "Wellness Brands",
              "E-commerce Businesses",
              "Importers & Export Partners",
            ].map((item) => (
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
              From product requirement to commercial supply.
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
                  Planning your own vitamin or mineral supplement range?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                  Discuss formulation concepts, product formats, packaging,
                  quantities and target-market requirements with our team.
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
              Vitamins & Minerals FAQ
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
              Common questions about vitamin and mineral products,
              manufacturing, private labeling and commercial supply.
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

      {/* DISCLAIMER */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <p className="text-sm leading-6 text-slate-500">
            <strong className="text-slate-700">Regulatory Notice:</strong>{" "}
            Product availability, ingredients, dosage, labeling, classification
            and permitted claims may vary according to applicable regulations
            in each market. Information on this page is intended for general
            product and B2B manufacturing enquiries and should not be
            interpreted as medical advice.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-emerald-600 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-100">
            Start Your Project
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Looking for vitamin & mineral products or private-label
            manufacturing?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-50">
            Share your preferred formulation, dosage format, quantity,
            packaging and target market with our team.
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