import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Protein Powders | Medico Pharma",
  description:
    "Explore protein powder solutions including whey protein, plant-based protein, protein blends and nutritional powders for private label, OEM, contract manufacturing and export requirements.",
  keywords: [
    "protein powders",
    "protein powder manufacturer",
    "private label protein powder",
    "whey protein manufacturing",
    "plant protein powder",
    "protein supplement manufacturer",
    "OEM protein powder",
    "contract manufacturing protein supplements",
  ],
};

const proteinCategories = [
  {
    title: "Whey Protein",
    description:
      "Protein powder solutions based on suitable whey protein ingredients for nutritional and active-lifestyle product ranges.",
  },
  {
    title: "Whey Protein Isolate",
    description:
      "Selected whey protein isolate-based product concepts for brands requiring high-protein formulations.",
  },
  {
    title: "Plant-Based Protein",
    description:
      "Plant-derived protein concepts using suitable sources such as pea, rice or other permitted protein ingredients.",
  },
  {
    title: "Protein Blends",
    description:
      "Multi-source protein formulations developed around defined nutritional and product-positioning requirements.",
  },
  {
    title: "Nutrition Protein Powders",
    description:
      "Protein-focused nutritional powders for general supplementation and lifestyle-oriented product portfolios.",
  },
  {
    title: "Custom Protein Formulations",
    description:
      "Custom product concepts evaluated according to protein source, flavor, nutritional profile, format and market requirements.",
  },
];

const formats = [
  {
    title: "Protein Powder Tubs",
    description:
      "Suitable for retail and commercial protein powder ranges with multiple packaging-size possibilities.",
  },
  {
    title: "Pouches",
    description:
      "Flexible stand-up pouch formats suitable for selected protein and nutritional powder products.",
  },
  {
    title: "Single-Serve Sachets",
    description:
      "Convenient single-use formats that can support sampling, travel and portion-controlled product concepts.",
  },
  {
    title: "Bulk Packs",
    description:
      "Commercial packaging solutions for distributors, institutions and suitable bulk-supply requirements.",
  },
  {
    title: "Flavored Protein Powders",
    description:
      "Selected flavor profiles can be considered depending on formulation, ingredient compatibility and project requirements.",
  },
  {
    title: "Unflavored Formulations",
    description:
      "Simple protein powder concepts for brands requiring neutral or minimally flavored formulations.",
  },
];

const capabilities = [
  {
    title: "Private Label Protein Powders",
    description:
      "Launch protein powder products under your own brand with support for suitable product selection, packaging and presentation.",
  },
  {
    title: "Contract Manufacturing",
    description:
      "Commercial manufacturing solutions for businesses looking to develop or scale protein supplement product lines.",
  },
  {
    title: "OEM Solutions",
    description:
      "OEM support for brands, distributors and businesses requiring customized protein product manufacturing.",
  },
  {
    title: "Custom Formulation Support",
    description:
      "Protein source, nutritional profile, flavor and ingredient requirements can be evaluated according to technical feasibility.",
  },
  {
    title: "Flavor Development",
    description:
      "Selected flavor concepts can be considered based on formulation requirements, ingredient compatibility and manufacturing feasibility.",
  },
  {
    title: "Packaging & Branding",
    description:
      "Multiple packaging and private-label presentation options can be considered according to quantity and product format.",
  },
  {
    title: "Bulk Supply",
    description:
      "Commercial supply requirements can be discussed for retailers, distributors, wellness companies and institutional customers.",
  },
  {
    title: "Export Support",
    description:
      "Support for international projects subject to applicable product, labeling, documentation and destination-market requirements.",
  },
];

const considerations = [
  "Protein source and ingredient specifications",
  "Protein concentration and nutritional profile",
  "Flavor and sensory considerations",
  "Sweetener and additional ingredient requirements",
  "Mixability and powder characteristics",
  "Packaging compatibility and storage requirements",
  "Labeling and nutritional-information requirements",
  "Target-market regulatory considerations",
];

const audiences = [
  "Sports Nutrition Brands",
  "Fitness & Wellness Brands",
  "Nutraceutical Companies",
  "Healthcare Businesses",
  "Distributors & Importers",
  "Retail Chains",
  "E-commerce Brands",
  "Private Label Businesses",
];

const process = [
  {
    number: "01",
    title: "Share Your Product Brief",
    description:
      "Provide your preferred protein source, product type, flavor, packaging, quantity and target market.",
  },
  {
    number: "02",
    title: "Formulation Review",
    description:
      "The product concept is reviewed according to ingredients, nutritional profile, technical feasibility and applicable requirements.",
  },
  {
    number: "03",
    title: "Flavor & Packaging Planning",
    description:
      "Suitable flavor concepts, packaging formats and private-label requirements are discussed for the project.",
  },
  {
    number: "04",
    title: "Manufacturing",
    description:
      "Production proceeds according to the agreed product specification, commercial quantity and manufacturing requirements.",
  },
  {
    number: "05",
    title: "Quality Review & Supply",
    description:
      "Finished products undergo applicable quality review before agreed domestic or export supply.",
  },
];

