import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "Pharmaceutical Manufacturing Services in India | Medico Pharma Healthcare",
  description:
    "Medico Pharma Healthcare provides pharmaceutical manufacturing services in India for tablets, capsules, injectables, ointments, private-label production and B2B supply.",
  alternates: { canonical: "/services/pharmaceutical-manufacturing" },
};

type IconName =
  | "tablet"
  | "capsule"
  | "injectable"
  | "topical"
  | "skin"
  | "antibiotic"
  | "shield"
  | "package"
  | "network"
  | "layers"
  | "route"
  | "globe"
  | "factory"
  | "check";

const revealScript = `
(function () {
  var root = document.documentElement;
  function init() {
    var nodes = document.querySelectorAll('.pmx-reveal:not(.is-visible)');
    if (!nodes.length) return;
    root.classList.add('pmx-js');
    if (!('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(nodes, function (n) { n.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    Array.prototype.forEach.call(nodes, function (n) { io.observe(n); });
  }
  init();
  window.addEventListener('load', init);
})();
`;

const heroIndex = [
  ["01", "Dosage forms", "Tablets · Capsules · Injectables · Topicals"],
  ["02", "Manufacturing models", "Contract · Third-party · Private label"],
  ["03", "Packaging support", "Primary · Secondary · Brand-ready"],
  ["04", "Commercial supply", "Domestic B2B · Export-oriented"],
] as const;

const capabilityCards = [
  {
    number: "01",
    title: "Tablet Manufacturing",
    label: "Oral solid dosage",
    icon: "tablet" as IconName,
    intro:
      "Tablet manufacturing remains one of the most widely used areas of pharmaceutical production. Medico Pharma Healthcare supports pharmaceutical tablet manufacturing requirements for different therapeutic and commercial product categories.",
    rows: [
      ["Dosage Form", "Pharmaceutical tablets"],
      ["Formulation Type", "Generic and customised formulations"],
      ["Strength", "According to approved formulation"],
      ["Tablet Format", "Standard tablets and formulation-specific formats"],
      ["Excipients", "Selected according to formulation requirements"],
      ["Coating", "Product-dependent coating options"],
      ["Packaging", "Blister packs, strip packs, bottles or agreed packaging"],
      ["Label Format", "Brand, private-label or agreed B2B presentation"],
      ["Production Type", "Contract, third-party and private-label manufacturing"],
      ["Supply Type", "Domestic and export-oriented supply requirements"],
    ],
    outro:
      "Our pharmaceutical tablet manufacturing services can form part of a larger contract manufacturing, third-party manufacturing or private-label pharmaceutical programme.",
  },
  {
    number: "02",
    title: "Capsule Manufacturing",
    label: "Capsule formulation & production",
    icon: "capsule" as IconName,
    intro:
      "Medico Pharma Healthcare supports pharmaceutical capsule manufacturing for businesses requiring professionally coordinated capsule formulation, production and packaging.",
    rows: [
      ["Dosage Form", "Capsules"],
      ["Formulation", "According to approved product formulation"],
      ["Capsule Type", "Product-specific capsule formats"],
      ["Fill Material", "Formulation-dependent"],
      ["Pharmaceutical Excipients", "Selected based on product requirements"],
      ["Strength", "According to approved specification"],
      ["Packaging", "Blister, strip or bottle packaging"],
      ["Labelling", "Private-label or agreed pharmaceutical branding"],
      ["Manufacturing Model", "Contract or third-party manufacturing"],
      ["Commercial Supply", "B2B pharmaceutical supply"],
    ],
    outro:
      "Our capsule manufacturing solutions are suitable for businesses developing or expanding a portfolio of pharmaceutical products without establishing their own pharmaceutical factory.",
  },
  {
    number: "03",
    title: "Injectable Manufacturing",
    label: "Controlled production support",
    icon: "injectable" as IconName,
    intro:
      "Injectable pharmaceutical products require controlled production processes and careful handling throughout manufacturing and packaging. Medico Pharma Healthcare supports injectable manufacturing requirements based on product formulation, production feasibility and applicable pharmaceutical standards.",
    rows: [
      ["Dosage Form", "Injectable pharmaceutical products"],
      ["Formulation", "Product-specific approved formulation"],
      ["Strength", "According to defined specification"],
      ["Container", "Product-dependent injectable packaging"],
      ["Production", "Controlled pharmaceutical manufacturing process"],
      ["Packaging", "Primary and secondary packaging as required"],
      ["Labelling", "Brand or private-label presentation"],
      ["Documentation", "Production-related documentation support"],
      ["Supply Model", "Contract, third-party or B2B manufacturing"],
    ],
    outro:
      "Injectable production requirements are evaluated individually because formulation, packaging and production conditions can differ significantly between pharmaceutical products.",
  },
  {
    number: "04",
    title: "Ointment & Topical Formulation Manufacturing",
    label: "Creams, ointments & topicals",
    icon: "topical" as IconName,
    intro:
      "Our manufacturing solutions also support ointment manufacturing and topical formulation manufacturing for pharmaceutical and selected healthcare applications.",
    rows: [
      ["Dosage Form", "Ointment, cream and topical formulation"],
      ["Formulation", "Product-specific formulation"],
      ["Base / Excipients", "Selected according to formulation"],
      ["Product Category", "Pharmaceutical and relevant healthcare formulations"],
      ["Packaging", "Tubes, containers or agreed packaging format"],
      ["Pack Size", "According to commercial requirement"],
      ["Labelling", "Brand and private-label options"],
      ["Production Type", "Pharmaceutical formulation production"],
      ["Supply", "B2B, domestic or export-oriented requirements"],
    ],
    outro:
      "These services can support companies seeking a topical formulation manufacturer, pharmaceutical development partner or private-label manufacturing solution.",
  },
  {
    number: "05",
    title: "Skin Care Product Manufacturing",
    label: "Selected healthcare topicals",
    icon: "skin" as IconName,
    intro:
      "Medico Pharma Healthcare can also coordinate selected skin care product manufacturing requirements where the formulation and intended product category are compatible with available production capabilities.",
    rows: [
      ["Product Format", "Cream, lotion, gel or topical format"],
      ["Formulation", "Custom or agreed formulation"],
      ["Packaging", "Tube, bottle, jar or suitable container"],
      ["Pack Configuration", "Based on commercial requirement"],
      ["Branding", "Private-label options"],
      ["Production", "Scalable manufacturing requirements"],
      ["Supply", "B2B pharmaceutical and healthcare supply"],
    ],
    outro:
      "This provides a flexible option for pharmaceutical and healthcare businesses expanding into topical and skin-related product categories.",
  },
  {
    number: "06",
    title: "Antibiotic Medicine Manufacturing",
    label: "Selected anti-infective products",
    icon: "antibiotic" as IconName,
    intro:
      "Medico Pharma Healthcare supports selected antibiotic medicine manufacturing requirements according to product category, formulation feasibility and relevant manufacturing requirements.",
    rows: [
      ["Product Category", "Antibiotic pharmaceutical products"],
      ["Dosage Form", "Based on available manufacturing capability"],
      ["Strength", "According to approved formulation"],
      ["Excipients", "Product-specific pharmaceutical excipients"],
      ["Packaging", "Appropriate pharmaceutical packaging"],
      ["Labelling", "Private-label or agreed brand format"],
      ["Manufacturing Model", "Contract or third-party manufacturing"],
      ["Commercial Supply", "B2B pharmaceutical distribution requirements"],
    ],
    outro:
      "Each antibiotic formulation should be evaluated according to its specific manufacturing and regulatory requirements before production.",
  },
] as const;

