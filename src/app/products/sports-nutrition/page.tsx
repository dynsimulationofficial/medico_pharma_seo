import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sports Nutrition | Medico Pharma",
  description:
    "Explore sports nutrition product solutions including protein-based nutrition, amino acid formulations, hydration products, energy nutrition and active-lifestyle supplements for private label, OEM, contract manufacturing and export requirements.",
  keywords: [
    "sports nutrition",
    "sports nutrition manufacturer",
    "private label sports nutrition",
    "sports supplement manufacturer",
    "OEM sports nutrition",
    "contract manufacturing sports supplements",
    "active lifestyle nutrition",
    "sports nutrition products",
  ],
};

const productCategories = [
  {
    title: "Protein-Based Nutrition",
    description:
      "Protein-focused nutritional products developed for sports, fitness and active-lifestyle product portfolios.",
  },
  {
    title: "Amino Acid Formulations",
    description:
      "Selected amino acid-based nutritional formulations subject to technical feasibility and applicable regulations.",
  },
  {
    title: "Hydration & Electrolyte Products",
    description:
      "Nutrition concepts designed around hydration, electrolyte and active-lifestyle product requirements.",
  },
  {
    title: "Energy Nutrition",
    description:
      "Selected nutritional product concepts developed for active-lifestyle and sports nutrition portfolios.",
  },
  {
    title: "Recovery Nutrition",
    description:
      "Nutritional formulations designed around post-activity product concepts without making therapeutic or disease-related claims.",
  },
  {
    title: "Daily Active Nutrition",
    description:
      "Everyday nutritional solutions intended for consumers following active and fitness-focused lifestyles.",
  },
  {
    title: "Powdered Sports Nutrition",
    description:
      "Flexible powder-based formulations suitable for protein, hydration and selected nutritional product concepts.",
  },
  {
    title: "Custom Sports Nutrition",
    description:
      "Custom product concepts evaluated according to ingredient profile, format, flavor, target market and technical feasibility.",
  },
];

const formats = [
  {
    title: "Powders",
    description:
      "A flexible format suitable for protein, hydration, amino acid and selected sports nutrition formulations.",
  },
  {
    title: "Tablets",
    description:
      "Convenient solid-dose formats for selected nutritional ingredients and active-lifestyle product concepts.",
  },
  {
    title: "Capsules",
    description:
      "Suitable for selected ingredient combinations requiring convenient unit-dose presentation.",
  },
  {
    title: "Effervescent Tablets",
    description:
      "Dissolvable formats that can be considered for selected hydration and nutritional formulations.",
  },
  {
    title: "Sachets",
    description:
      "Convenient single-use formats suitable for selected powders, hydration blends and portion-controlled products.",
  },
  {
    title: "Ready-Mix Nutrition",
    description:
      "Powdered formulations designed for mixing with water or another suitable liquid before consumption.",
  },
];

const capabilities = [
  {
    title: "Private Label",
    description:
      "Develop sports nutrition products under your own brand with suitable formulation, packaging and product-presentation support.",
  },
  {
    title: "OEM Manufacturing",
    description:
      "OEM manufacturing support for businesses looking to launch or expand sports and active-lifestyle nutrition ranges.",
  },
  {
    title: "Contract Manufacturing",
    description:
      "Commercial manufacturing solutions for brands requiring scalable sports nutrition production.",
  },
  {
    title: "Custom Formulation Support",
    description:
      "Product concepts can be evaluated based on ingredients, nutritional profile, flavor, format and intended market.",
  },
  {
    title: "Flavor Development",
    description:
      "Selected flavor requirements can be considered according to formulation compatibility and manufacturing feasibility.",
  },
  {
    title: "Packaging Solutions",
    description:
      "Packaging options can be selected based on product format, quantity, branding requirements and target market.",
  },
  {
    title: "Bulk Supply",
    description:
      "Commercial supply solutions for distributors, retailers, fitness businesses and institutional requirements.",
  },
  {
    title: "Export Support",
    description:
      "International project support subject to applicable product, documentation, labeling and destination-market regulations.",
  },
];

const formulationConsiderations = [
  "Ingredient selection and specification",
  "Nutritional profile and serving format",
  "Protein, amino acid or electrolyte requirements",
  "Flavor and sensory profile",
  "Sweetener and supporting ingredient preferences",
  "Powder mixability and product characteristics",
  "Packaging compatibility",
  "Serving-size and nutritional-label requirements",
  "Target-market regulatory considerations",
  "Permitted nutritional and product claims",
];

const audiences = [
  "Sports Nutrition Brands",
  "Fitness Brands",
  "Nutraceutical Companies",
  "Gyms & Fitness Businesses",
  "Retail Chains",
  "Distributors & Importers",
  "E-commerce Brands",
  "Private Label Businesses",
];

const process = [
  {
    number: "01",
    title: "Share Your Requirement",
    description:
      "Tell us your sports nutrition category, ingredients, format, flavor, quantity, packaging and target market.",
  },
  {
    number: "02",
    title: "Product Review",
    description:
      "The proposed product concept is reviewed for ingredient suitability, formulation feasibility and regulatory considerations.",
  },
  {
    number: "03",
    title: "Formulation & Packaging",
    description:
      "Suitable formulation, flavor, serving format, packaging and private-label requirements are finalized.",
  },
  {
    number: "04",
    title: "Manufacturing",
    description:
      "Production is carried out according to the agreed product specification and manufacturing requirements.",
  },
  {
    number: "05",
    title: "Quality Review & Supply",
    description:
      "Finished products undergo applicable review before domestic distribution or agreed export supply.",
  },
];

