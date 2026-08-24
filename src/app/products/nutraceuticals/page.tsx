import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nutraceuticals & Dietary Supplements | Medico Pharma",
  description:
    "Explore nutraceutical and dietary supplement solutions including tablets, capsules, powders, sachets, softgels and other formats for private label, contract manufacturing and export requirements.",
};

const formats = [
  {
    title: "Tablets",
    description:
      "Convenient solid-dose formats suitable for a wide range of nutritional formulations.",
  },
  {
    title: "Capsules",
    description:
      "Versatile capsule formats for vitamins, minerals, botanical ingredients and nutritional blends.",
  },
  {
    title: "Softgels",
    description:
      "Suitable for oil-based ingredients and selected nutritional formulations where applicable.",
  },
  {
    title: "Powders",
    description:
      "Flexible powdered formulations for daily nutrition, wellness and functional supplementation.",
  },
  {
    title: "Sachets",
    description:
      "Single-use, easy-to-carry packaging suitable for powdered and granulated supplement formats.",
  },
  {
    title: "Effervescent Formats",
    description:
      "Convenient dissolvable formats developed for selected nutritional formulations.",
  },
];

const categories = [
  "Daily Nutrition",
  "General Wellness",
  "Multivitamin Formulations",
  "Mineral Supplements",
  "Botanical & Plant-Based Formulations",
  "Protein & Amino Acid Nutrition",
  "Sports & Active Lifestyle Nutrition",
  "Functional Nutrition",
];

const capabilities = [
  {
    title: "Private Label",
    description:
      "Build your nutraceutical range under your own brand with support for product selection, packaging and presentation.",
  },
  {
    title: "Contract Manufacturing",
    description:
      "Manufacturing support for businesses looking to scale existing or new nutraceutical product lines.",
  },
  {
    title: "Custom Formulation Support",
    description:
      "Support for product concepts and formulation requirements subject to technical feasibility and applicable regulations.",
  },
  {
    title: "Packaging Solutions",
    description:
      "Multiple packaging formats can be considered depending on product type, quantity and market requirements.",
  },
  {
    title: "Bulk Supply",
    description:
      "Supply options for distributors, healthcare businesses, retailers and institutional requirements.",
  },
  {
    title: "Export Support",
    description:
      "Support for international product requirements, documentation and market-specific packaging where applicable.",
  },
];

const qualityPoints = [
  "Ingredient and formulation review based on product requirements",
  "Batch-oriented manufacturing and documentation processes",
  "Packaging selected according to product characteristics",
  "Quality checks appropriate to the relevant product category",
  "Traceability and documentation support where applicable",
  "Regulatory and labeling considerations based on target market",
];

const process = [
  {
    number: "01",
    title: "Share Your Requirement",
    description:
      "Tell us your product category, preferred format, target market, quantity and branding requirements.",
  },
  {
    number: "02",
    title: "Product & Feasibility Review",
    description:
      "The requirement is evaluated based on formulation, packaging, quantity and applicable regulatory considerations.",
  },
  {
    number: "03",
    title: "Packaging & Brand Planning",
    description:
      "Select suitable packaging, presentation and private-label requirements for your product range.",
  },
  {
    number: "04",
    title: "Production & Quality Review",
    description:
      "Manufacturing and quality processes are carried out according to the agreed product specification.",
  },
  {
    number: "05",
    title: "Supply & Export Coordination",
    description:
      "Finished goods are prepared for agreed domestic supply or export requirements.",
  },
];