const serviceLedger = [
  "Pharmaceutical formulation manufacturing",
  "Pharmaceutical product manufacturing",
  "Finished dosage form manufacturing",
  "Generic medicine manufacturing",
  "Medicine manufacturing services",
  "Pharma contract manufacturing services",
  "Third-party pharma manufacturing",
  "Private-label pharmaceutical services",
  "Pharmaceutical packaging",
  "Pharma packaging solutions",
  "Pharmaceutical production services",
  "Pharmaceutical sourcing services",
  "Pharmaceutical supply solutions",
  "B2B pharmaceutical services",
  "Pharmaceutical export services",
  "Pharma manufacturing solutions",
] as const;

const audiences = [
  ["01", "Pharmaceutical Companies", "Established pharmaceutical companies can use Medico Pharma Healthcare as an additional pharma manufacturing partner for selected products, dosage forms, production requirements or expansion programmes."],
  ["02", "Healthcare Companies", "Healthcare companies expanding their product portfolios can use our pharmaceutical manufacturing, packaging and supply services to introduce additional pharmaceutical products."],
  ["03", "Pharmaceutical Distributors", "Pharmaceutical distributors and medicine distributors seeking their own product portfolio can explore private-label, contract or third-party manufacturing pharma solutions."],
  ["04", "Emerging Pharma Brands", "New and growing pharma companies can access medicine manufacturing services without developing a complete pharmaceutical factory and production infrastructure from the beginning."],
  ["05", "B2B Pharmaceutical Businesses", "We support organisations searching for a B2B pharmaceutical manufacturer, pharmaceutical sourcing partner, pharma supply solution or outsourced pharmaceutical production service."],
  ["06", "Export-Focused Pharmaceutical Businesses", "Businesses developing international supply operations can combine manufacturing requirements with our broader pharmaceutical export services and pharma export solutions."],
] as const;