const faqs = [
  {
    question: "What types of sports nutrition products can be manufactured?",
    answer:
      "Sports nutrition projects may include protein-based products, amino acid formulations, hydration and electrolyte products, powdered nutritional blends, selected active-lifestyle products and other suitable formulations. Final availability depends on ingredients, manufacturing feasibility and applicable regulations.",
  },
  {
    question: "Do you provide private-label sports nutrition products?",
    answer:
      "Yes. Suitable sports nutrition products can be developed for private-label projects. Support may include formulation selection, packaging, branding requirements and manufacturing according to agreed specifications.",
  },
  {
    question: "Can you manufacture custom sports nutrition formulations?",
    answer:
      "Custom formulations can be evaluated based on ingredient requirements, nutritional profile, serving format, flavor, packaging, technical feasibility and target-market regulations.",
  },
  {
    question: "Do you manufacture sports nutrition powders?",
    answer:
      "Powder-based sports nutrition concepts can be considered for suitable protein, hydration, amino acid and nutritional formulations depending on manufacturing capability and product requirements.",
  },
  {
    question: "Can sports nutrition products include amino acids?",
    answer:
      "Selected amino acid ingredients may be considered where technically feasible and permitted under applicable regulations. Ingredient levels, labeling and claims must comply with the requirements of the intended market.",
  },
  {
    question: "Do you provide electrolyte or hydration formulations?",
    answer:
      "Hydration and electrolyte-focused product concepts can be evaluated according to the proposed ingredient composition, delivery format and target-market requirements.",
  },
  {
    question: "Can I choose the flavor and packaging?",
    answer:
      "Flavor and packaging requirements can be discussed for suitable private-label and contract manufacturing projects. Final options depend on product compatibility, commercial quantity and availability.",
  },
  {
    question: "Do you support bulk sports nutrition orders?",
    answer:
      "Bulk and commercial manufacturing requirements can be discussed for distributors, retailers, fitness businesses, sports nutrition brands and other B2B customers.",
  },
  {
    question: "Can sports nutrition products be exported?",
    answer:
      "Export projects can be supported where permitted. Ingredient use, labeling, nutritional information, claims, product registration and documentation requirements may differ by destination country.",
  },
  {
    question: "Can sports nutrition products claim to build muscle or improve performance?",
    answer:
      "Any performance, muscle, recovery or nutritional claim must be supported and specifically permitted under the regulations of the target market. Products should not use misleading, therapeutic or disease-treatment claims.",
  },
];

export default function SportsNutritionPage() {
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
              Sports Nutrition
            </p>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Sports nutrition solutions for active-lifestyle and fitness
              brands.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              Explore flexible sports nutrition solutions for fitness brands,
              nutraceutical companies, distributors and businesses seeking
              private-label, OEM or contract manufacturing support.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-400">
              Ingredient use, nutritional composition, labeling and permitted
              product claims are subject to applicable regulations and
              target-market requirements.
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
              Flexible nutrition concepts for sports, fitness and active
              lifestyles.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-slate-600">
            <p>
              Sports nutrition covers a broad range of nutritional products
              developed for consumers following fitness-focused and active
              lifestyles.
            </p>

            <p>
              Our B2B sports nutrition solutions can support brands looking for
              product development, private labeling, contract manufacturing,
              commercial production and suitable export opportunities.
            </p>

            <p>
              Each project can be evaluated according to ingredient profile,
              nutritional requirements, flavor, serving format, packaging,
              commercial quantity and applicable market regulations.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Sports Nutrition Portfolio
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Product concepts across modern sports and active nutrition.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explore suitable product categories for private-label,
              manufacturing and commercial sports nutrition requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-7"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 font-semibold text-emerald-700">
                  S
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

      {/* CUSTOM SOLUTIONS */}
      <section className="bg-emerald-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-800">
              Custom Sports Nutrition
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Develop a product aligned with your brand and target market.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              Product concepts can be evaluated around selected nutritional
              ingredients, format, flavor, serving requirements, packaging and
              market positioning.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Protein Selection",
              "Amino Acid Concepts",
              "Electrolyte Blends",
              "Hydration Formulations",
              "Flavor Selection",
              "Serving Format",
              "Custom Packaging",
              "Private Label Branding",
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
      </section>

      {/* FORMATS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Product Formats
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Multiple formats for different sports nutrition concepts.
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
              Support for sports nutrition brands from concept to commercial
              supply.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Flexible manufacturing and supply capabilities for brands,
              distributors and businesses operating in sports and active
              nutrition markets.
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

      {/* PRODUCT DEVELOPMENT */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Product Development Considerations
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Sports nutrition products require carefully defined
              specifications.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Product development should consider ingredient compatibility,
              nutritional composition, flavor, serving format, packaging,
              labeling and market-specific requirements.
            </p>
          </div>

          <div className="grid gap-4">
            {formulationConsiderations.map((point) => (
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
              Sports nutrition solutions for brands, distributors and fitness
              businesses.
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
              A structured path from sports nutrition concept to supply.
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
                  Planning to build your own sports nutrition range?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                  Share your preferred product category, ingredients, format,
                  flavor, quantity, packaging and target-market requirements.
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
              Sports Nutrition FAQ
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
              Common questions about sports nutrition products, private
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
            Sports nutrition product classification, ingredients, nutritional
            composition, labeling, serving recommendations and permitted claims
            vary by market. Information on this page is intended for general
            B2B product and manufacturing enquiries and should not be
            interpreted as medical advice or as a guarantee of any health or
            performance outcome.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-emerald-600 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-100">
            Start Your Sports Nutrition Project
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Looking for sports nutrition manufacturing or private-label
            solutions?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-50">
            Tell us your product category, formulation requirements, flavor,
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