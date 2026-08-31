import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "Pharmaceutical Services in India | Medico Pharma",
  description:
    "Pharmaceutical manufacturing, contract manufacturing, OEM & private label, third-party manufacturing and export services for pharma companies, brands, distributors and international buyers.",
  alternates: { canonical: "/services" },
};

type IconName =
  | "factory"
  | "contract"
  | "package"
  | "network"
  | "globe"
  | "building"
  | "sparkle"
  | "truck"
  | "tag"
  | "import"
  | "growth";

const revealScript = `
(function () {
  var root = document.documentElement;
  function init() {
    var nodes = document.querySelectorAll('.svx-reveal:not(.is-visible)');
    if (!nodes.length) return;
    root.classList.add('svx-js');
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

const heroNodes = ["Manufacturing", "Contract", "Third-Party", "OEM / Label", "Export"] as const;

const heroIndex = [
  ["01", "05 service routes", "Manufacturing · Brand · Market"],
  ["02", "10+ categories", "Pharma · Nutra · Devices"],
  ["03", "Flexible models", "Contract · Third-party · OEM"],
  ["04", "Domestic + export", "India-based B2B supply"],
] as const;

const supportItems = [
  "Pharmaceutical product manufacturing",
  "Product and formulation requirements",
  "Contract-based manufacturing",
  "Third-party manufacturing",
  "OEM and private-label products",
  "Packaging and labelling requirements",
  "Product sourcing",
  "Bulk supply requirements",
  "Documentation coordination",
  "Domestic distribution requirements",
  "Pharmaceutical export support",
  "International buyer requirements",
] as const;

const journey = [
  ["01", "Product Requirement", "The process begins by understanding the product or category you require, along with composition, dosage form, quantity, packaging and intended market."],
  ["02", "Manufacturing & Production", "For manufacturing requirements, production can be planned according to the agreed product specifications and commercial requirements."],
  ["03", "Packaging & Presentation", "Packaging requirements can be coordinated according to the product format, pack size, branding and intended distribution channel."],
  ["04", "Branding & Private Label", "Businesses planning to launch their own pharmaceutical or healthcare brand can explore OEM and private-label manufacturing solutions."],
  ["05", "Documentation & Supply", "Applicable product, manufacturing and commercial documentation can be coordinated according to the nature of the project."],
  ["06", "Domestic & International", "Our service portfolio supports businesses requiring products for domestic distribution as well as international pharmaceutical supply."],
] as const;

const categories = [
  "Nutraceuticals",
  "Vitamins & Minerals",
  "Protein Powders",
  "Sports Nutrition",
  "Herbal Products",
  "Ayurvedic Products",
  "Pharmaceutical Formulations",
  "Medical Devices",
  "Surgical Consumables",
  "Diagnostic Kits",
] as const;

const businessTypes = [
  ["01", "Pharmaceutical Companies", "For companies requiring additional manufacturing capacity, outsourced production or support for expanding an existing product range.", "building"],
  ["02", "Healthcare & Wellness Brands", "For brands looking to introduce pharmaceutical, nutraceutical, wellness, herbal or related healthcare products.", "sparkle"],
  ["03", "Distributors & Wholesalers", "For businesses looking to expand their product portfolio without managing manufacturing operations internally.", "truck"],
  ["04", "Private-Label Businesses", "For businesses that want products manufactured and supplied under their own brand identity.", "tag"],
  ["05", "Importers & International Buyers", "For buyers seeking pharmaceutical and healthcare products from India for their local markets.", "import"],
  ["06", "New & Growing Businesses", "For businesses looking for a manufacturing and supply partner while developing their pharmaceutical product portfolio.", "growth"],
] as const;

const flexFactors = [
  ["Product category", "Pharma · Nutra · Device"],
  ["Formulation", "Existing or developed"],
  ["Dosage form", "Solid · Liquid · Topical"],
  ["Required quantity", "Trial to bulk"],
  ["Packaging format", "Primary · Secondary"],
  ["Branding", "House or private label"],
  ["Target market", "Domestic · International"],
  ["Supply route", "Distribution or export"],
  ["Repeat orders", "One-time or ongoing"],
] as const;

const manufacturingServices = [
  {
    code: "SRV / 01",
    title: "Pharmaceutical Manufacturing",
    text: "Manufacturing solutions for pharmaceutical and healthcare products based on your formulation, product category, quantity and packaging requirements.",
    tags: ["Production support", "Formulation-led", "Packaging"],
    href: "/services/pharmaceutical-manufacturing",
    icon: "factory" as IconName,
  },
  {
    code: "SRV / 02",
    title: "Contract Manufacturing",
    text: "Outsource pharmaceutical production to a manufacturing partner while continuing to manage your own brand, sales and distribution operations.",
    tags: ["Flexible manufacturing", "Agreement based"],
    href: "/services/contract-manufacturing",
    icon: "contract" as IconName,
  },
  {
    code: "SRV / 03",
    title: "Third-Party Manufacturing",
    text: "Manufacturing solutions for pharmaceutical companies, distributors and marketing businesses looking to outsource product production.",
    tags: ["Scalable production", "Distributor friendly"],
    href: "/services/third-party-manufacturing",
    icon: "network" as IconName,
  },
] as const;

const brandServices = [
  {
    code: "SRV / 04",
    title: "OEM / Private Label",
    text: "Develop and manufacture pharmaceutical, nutraceutical and healthcare products that can be marketed and sold under your own brand.",
    tags: ["Your brand, our support", "Pack design", "Label coordination"],
    href: "/services/oem-private-label",
    icon: "package" as IconName,
  },
  {
    code: "SRV / 05",
    title: "Export Services",
    text: "Pharmaceutical product, manufacturing and supply support for importers, distributors and healthcare businesses serving international markets.",
    tags: ["International supply", "Documentation", "Shipment prep"],
    href: "/services/export-services",
    icon: "globe" as IconName,
  },
] as const;

const routerRows = [
  ["Have a formulation, need production", "Manufacturing"],
  ["Own brand, outsourced production", "Private label"],
  ["Marketing or distribution business", "Third-party"],
  ["Buying for an overseas market", "Export"],
] as const;

const faqs = [
  ["What services does Medico Pharma provide?", "Medico Pharma provides pharmaceutical manufacturing, contract manufacturing, OEM and private-label solutions, third-party manufacturing and pharmaceutical export services. We also support product, packaging, branding, documentation and supply requirements depending on the project."],
  ["What types of products can Medico Pharma support?", "Our services can support multiple pharmaceutical and healthcare categories, including nutraceuticals, vitamins and minerals, protein powders, sports nutrition, herbal products, Ayurvedic products, pharmaceutical formulations, medical devices, surgical consumables and diagnostic kits."],
  ["Can Medico Pharma manufacture products for my own brand?", "Yes. Businesses looking to introduce products under their own brand can explore our OEM and private-label services. Product formulation, manufacturing, packaging and branding requirements can be discussed according to the project."],
  ["Do you provide third-party pharmaceutical manufacturing?", "Yes. Third-party manufacturing services are available for businesses looking to outsource pharmaceutical production while focusing on marketing, distribution and sales."],
  ["What is the difference between contract manufacturing and third-party manufacturing?", "Both models involve outsourcing manufacturing. Contract manufacturing generally refers to manufacturing products according to specific requirements or agreements for another company, while third-party manufacturing is commonly used by pharmaceutical marketing and distribution businesses that outsource production to an external manufacturer. The suitable model depends on your business and product requirements."],
  ["Can you support bulk pharmaceutical requirements?", "Bulk and repeat supply requirements can be evaluated based on the product category, formulation, quantity, packaging and manufacturing requirements."],
  ["Do you provide pharmaceutical export services?", "Yes. We support international pharmaceutical and healthcare product requirements, including manufacturing or sourcing coordination, packaging, documentation and shipment preparation depending on the product and destination market."],
  ["Can you provide custom packaging?", "Packaging requirements can be discussed according to the product type and project. Options may include product-specific primary packaging, labels, cartons and other secondary packaging formats."],
  ["How do I start a manufacturing enquiry?", "Send us the product or category you require along with the formulation or composition, required quantity, packaging preference and target market. Our team can then review the requirement and discuss the appropriate service."],
  ["I am not sure which service I need. Can you help?", "Yes. You do not need to select a service before contacting us. Tell us what product you need and what you are trying to achieve, and we can help identify the most suitable manufacturing or supply option."],
] as const;

function Icon({ name }: { name: IconName }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "factory") return <svg {...common}><path d="M3 21V9l6 3V8l6 4V5h6v16H3Z" /><path d="M7 17h2M12 17h2M17 17h2" /></svg>;
  if (name === "contract") return <svg {...common}><path d="M6 3h9l4 4v14H6V3Z" /><path d="M14 3v5h5M9 12h6M9 16h4" /></svg>;
  if (name === "package") return <svg {...common}><path d="m4 7 8-4 8 4v10l-8 4-8-4V7Z" /><path d="m4 7 8 4 8-4M12 11v10" /></svg>;
  if (name === "network") return <svg {...common}><circle cx="6" cy="7" r="2.4" /><circle cx="18" cy="7" r="2.4" /><circle cx="12" cy="18" r="2.4" /><path d="m8 8.4 2.6 7M16 8.4l-2.6 7M8.5 7h7" /></svg>;
  if (name === "globe") return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 4 6 4 9s-1 6-4 9c-3-3-4-6-4-9s1-6 4-9Z" /></svg>;
  if (name === "building") return <svg {...common}><path d="M4 21V6l7-3v18M11 21h9V10l-9-3" /><path d="M7 9h1M7 13h1M15 13h1M15 17h1" /></svg>;
  if (name === "sparkle") return <svg {...common}><path d="M12 3v6M12 15v6M3 12h6M15 12h6" /><circle cx="12" cy="12" r="2.6" /></svg>;
  if (name === "truck") return <svg {...common}><path d="M3 16V6h11v10M14 9h4l3 3.4V16h-7" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></svg>;
  if (name === "tag") return <svg {...common}><path d="M3 12V4h8l9 9-8 8-9-9Z" /><circle cx="7.5" cy="7.5" r="1.4" /></svg>;
  if (name === "import") return <svg {...common}><path d="M12 3v11m0 0 4-4m-4 4-4-4" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" /></svg>;
  return <svg {...common}><path d="M12 21V10" /><path d="M12 13c-5 0-7-3-7-7 5 0 7 3 7 7ZM12 17c5 0 7-3 7-7-5 0-7 3-7 7Z" /></svg>;
}

const delay = (ms: number) => ({ "--svx-delay": `${ms}ms` } as CSSProperties);

function ServiceCard({
  service,
  wide,
  step,
}: {
  service: { code: string; title: string; text: string; tags: readonly string[]; href: string; icon: IconName };
  wide?: boolean;
  step: number;
}) {
  return (
    <Link
      href={service.href}
      className={`svx-service-card${wide ? " svx-service-card-wide" : ""} svx-reveal`}
      style={delay(step * 80)}
    >
      <span className="svx-service-shine" aria-hidden="true" />

      <div className="svx-service-top">
        <span className="svx-service-glyph" aria-hidden="true"><Icon name={service.icon} /></span>
        <span className="svx-service-code">{service.code}</span>
      </div>

      <h3>{service.title}</h3>
      <p>{service.text}</p>

      <div className="svx-service-tags">
        {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>

      <div className="svx-service-foot">
        Explore service
        <i aria-hidden="true">↗</i>
      </div>
    </Link>
  );
}

export default function ServicesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Medico Pharma Services",
    itemListElement: [...manufacturingServices, ...brandServices].map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: service.href,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Services" },
    ],
  };

  return (
    <main className="svx-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* BREADCRUMB */}
      <div className="svx-breadcrumb-band">
        <div className="svx-container">
          <nav className="svx-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span><strong>Services</strong>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="svx-hero">
        <div className="svx-hero-orb svx-hero-orb-a" aria-hidden="true" />
        <div className="svx-hero-orb svx-hero-orb-b" aria-hidden="true" />

        <div className="svx-container svx-hero-grid">
          <div className="svx-hero-copy">
            <span className="svx-kicker svx-kicker-light svx-anim" style={delay(80)}>
              <b>Services</b> Medico Pharma
            </span>

            <h1 className="svx-anim" style={delay(160)}>
              Pharmaceutical solutions built around <em>your requirement.</em>
            </h1>

            <p className="svx-anim" style={delay(260)}>
              We work with pharmaceutical companies, healthcare brands, distributors, wholesalers, importers and
              exporters — providing <strong>manufacturing, private label and supply solutions</strong> for businesses
              developing or expanding a healthcare product portfolio.
            </p>

            <div className="svx-hero-actions svx-anim" style={delay(360)}>
              <Link href="/contact?interest=service" className="svx-button svx-button-light">
                Discuss Your Requirement <span aria-hidden="true">→</span>
              </Link>
              <a href="#services" className="svx-button svx-button-quiet">
                View all services <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div
            className="svx-hero-stage svx-anim"
            style={delay(300)}
            role="img"
            aria-label="Five Medico Pharma service routes connected to one enquiry"
          >
            <div className="svx-orbit svx-orbit-a" aria-hidden="true" />
            <div className="svx-orbit svx-orbit-b" aria-hidden="true" />
            <div className="svx-orbit svx-orbit-c" aria-hidden="true" />

            <div className="svx-hero-core">
              <span className="svx-hero-halo" aria-hidden="true" />
              <span className="svx-hero-halo d2" aria-hidden="true" />
              <span className="svx-hero-halo d3" aria-hidden="true" />
              <span className="svx-hero-cross" aria-hidden="true"><i /><b /></span>
              <small>ONE ENQUIRY</small>
            </div>

            {heroNodes.map((node, index) => (
              <span className={`svx-node svx-node-${index + 1}`} key={node}>
                <i aria-hidden="true" />{node}
              </span>
            ))}

            <div className="svx-hero-chip">
              <strong>05</strong>
              <div>
                <span>Service routes</span>
                <small>One place to start</small>
              </div>
            </div>
          </div>
        </div>

        <div className="svx-container">
          <div className="svx-hero-index" aria-label="Services overview">
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
      <section className="svx-section svx-intro">
        <div className="svx-container svx-intro-grid svx-reveal">
          <div className="svx-section-code"><span>01</span><b>Overview</b></div>
          <div className="svx-intro-copy">
            <p>
              Medico Pharma provides comprehensive pharmaceutical manufacturing and supply solutions for businesses
              looking to develop, manufacture, source and distribute healthcare products.
            </p>
            <p>
              We work with pharmaceutical companies, healthcare brands, distributors, wholesalers, importers, exporters
              and businesses looking to introduce or expand their pharmaceutical and healthcare product portfolio.
            </p>
            <p>
              Our services are designed to support different business requirements — whether you already have a product
              formulation, need an external manufacturing partner, want to introduce products under your own brand or
              require pharmaceutical products for <strong>international markets</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 02 — COMPLETE SUPPORT */}
      <section className="svx-section svx-support-section">
        <div className="svx-container">
          <div className="svx-heading-row svx-reveal">
            <div>
              <span className="svx-kicker"><b>02</b> One roof</span>
              <h2>Complete Pharmaceutical Support Under One Roof</h2>
            </div>
            <div className="svx-heading-copy">
              <p>
                Bringing a product to market involves more than manufacturing alone. Businesses often need to coordinate
                product requirements, manufacturing, packaging, branding, documentation and supply through multiple
                partners.
              </p>
              <p>
                Medico Pharma simplifies this with <strong>integrated pharmaceutical services</strong> that support
                different stages of the product and supply journey.
              </p>
            </div>
          </div>

          <div className="svx-support-grid svx-reveal" style={delay(80)}>
            {supportItems.map((item, index) => (
              <div className="svx-support-row" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
                <i aria-hidden="true">↗</i>
              </div>
            ))}
          </div>

          <p className="svx-support-note svx-reveal" style={delay(120)}>
            Our approach allows businesses to <strong>choose the services they need</strong> rather than following a
            single fixed manufacturing model.
          </p>
        </div>
      </section>

      {/* 03 — JOURNEY (dark) */}
      <section className="svx-flow-section">
        <div className="svx-container">
          <div className="svx-flow-heading svx-reveal">
            <div>
              <span className="svx-kicker svx-kicker-light"><b>03</b> How it works</span>
              <h2>From product requirement to finished supply.</h2>
            </div>
            <p>
              Some companies already have formulations and simply need production. Others want a new range under their
              own brand. We coordinate the appropriate service for each route.
            </p>
          </div>

          <div className="svx-flow-track svx-reveal" aria-hidden="true"><i /></div>

          <div className="svx-flow-grid">
            {journey.map(([number, title, text], index) => (
              <article className="svx-flow-card svx-reveal" key={title} style={delay(index * 70)}>
                <span className="svx-flow-node">{number}<i aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — CATEGORIES */}
      <section className="svx-section svx-category-section">
        <div className="svx-container">
          <div className="svx-center-heading svx-reveal">
            <span className="svx-kicker"><b>04</b> Product categories</span>
            <h2>Supporting multiple pharmaceutical &amp; healthcare categories.</h2>
            <p>
              Work with Medico Pharma across several categories while building or expanding your healthcare portfolio.
            </p>
          </div>

          <div className="svx-category-grid">
            {categories.map((category, index) => (
              <div className="svx-category-chip svx-reveal" key={category} style={delay(index * 45)}>
                <i aria-hidden="true" style={delay(index * 220)} />
                <b>{category}</b>
              </div>
            ))}
          </div>

          <div className="svx-category-cta svx-reveal" style={delay(120)}>
            <Link href="/products" className="svx-button svx-button-dark">
              Explore Our Products <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 05 — BUSINESS TYPES */}
      <section className="svx-section svx-business-section">
        <div className="svx-container">
          <div className="svx-heading-row svx-reveal">
            <div>
              <span className="svx-kicker"><b>05</b> Who we work with</span>
              <h2>Solutions for different types of businesses.</h2>
            </div>
            <p className="svx-heading-copy">
              Our services are designed to support businesses at different stages of growth — from established
              pharmaceutical companies to first-time brand owners and international buyers.
            </p>
          </div>

          <div className="svx-business-grid">
            {businessTypes.map(([number, title, text, icon], index) => (
              <article className="svx-business-card svx-reveal" key={title} style={delay(index * 70)}>
                <div className="svx-business-top">
                  <span className="svx-business-icon" aria-hidden="true"><Icon name={icon as IconName} /></span>
                  <span className="svx-business-number">{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — FLEXIBLE MODEL */}
      <section className="svx-section svx-flex-section">
        <div className="svx-container svx-flex-grid">
          <div className="svx-flex-copy svx-reveal">
            <span className="svx-kicker"><b>06</b> Flexible service model</span>
            <h2>There is no single model that fits every business.</h2>
            <p>
              Your requirement may depend on product category, formulation, dosage form, quantity, packaging format,
              branding, target market, supply route and repeat-order expectations.
            </p>
            <p>
              Our team evaluates these factors together to help determine the appropriate manufacturing or supply
              solution for your business.
            </p>
          </div>

          <div className="svx-console svx-reveal" style={delay(120)} aria-label="Requirement evaluation factors">
            <div className="svx-console-head">
              <span><i aria-hidden="true" /> Requirement review</span>
              <b>MP / EVALUATION</b>
            </div>

            <div className="svx-console-scan" aria-hidden="true" />

            <div className="svx-console-body">
              {flexFactors.map(([label, value], index) => (
                <div className="svx-console-cell" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                  <i aria-hidden="true" style={delay(index * 180)} />
                </div>
              ))}
            </div>

            <div className="svx-console-foot">
              <span>Factors reviewed together, not in isolation</span>
              <strong>09</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — SERVICE CARDS */}
      <section className="svx-section svx-services-section" id="services">
        <div className="svx-container">
          <div className="svx-heading-row svx-reveal">
            <div>
              <span className="svx-kicker"><b>07</b> Our services</span>
              <h2>Five focused routes. One place to start.</h2>
            </div>
            <p className="svx-heading-copy">
              Each service has its own dedicated page so you can move straight into the right commercial conversation
              instead of working through unrelated options.
            </p>
          </div>

          <div className="svx-service-group svx-reveal">
            <div className="svx-service-group-head">
              <span>Manufacturing</span>
              <i aria-hidden="true" />
            </div>
            <div className="svx-service-grid svx-service-grid-three">
              {manufacturingServices.map((service, index) => (
                <ServiceCard key={service.title} service={service} step={index} />
              ))}
            </div>
          </div>

          <div className="svx-service-group svx-reveal">
            <div className="svx-service-group-head">
              <span>Brand &amp; Market Support</span>
              <i aria-hidden="true" />
            </div>
            <div className="svx-service-grid svx-service-grid-two">
              {brandServices.map((service, index) => (
                <ServiceCard key={service.title} service={service} step={index} wide />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 08 — HELP CHOOSING */}
      <section className="svx-help-section">
        <div className="svx-container svx-help-grid">
          <div className="svx-help-copy svx-reveal">
            <span className="svx-kicker svx-kicker-light"><b>08</b> Not sure where to start?</span>
            <h2>Need help choosing the right service?</h2>
            <p>
              Not sure whether your requirement falls under pharmaceutical manufacturing, contract manufacturing,
              private label or third-party manufacturing?
            </p>
            <p>
              Send us your product requirement and our team can help identify the appropriate solution — you do not need
              to pick a service first.
            </p>

            <div className="svx-help-actions">
              <Link href="/contact?interest=service" className="svx-button svx-button-light">
                Discuss Your Requirement <span aria-hidden="true">→</span>
              </Link>
              <a href="#faq" className="svx-button svx-button-quiet">
                Read the FAQs <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="svx-router svx-reveal" style={delay(120)} aria-label="How requirements are routed">
            <div className="svx-router-head">
              <span>Requirement routing</span>
              <b>LIVE</b>
            </div>

            {routerRows.map(([from, to], index) => (
              <div className="svx-route-row" key={from}>
                <span>{from}</span>
                <span className="svx-route-line" aria-hidden="true"><i style={delay(index * 380)} /></span>
                <b>{to}</b>
              </div>
            ))}

            <div className="svx-router-foot">
              <i aria-hidden="true" />
              Tell us the product and the goal — the route follows from there.
            </div>
          </div>
        </div>
      </section>

      {/* 09 — FAQ */}
      <section className="svx-section svx-faq-section" id="faq">
        <div className="svx-container svx-faq-grid">
          <div className="svx-faq-intro svx-reveal">
            <span className="svx-kicker"><b>09</b> Frequently asked questions</span>
            <h2>Answers before you send the enquiry.</h2>
            <p>
              Common questions from pharmaceutical companies, brands, distributors and international buyers evaluating
              our services.
            </p>
          </div>

          <div className="svx-faq-list">
            {faqs.map(([question, answer], index) => (
              <details className="svx-faq-item svx-reveal" key={question} open={index === 0} style={delay(index * 50)}>
                <summary><span>{question}</span><i aria-hidden="true" /></summary>
                <div className="svx-faq-answer"><p>{answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Script id="svx-reveal" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: revealScript }} />
    </main>
  );
}