const processSteps = [
  ["01", "Requirement Assessment", "We begin by understanding the pharmaceutical product, dosage form, formulation requirements, packaging requirements, production volume expectations and intended supply model."],
  ["02", "Formulation & Product Requirement Review", "The required pharmaceutical formulation is evaluated based on available manufacturing capabilities and product specifications, including dosage form, active ingredients, pharmaceutical excipients, strength, product format, packaging, labelling and production requirements."],
  ["03", "Manufacturing Planning", "Once requirements are established, the production workflow can be planned based on the agreed pharmaceutical manufacturing model, including contract manufacturing, third-party manufacturing, private-label production or other B2B arrangements."],
  ["04", "Pharmaceutical Production", "Manufacturing is carried out according to the defined product and production specifications, with attention to controlled processes, consistency and applicable manufacturing requirements."],
  ["05", "Pharmaceutical Packaging", "After production, the product moves into the appropriate pharmaceutical packaging process. Packaging may include blister packs, strip packs, bottles, tubes, containers, product-specific primary packaging and secondary pharmaceutical packaging."],
  ["06", "Labelling & Final Preparation", "Products are prepared according to agreed branding, labelling, pack configuration and commercial requirements. Private-label pharmaceutical services can also be incorporated into this stage where applicable."],
  ["07", "Supply Coordination", "Following final production and packaging, pharmaceutical supply requirements can be coordinated for domestic B2B distribution or relevant export requirements, creating a more integrated pharmaceutical supply chain."],
] as const;

const qualityPoints = [
  "Defined manufacturing specifications",
  "Raw-material requirements",
  "Pharmaceutical excipients",
  "Formulation consistency",
  "Controlled pharmaceutical production",
  "Appropriate production equipment",
  "Pharmaceutical packaging requirements",
  "Product identification and labelling",
  "Production documentation",
  "Supply-chain coordination",
] as const;

const flexibleModels = [
  ["01", "Contract Pharmaceutical Manufacturing", "Our pharma contract manufacturing services provide an outsourced production approach for businesses that want pharmaceutical products manufactured according to agreed specifications. Contract manufacturing can help companies expand production without building additional manufacturing infrastructure internally.", "factory"],
  ["02", "Third-Party Pharma Manufacturing", "Our third-party pharma manufacturing solutions are designed for pharmaceutical companies, healthcare companies and distribution businesses looking to outsource pharmaceutical production for portfolio expansion, additional production requirements, new product introduction, private-label products and B2B supply.", "network"],
  ["03", "Private Label Pharmaceutical Manufacturing", "Our private label pharmaceutical services can support businesses seeking pharmaceutical products under their own brand identity. Depending on product feasibility and requirements, services may include manufacturing, formulation coordination, packaging, brand labelling, pack configuration, production coordination and B2B supply support.", "package"],
  ["04", "Generic Medicine Manufacturing", "Medico Pharma Healthcare supports selected generic medicine manufacturing requirements depending on product category, formulation and manufacturing capability. Our approach combines pharmaceutical formulation production, packaging and B2B supply considerations to create a more complete pharmaceutical manufacturing service.", "layers"],
] as const;

const whyChoose = [
  ["01", "End-to-End Manufacturing Support", "Access pharmaceutical formulation manufacturing, production, packaging and associated pharmaceutical business services through a coordinated approach."],
  ["02", "Multiple Dosage Form Capabilities", "Manufacturing requirements can include tablets, capsules, injectables, ointments, topical formulations and other selected pharmaceutical products."],
  ["03", "Flexible Manufacturing Models", "Choose suitable arrangements including pharmaceutical contract manufacturing, third-party pharmaceutical manufacturing, private-label pharmaceutical manufacturing, B2B pharmaceutical manufacturing and production outsourcing."],
  ["04", "Packaging Support", "Our services can incorporate pharmaceutical packaging requirements based on product format and commercial presentation."],
  ["05", "Scalable Pharmaceutical Production", "Our manufacturing approach can support both new product programmes and ongoing pharmaceutical production requirements."],
  ["06", "India-Based Pharmaceutical Solutions", "For organisations looking for a pharmaceutical manufacturer in India, pharma manufacturing solutions in Maharashtra or pharmaceutical services supporting Mumbai and other markets, Medico Pharma Healthcare provides an India-focused B2B service model."],
  ["07", "Integrated Pharmaceutical Supply Support", "Manufacturing can be connected with pharmaceutical sourcing, packaging, distribution planning and export-related services to support a more efficient pharma supply chain."],
  ["08", "Long-Term Manufacturing Partnership", "Rather than limiting the relationship to individual production orders, our goal is to become a dependable pharma production partner capable of supporting future product and portfolio requirements."],
] as const;