const faqs = [
  {
    question: "What types of protein powders can be manufactured?",
    answer:
      "Protein powder projects may include suitable whey-based, plant-based, blended and nutritional protein formulations. Final availability depends on ingredient selection, technical feasibility, manufacturing capability and applicable regulations.",
  },
  {
    question: "Do you offer private-label protein powders?",
    answer:
      "Private-label protein powder projects can be supported for suitable products. Services may include product selection, formulation review, flavor requirements, packaging coordination and manufacturing based on agreed specifications.",
  },
  {
    question: "Can you manufacture whey protein powder?",
    answer:
      "Whey protein-based product concepts can be evaluated according to the required protein source, nutritional profile, flavor, commercial quantity and target-market requirements.",
  },
  {
    question: "Do you offer plant-based protein powder?",
    answer:
      "Plant-based protein concepts can be considered using suitable permitted protein sources, depending on formulation requirements and manufacturing feasibility.",
  },
  {
    question: "Can you develop a custom protein powder formulation?",
    answer:
      "Custom protein formulations can be evaluated based on protein source, nutritional targets, additional ingredients, flavor profile, packaging requirements and applicable regulations.",
  },
  {
    question: "Can I choose my own flavor?",
    answer:
      "Selected flavor requirements can be discussed for private-label and contract manufacturing projects. Final flavor options depend on formulation compatibility, ingredient availability, project quantity and manufacturing feasibility.",
  },
  {
    question: "What packaging formats are available for protein powders?",
    answer:
      "Depending on the product and project requirements, packaging may include tubs, pouches, sachets and selected bulk formats. Final packaging availability depends on commercial quantity and manufacturing requirements.",
  },
  {
    question: "Do you provide bulk protein powder supply?",
    answer:
      "Bulk and commercial protein powder requirements can be discussed for suitable distributors, retailers, wellness brands, institutional customers and other B2B buyers.",
  },
  {
    question: "Can protein powder products be exported?",
    answer:
      "Export projects may be supported where permitted. Ingredients, nutritional labeling, claims, packaging and documentation must comply with the requirements of the destination market.",
  },
  {
    question: "Are protein powders medicines?",
    answer:
      "Protein powders are commonly marketed as nutritional or dietary supplement products, but regulatory classification can vary by composition, intended use and country. They should not be promoted as diagnosing, treating, preventing or curing disease unless specifically authorized.",
  },
];

export default function ProteinPowdersPage() {
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
              Protein Powders
            </p>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Protein powder solutions for nutrition, fitness and wellness
              brands.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              Explore protein powder solutions for private-label brands,
              distributors, sports nutrition companies, wellness businesses
              and commercial nutritional-product requirements.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-400">
              Product composition, nutritional values, ingredients, labeling
              and permitted claims are subject to technical feasibility and
              applicable regulations.
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
              Flexible protein formulations for growing nutrition brands.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-slate-600">
            <p>
              Protein powders are widely used within nutritional, sports and
              active-lifestyle product portfolios and can be developed using
              different protein sources and formulation approaches.
            </p>

            <p>
              Our protein powder solutions are intended for businesses looking
              for commercial manufacturing, private-label products, OEM
              support, bulk supply and suitable export opportunities.
            </p>

            <p>
              Each project can be evaluated according to protein source,
              nutritional profile, formulation, flavor, packaging,
              commercial quantity and target-market requirements.
            </p>
          </div>
        </div>
      </section>

      {/* PROTEIN RANGE */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Protein Product Range
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Protein solutions for different product and market requirements.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Protein concepts can be selected or developed according to the
              desired protein source, nutritional profile, format and intended
              commercial positioning.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {proteinCategories.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-7"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 font-semibold text-emerald-700">
                  P
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

      {/* CUSTOM PRODUCT CONCEPTS */}
      <section className="bg-emerald-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-800">
              Custom Protein Concepts
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Create a protein powder suited to your brand positioning.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              Depending on project feasibility, protein product concepts can be
              evaluated around different nutritional, flavor, ingredient and
              packaging requirements.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Protein Source Selection",
              "Protein Blends",
              "Flavor Concepts",
              "Selected Nutritional Ingredients",
              "Sweetener Preferences",
              "Packaging Options",
              "Private Label Branding",
              "Market-Specific Requirements",
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

      {/* PACKAGING / FORMATS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Packaging & Product Formats
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Flexible packaging for retail, private-label and bulk supply.
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

      {/* B2B SERVICES */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
              B2B Protein Manufacturing
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              From protein product concept to commercial supply.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Manufacturing and supply solutions can support established
              nutrition brands as well as businesses launching their first
              protein product range.
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

      {/* PRODUCT CONSIDERATIONS */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Product Development Considerations
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Protein powder development involves more than choosing a protein
              source.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              A commercially suitable protein product requires careful
              consideration of nutritional targets, ingredient compatibility,
              flavor, texture, packaging and market-specific requirements.
            </p>
          </div>

          <div className="grid gap-4">
            {considerations.map((point) => (
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
              Protein manufacturing solutions for brands and commercial
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
              A structured path from idea to finished protein product.
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
                  Planning to launch your own protein powder brand?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                  Share your preferred protein type, flavor, nutritional
                  profile, packaging, target quantity and market requirements
                  with our team.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex rounded-full bg-slate-950 px-7 py-3.5 font-medium text-white transition hover:bg-slate-800"
              >
                Discuss Your Product
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
              Protein Powders FAQ
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
              Common questions about protein powder products, private labeling,
              manufacturing, packaging and commercial supply.
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
            Protein powder classification, formulation, ingredient use,
            nutritional information, labeling and permitted claims may vary by
            market. Product information on this page is intended for general
            B2B enquiries and should not be interpreted as medical or
            nutritional advice.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-emerald-600 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-100">
            Start Your Protein Project
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Looking for protein powder manufacturing or private-label
            solutions?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-50">
            Tell us your protein type, formulation preferences, flavor,
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