const faqs = [
  {
    question: "What are nutraceuticals?",
    answer:
      "Nutraceuticals are products containing nutritional, botanical or other food-related ingredients intended to complement normal nutrition and support general wellness. Product definitions and permitted claims vary by country and applicable regulations.",
  },
  {
    question: "What nutraceutical product formats can be supplied?",
    answer:
      "Depending on the formulation and requirement, nutraceutical products may be available in formats such as tablets, capsules, softgels, powders, sachets and selected effervescent formats. Final availability depends on product specifications and manufacturing feasibility.",
  },
  {
    question: "Do you provide private-label nutraceutical products?",
    answer:
      "Private-label and OEM requirements can be supported for suitable products. Services may include product selection, packaging coordination, labeling support and manufacturing based on agreed specifications.",
  },
  {
    question: "Can you develop a custom nutraceutical formulation?",
    answer:
      "Custom formulation requirements can be evaluated based on ingredients, dosage format, manufacturing feasibility and applicable regulatory requirements. Final formulation and claims must comply with the target market's rules.",
  },
  {
    question: "Do you support bulk orders?",
    answer:
      "Yes. Bulk and commercial supply requirements can be discussed for distributors, retailers, wellness businesses, healthcare companies and other B2B customers, subject to minimum quantities and product availability.",
  },
  {
    question: "Can nutraceutical products be exported?",
    answer:
      "Export requirements can be supported where permitted. Product registration, labeling, documentation, ingredients and claims may vary depending on the destination country's regulations.",
  },
  {
    question: "Can I use my own brand and packaging?",
    answer:
      "Private-label projects can include customer branding and suitable packaging options. Packaging availability and minimum quantities depend on the selected product and project requirements.",
  },
  {
    question: "Do nutraceutical products treat or cure diseases?",
    answer:
      "Nutraceutical and dietary supplement products should not be presented as treating, preventing or curing diseases unless specifically authorized under applicable regulations. Product descriptions and claims should remain compliant with the target market's requirements.",
  },
];

export default function NutraceuticalsPage() {
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
              Nutraceuticals & Dietary Supplements
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Nutritional solutions designed for modern wellness brands.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              Explore nutraceutical and dietary supplement solutions developed
              for businesses, distributors, healthcare companies and private
              labels seeking reliable product and manufacturing support.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-400">
              Product availability, ingredients, labeling and permitted claims
              are subject to applicable regulatory requirements in the target
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
                href="/contact"
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
              Flexible nutraceutical solutions for growing healthcare and
              wellness businesses.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-slate-600">
            <p>
              Our nutraceutical portfolio is structured to support businesses
              looking for nutritional and wellness-focused products across
              multiple dosage and packaging formats.
            </p>

            <p>
              Solutions can be considered for established brands,
              distributors, retailers, healthcare businesses and companies
              planning to launch their own private-label supplement range.
            </p>

            <p>
              Product selection, formulations, ingredients and product claims
              should always be evaluated according to technical requirements
              and the regulations applicable in the intended market.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Nutraceutical Portfolio
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Solutions across everyday nutrition and wellness categories.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Product categories can be developed or supplied based on the
              agreed product scope and applicable market requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <div
                key={category}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                  +
                </div>

                <h3 className="font-semibold text-slate-950">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Dosage & Delivery Formats
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Multiple formats for different product requirements.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {formats.map((format) => (
              <article
                key={format.title}
                className="rounded-3xl border border-slate-200 p-7"
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

      {/* B2B CAPABILITIES */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
              B2B & Manufacturing Solutions
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              From product concept to commercial supply.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Support your nutraceutical business with flexible manufacturing,
              private-label and supply solutions.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-7"
              >
                <h3 className="text-xl font-semibold">{capability.title}</h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {capability.description}
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
              Quality Focus
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Quality considerations at every stage of the product journey.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Nutraceutical projects require careful consideration of
              ingredients, formulation, manufacturing, packaging, labeling and
              market-specific compliance.
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
      <section className="bg-emerald-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-800">
              Who We Work With
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              Built for businesses across the healthcare and wellness
              ecosystem.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Nutraceutical Brands",
              "Healthcare Companies",
              "Distributors & Importers",
              "Retail & Wellness Brands",
              "Pharmacies",
              "E-commerce Businesses",
              "Institutional Buyers",
              "International Partners",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white px-5 py-6 font-medium text-slate-900 shadow-sm"
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
              How It Works
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              A clear path from requirement to supply.
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
      <section className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  Private Label / OEM
                </p>

                <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950">
                  Planning to launch your own nutraceutical brand?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                  Discuss product formats, packaging, quantities, branding and
                  commercial requirements with our team.
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
              Nutraceuticals & dietary supplements FAQ
            </h2>
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

      {/* FINAL CTA */}
      <section className="bg-emerald-600 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-100">
            Start Your Project
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Looking for nutraceutical products, private label or manufacturing
            support?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-50">
            Share your product category, quantity, target market and packaging
            requirements with our team.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-7 py-3.5 font-medium text-emerald-800 transition hover:bg-emerald-50"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}