const glance = [
  ["Tablet Manufacturing", "Pharmaceutical tablet production and packaging", "Pharma and healthcare companies"],
  ["Capsule Manufacturing", "Capsule formulation production and packaging", "B2B pharmaceutical brands"],
  ["Injectable Manufacturing", "Product-specific injectable production support", "Pharmaceutical businesses"],
  ["Ointment Manufacturing", "Ointment and topical formulation production", "Pharma and healthcare ranges"],
  ["Skin Care Manufacturing", "Selected cream, lotion, gel and topical production", "Healthcare product portfolios"],
  ["Antibiotic Manufacturing", "Selected antibiotic medicine production", "Pharmaceutical product ranges"],
  ["Generic Medicine Manufacturing", "Generic pharmaceutical production", "Pharmaceutical companies"],
  ["Contract Manufacturing", "Outsourced pharmaceutical production", "Established and growing businesses"],
  ["Third-Party Manufacturing", "Third-party pharma manufacturing solutions", "Pharma companies and distributors"],
  ["Private Label Manufacturing", "Brand-specific pharmaceutical production", "New and established pharma brands"],
  ["Pharmaceutical Packaging", "Primary and secondary packaging support", "Pharmaceutical product programmes"],
  ["B2B Pharmaceutical Supply", "Manufacturing-connected product supply", "Pharmaceutical organisations"],
] as const;

const relatedServices = [
  ["01", "Contract Manufacturing", "Outsource pharmaceutical production through a structured pharma contract manufacturing service designed around defined product and commercial requirements.", "/services/contract-manufacturing"],
  ["02", "OEM / Private Label", "Build pharmaceutical product ranges under your own brand using flexible private-label pharmaceutical services.", "/services/oem-private-label"],
  ["03", "Third-Party Manufacturing", "Expand production capability through pharmaceutical third-party manufacturing without investing in additional internal manufacturing infrastructure.", "/services/third-party-manufacturing"],
  ["04", "Pharmaceutical Export Services", "Connect pharmaceutical manufacturing with international supply requirements through coordinated pharmaceutical export services and pharma export solutions.", "/services/export-services"],
] as const;

const faqs = [
  ["What pharmaceutical manufacturing services does Medico Pharma Healthcare provide?", "Medico Pharma Healthcare provides pharmaceutical manufacturing solutions covering selected tablets, capsules, injectables, ointments, topical formulations, generic medicines and other pharmaceutical products. Services can also include contract manufacturing, third-party pharma manufacturing, private-label production, pharmaceutical packaging and B2B pharmaceutical supply support depending on the product requirements."],
  ["Does Medico Pharma Healthcare provide third-party pharmaceutical manufacturing?", "Yes. Medico Pharma Healthcare supports third-party pharmaceutical manufacturing requirements for companies seeking to outsource pharmaceutical production. The service can include manufacturing coordination, formulation requirements, packaging, labelling and associated B2B pharmaceutical supply requirements depending on the project."],
  ["Can you manufacture pharmaceutical products under our own brand?", "Private-label pharmaceutical manufacturing can be supported for suitable products and formulations. Depending on requirements, this can include pharmaceutical manufacturing, packaging, brand labelling and commercial pack configuration."],
  ["What dosage forms can be supported through your pharmaceutical manufacturing services?", "Manufacturing requirements can include pharmaceutical tablets, capsules, selected injectable products, ointments, creams, topical formulations and other compatible dosage forms. Final manufacturing capability depends on the formulation, product category, production requirements and applicable standards."],
  ["Why choose an India-based pharmaceutical manufacturing partner?", "Working with a pharmaceutical manufacturer in India can provide access to an established pharmaceutical manufacturing industry, formulation expertise, pharmaceutical production capabilities and scalable B2B manufacturing solutions. Medico Pharma Healthcare combines pharmaceutical manufacturing requirements with packaging, sourcing and supply support to provide a more integrated production service."],
] as const;

function Icon({ name }: { name: IconName }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.65,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "tablet") return <svg {...common}><circle cx="12" cy="12" r="8" /><path d="m7.5 16.5 9-9" /></svg>;
  if (name === "capsule") return <svg {...common}><rect x="3" y="8" width="18" height="8" rx="4" /><path d="M12 8v8" /></svg>;
  if (name === "injectable") return <svg {...common}><path d="m14 3 7 7M13 6l5 5M5 14l5 5M4 20l5-5 7-7M16 4l4-2 2 4-4 2" /></svg>;
  if (name === "topical") return <svg {...common}><path d="M7 3h10l1 5-2 13H8L6 8l1-5Z" /><path d="M7 8h10M9 13h6" /></svg>;
  if (name === "skin") return <svg {...common}><path d="M20 4c-7 0-12 4-12 10 0 3 2 5 5 5 5 0 8-6 7-15Z" /><path d="M5 21c3-6 7-9 12-12" /></svg>;
  if (name === "antibiotic") return <svg {...common}><path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3Z" /></svg>;
  if (name === "shield") return <svg {...common}><path d="M12 3 5 6v6c0 4.5 3 7.7 7 9 4-1.3 7-4.5 7-9V6l-7-3Z" /><path d="m8.5 12 2.1 2.1 4.6-4.7" /></svg>;
  if (name === "package") return <svg {...common}><path d="m4 7 8-4 8 4v10l-8 4-8-4V7Z" /><path d="m4 7 8 4 8-4M12 11v10" /></svg>;
  if (name === "network") return <svg {...common}><circle cx="6" cy="7" r="2.4" /><circle cx="18" cy="7" r="2.4" /><circle cx="12" cy="18" r="2.4" /><path d="m8 8.4 2.6 7M16 8.4l-2.6 7M8.5 7h7" /></svg>;
  if (name === "layers") return <svg {...common}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></svg>;
  if (name === "route") return <svg {...common}><circle cx="5" cy="5" r="2" /><circle cx="19" cy="19" r="2" /><path d="M7 5h5a4 4 0 0 1 4 4 4 4 0 0 1-4 4H9a4 4 0 0 0-4 4" /></svg>;
  if (name === "globe") return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 4 6 4 9s-1 6-4 9c-3-3-4-6-4-9s1-6 4-9Z" /></svg>;
  if (name === "factory") return <svg {...common}><path d="M3 21V9l6 3V8l6 4V5h6v16H3Z" /><path d="M7 17h2M12 17h2M17 17h2" /></svg>;
  return <svg {...common}><path d="m5 12 4 4L19 6" /></svg>;
}

const delay = (ms: number) => ({ "--pmx-delay": `${ms}ms` } as CSSProperties);

export default function PharmaceuticalManufacturingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pharmaceutical Manufacturing Services",
    provider: { "@type": "Organization", name: "Medico Pharma Healthcare" },
    areaServed: { "@type": "Country", name: "India" },
    serviceType: "Pharmaceutical Manufacturing",
    description:
      "Pharmaceutical manufacturing services covering selected tablets, capsules, injectables, ointments, topical formulations, private-label production, packaging and B2B supply support.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
      { "@type": "ListItem", position: 3, name: "Pharmaceutical Manufacturing" },
    ],
  };

  return (
    <main className="pmx-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* BREADCRUMB */}
      {/* <div className="pmx-breadcrumb-band">
        <div className="pmx-container">
          <nav className="pmx-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/services">Services</Link><span>/</span>
            <strong>Pharmaceutical Manufacturing</strong>
          </nav>
        </div>
      </div> */}

      {/* HERO */}
      <section className="pmx-hero">
        <div className="pmx-hero-orb pmx-hero-orb-a" aria-hidden="true" />
        <div className="pmx-hero-orb pmx-hero-orb-b" aria-hidden="true" />

        <div className="pmx-container pmx-hero-grid">
          <div className="pmx-hero-copy">
            {/* <span className="pmx-kicker pmx-kicker-light pmx-anim" style={delay(80)}>
              <b>Service</b> Pharmaceutical manufacturing
            </span> */}
             <h1 className="hero-anim" style={{ animationDelay: "180ms" }}>
             Pharmaceutical Manufacturing Services in <em> India</em>
            </h1>
            
            <p className="pmx-anim" style={delay(260)}>
              Medico Pharma Healthcare provides reliable pharmaceutical manufacturing services for
              businesses seeking efficient, scalable and quality-focused medicine production solutions in India.
            </p>
            <div className="pmx-hero-actions pmx-anim" style={delay(360)}>
              <Link href="/contact" className="pmx-button pmx-button-solid">
                Discuss Your Manufacturing Requirement <span aria-hidden="true">→</span>
              </Link>
              <a href="/services" className="pmx-button pmx-button-quiet">
                Explore Manufacturing Capabilities <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="pmx-hero-visual pmx-anim" style={delay(300)}>
          <div
  className="pmx-image-slot pmx-image-slot-hero has-image"
  style={{ backgroundImage: 'url("/Pharmaceutical Manufacturing1.png")' }}
  role="img"
  aria-label="Pharmaceutical manufacturing facility"
/>

            <article className="pmx-hero-float pmx-hero-float-a">
              <span><i aria-hidden="true" /> Production signal</span>
              <svg viewBox="0 0 200 42" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 21h48l7-14 8 28 7-22 6 8h20l7-6 7 12 6-6h84" />
              </svg>
              <strong>Controlled process</strong>
            </article>

            <article className="pmx-hero-float pmx-hero-float-b">
              <span>Dosage capability</span>
              <strong>04 core formats</strong>
              <div className="pmx-hero-bars" aria-hidden="true"><b /><b /><b /><b /></div>
            </article>
          </div>
        </div>

        <div className="pmx-container">
          <div className="pmx-hero-index" aria-label="Manufacturing overview">
            {heroIndex.map(([number, title, meta]) => (
              <div key={number}>
                <span>{number}</span>
                <strong>{title}</strong>
                <small>{meta}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 01 — OVERVIEW */}
      <section className="pmx-section pmx-intro">
        <div className="pmx-container pmx-intro-grid pmx-reveal">
          <div className="pmx-section-code"><span>01</span><b>Overview</b></div>
          <div className="pmx-intro-copy">
            <p>
              From pharmaceutical formulation manufacturing and finished dosage forms to packaging,
              private-label production and B2B pharmaceutical supply, we support different stages of the pharmaceutical
              production cycle through a coordinated manufacturing approach.
            </p>
            <p>
              Our pharmaceutical manufacturing solutions cover multiple dosage forms, including{" "}
              tablets, capsules, injectables, ointments, topical formulations and other pharmaceutical products,
              depending on formulation, production and regulatory requirements.
            </p>
            <p>
              Whether you require ongoing production, contract manufacturing, third-party pharma manufacturing or support
              for launching a new pharmaceutical product line, Medico Pharma Healthcare can serve as your long-term{" "}
              pharma production partner.
            </p>
          </div>
        </div>
      </section>

      {/* 02 — END-TO-END SOLUTIONS */}
      <section className="pmx-section pmx-ledger-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>02</b> End-to-end solutions</span>
              <h2>End-to-End Pharmaceutical Manufacturing Solutions</h2>
            </div>
            <div className="pmx-heading-copy">
              <p>
                Modern pharmaceutical production involves more than simply manufacturing medicines. It requires
                coordination between formulation, raw materials, excipients, processes, packaging, documentation,
                quality procedures and supply planning.
              </p>
              <p>
                Medico Pharma Healthcare provides end-to-end pharmaceutical manufacturing solutions{" "}
                designed to simplify this process.
              </p>
            </div>
          </div>

          <div className="pmx-service-ledger pmx-reveal" style={delay(80)}>
            {serviceLedger.map((item, index) => (
              <div className="pmx-service-ledger-row" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
                <i aria-hidden="true">↗</i>
              </div>
            ))}
          </div>

          <div className="pmx-ledger-note pmx-reveal" style={delay(120)}>
            <p>
              By bringing essential pharmaceutical production services together, we help businesses establish a more
              organised and dependable manufacturing and pharmaceutical supply chain.
            </p>
            <p>
              As an India-focused pharmaceutical solutions provider, we support businesses looking for a{" "}
              pharma manufacturing company in India, a scalable{" "}
              medicine manufacturing company in India, or a reliable pharmaceutical production partner.
            </p>
          </div>
        </div>
      </section>

      {/* 03 — CAPABILITIES */}
      <section className="pmx-section pmx-capabilities" id="capabilities">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>03</b> Manufacturing capabilities</span>
              <h2>Our Pharmaceutical Manufacturing Capabilities</h2>
            </div>
            <p className="pmx-heading-copy">
              Our services accommodate different dosage forms, formulations and commercial requirements. Manufacturing
              specifications depend on the approved formulation, product category, packaging requirements and applicable
              regulatory standards.
            </p>
          </div>

          <div className="pmx-capability-list">
            {capabilityCards.map((capability, index) => (
              <article className="pmx-capability-row pmx-reveal" key={capability.title} style={delay(index * 60)}>
                <div className="pmx-capability-id">
                  <span>{capability.number}</span>
                  <i aria-hidden="true"><Icon name={capability.icon} /></i>
                  <small>{capability.label}</small>
                </div>

                <div className="pmx-capability-story">
                  <h3>{capability.title}</h3>
                  <p>{capability.intro}</p>
                  <p className="pmx-capability-outro">{capability.outro}</p>
                </div>

                <div className="pmx-spec-panel">
                  <div className="pmx-spec-head">
                    <span>Specification</span>
                    <span>Manufacturing options</span>
                  </div>
                  <dl className="pmx-spec-matrix">
                    {capability.rows.map(([label, value]) => (
                      <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
                    ))}
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — WHO WE MANUFACTURE FOR */}
      <section className="pmx-section pmx-audience-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>04</b> Who we manufacture for</span>
              <h2>Production support for different pharmaceutical business models.</h2>
            </div>
            <p className="pmx-heading-copy">
              Our manufacturing services support organisations at different stages of pharmaceutical business
              development — especially companies that need production capability without maintaining all infrastructure
              internally.
            </p>
          </div>

          <div className="pmx-audience-list">
            {audiences.map(([number, title, text], index) => (
              <article className="pmx-audience-row pmx-reveal" key={title} style={delay(index * 70)}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <i aria-hidden="true">→</i>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — PROCESS */}
      <section className="pmx-process-section">
        <div className="pmx-container">
          <div className="pmx-process-heading pmx-reveal">
            <div>
              <span className="pmx-kicker pmx-kicker-light"><b>05</b> Manufacturing process</span>
              <h2>From product requirement to coordinated pharmaceutical supply.</h2>
            </div>
            <p>
              A structured process creates better coordination between formulation, production, packaging and commercial
              supply.
            </p>
          </div>

          <div className="pmx-process-line">
            {processSteps.map(([number, title, text], index) => (
              <article className="pmx-process-step pmx-reveal" key={title} style={delay(index * 60)}>
                <span className="pmx-process-number">{number}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
                <i aria-hidden="true">↘</i>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — QUALITY */}
      <section className="pmx-section pmx-quality-section">
        <div className="pmx-container pmx-quality-grid">
          <div className="pmx-quality-copy pmx-reveal">
            <span className="pmx-kicker"><b>06</b> Quality-focused manufacturing</span>
            <h2>Quality-Focused Pharmaceutical Manufacturing</h2>
            <p>
              Quality is fundamental to pharmaceutical manufacturing. Our approach focuses on coordinating manufacturing
              requirements with controlled processes, suitable materials, appropriate packaging and production
              documentation.
            </p>

            <div className="pmx-quality-list">
              {qualityPoints.map((item) => (
                <span key={item}><i aria-hidden="true"><Icon name="check" /></i>{item}</span>
              ))}
            </div>

            <p>
              Where applicable, manufacturing requirements can also be evaluated against relevant{" "}
              GMP pharmaceutical principles and applicable quality expectations.
            </p>
            <p>
              Our objective is a dependable manufacturing framework rather than production as an isolated activity. For
              businesses comparing pharma manufacturing companies, the organisation of the complete
              process matters as much as the production stage itself.
            </p>
          </div>

         <div
  className="pmx-image-slot pmx-image-slot-hero has-image"
  style={{ backgroundImage: 'url("/qulity focused.png")' }}
  role="img"
  aria-label="Pharmaceutical manufacturing facility"
/>
        </div>
      </section>

      {/* 07 — FLEXIBLE MODELS */}
      <section className="pmx-section pmx-models-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>07</b> Flexible manufacturing models</span>
              <h2>Flexible Pharmaceutical Manufacturing Solutions</h2>
            </div>
            <div className="pmx-heading-copy">
              <p>
                A growing pharma company launching its first private-label range has very different requirements from an
                established business expanding production capacity.
              </p>
              <p>
                Medico Pharma Healthcare therefore focuses on providing flexible{" "}
                pharmaceutical manufacturing solutions.
              </p>
            </div>
          </div>

          <div className="pmx-model-list">
            {flexibleModels.map(([number, title, text, icon], index) => (
              <article className="pmx-model-row pmx-reveal" key={title} style={delay(index * 80)}>
                <span>{number}</span>
                <i className="pmx-model-icon" aria-hidden="true"><Icon name={icon as IconName} /></i>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — WHY CHOOSE */}
      <section className="pmx-section pmx-why-section">
        <div className="pmx-container pmx-why-grid">
          <div className="pmx-why-intro pmx-reveal">
            <span className="pmx-kicker"><b>08</b> Why choose Medico Pharma</span>
            <h2>Why Choose Medico Pharma Healthcare for Pharmaceutical Manufacturing?</h2>
            <p>Choosing a pharmaceutical manufacturing partner is a strategic business decision.</p>
            <p>
              We focus on coordinated pharmaceutical services that connect production requirements with formulation,
              packaging and supply requirements.
            </p>
          </div>

          <div className="pmx-proof-ledger pmx-reveal" style={delay(100)}>
            {whyChoose.map(([number, title, text]) => (
              <article className="pmx-proof-row" key={title}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 09 — AT A GLANCE */}
      <section className="pmx-section pmx-glance-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>09</b> Capabilities at a glance</span>
              <h2>Pharmaceutical Manufacturing Capabilities at a Glance</h2>
            </div>
            <p className="pmx-heading-copy">
              A quick comparison of manufacturing areas, service capability and the types of pharmaceutical
              organisations each route can support.
            </p>
          </div>

          <div className="pmx-table-wrap pmx-reveal" style={delay(80)}>
            <table className="pmx-table">
              <thead>
                <tr><th>Manufacturing Area</th><th>Service Capability</th><th>Suitable For</th></tr>
              </thead>
              <tbody>
                {glance.map(([area, capability, suitable]) => (
                  <tr key={area}><td>{area}</td><td>{capability}</td><td>{suitable}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 10 — RELATED SERVICES */}
      <section className="pmx-section pmx-related-section">
        <div className="pmx-container">
          <div className="pmx-heading-row pmx-reveal">
            <div>
              <span className="pmx-kicker"><b>10</b> Related services</span>
              <h2>Explore Our Other Pharmaceutical Services</h2>
            </div>
            <p className="pmx-heading-copy">
              Pharmaceutical manufacturing can be combined with other services to create a more complete pharmaceutical
              business solution.
            </p>
          </div>

          <div className="pmx-related-list">
            {relatedServices.map(([number, title, text, href], index) => (
              <Link className="pmx-related-row pmx-reveal" href={href} key={title} style={delay(index * 70)}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
                <i aria-hidden="true">↗</i>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 11 — FINAL CTA */}
      <section className="pmx-final-cta">
        <div className="pmx-container pmx-final-grid">
          <div
  className="pmx-image-slot pmx-image-slot-hero has-image"
  style={{ backgroundImage: 'url("/qulity focused.png")' }}
  role="img"
  aria-label="Pharmaceutical manufacturing facility"
/>

          <div className="pmx-final-copy pmx-reveal" style={delay(100)}>
            <span className="pmx-kicker pmx-kicker-light"><b>11</b> Build your product range</span>
            <h2>Build Your Pharmaceutical Product Range with Medico Pharma Healthcare</h2>
            <p>
              Whether you are developing a new pharmaceutical range, expanding an existing portfolio or searching for an
              experienced production partner, we can coordinate the process from requirement assessment through
              production, packaging and supply support.
            </p>
            <p>
              Our services are designed for organisations looking for a flexible{" "}
              pharma manufacturing company in India, a B2B pharmaceutical manufacturer or a long-term
              pharmaceutical production partner.
            </p>

            <div className="pmx-final-actions">
              <Link href="/contact" className="pmx-button pmx-button-light">
                Discuss Your Requirement <span aria-hidden="true">→</span>
              </Link>
              {/* <Link href="/contact" className="pmx-text-link">
                Request Manufacturing Information <span aria-hidden="true">↗</span>
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* 12 — FAQ */}
      <section className="pmx-section pmx-faq-section" id="faq">
        <div className="pmx-container pmx-faq-grid">
          <div className="pmx-faq-intro pmx-reveal">
            <span className="pmx-kicker"><b>12</b> Frequently asked questions</span>
            <h2>Frequently Asked Questions About Pharmaceutical Manufacturing</h2>
            <p>Useful answers for pharmaceutical businesses, distributors and brands evaluating manufacturing support.</p>
          </div>

          <div className="pmx-faq-list">
            {faqs.map(([question, answer], index) => (
              <details className="pmx-faq-item pmx-reveal" key={question} open={index === 0} style={delay(index * 60)}>
                <summary><span>{question}</span><i aria-hidden="true" /></summary>
                <div className="pmx-faq-answer"><p>{answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Script id="pmx-reveal" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: revealScript }} />
    </main>
  );
}