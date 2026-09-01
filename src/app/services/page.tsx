// app/services/page.tsx
// Medico Pharma — Services (redesigned)
// CSS prefix: .mps-   → paste "services.css" at the END of app/globals.css
// (The old "SERVICES PAGE (SVX)" block in globals.css is no longer used and can be deleted.)

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

/* ------------------------------------------------------------------
   TYPES
------------------------------------------------------------------ */

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
  | "growth"
  | "leaf"
  | "capsule"
  | "protein"
  | "bolt"
  | "herb"
  | "mortar"
  | "pill"
  | "monitor"
  | "surgical"
  | "vial";

type ServiceItem = {
  code: string;
  title: string;
  text: string;
  tags: string[];
  href: string;
  icon: IconName;
};

type CategoryItem = {
  name: string;
  note: string;
  group: string;
  icon: IconName;
};

type BusinessItem = {
  tag: string;
  title: string;
  text: string;
  icon: IconName;
};

/* ------------------------------------------------------------------
   MOTION SCRIPTS
   Reveal elements start hidden in CSS, so there is never a flash.
   The <noscript> block below un-hides them when JS is unavailable,
   and the script has a safety net so content can never stay hidden.
   Nothing is written to <html> or <body>, which keeps Next.js
   hydration clean.
------------------------------------------------------------------ */

const noscriptStyles = `<style>.mps-reveal{opacity:1!important;transform:none!important}</style>`;

const motionScript = `
(function () {
  if (window.__mpsMotion) { window.__mpsMotion(); return; }

  var reduced = window.matchMedia
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function show(node) { node.classList.add('is-visible'); }

  function showAll() {
    var nodes = document.querySelectorAll('.mps-reveal:not(.is-visible)');
    Array.prototype.forEach.call(nodes, show);
  }

  function initReveal() {
    var nodes = document.querySelectorAll('.mps-reveal:not(.is-visible)');
    if (!nodes.length) return;

    if (reduced || !('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(nodes, show);
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          show(entries[i].target);
          io.unobserve(entries[i].target);
        }
      }
    }, { rootMargin: '0px 0px -9% 0px', threshold: 0.06 });

    Array.prototype.forEach.call(nodes, function (n) { io.observe(n); });
  }

  // Nothing may ever stay hidden: anything already on screen is forced open.
  function safetyNet() {
    var nodes = document.querySelectorAll('.mps-reveal:not(.is-visible)');
    Array.prototype.forEach.call(nodes, function (n) {
      if (n.getBoundingClientRect().top < window.innerHeight * 1.05) show(n);
    });
  }

  function initCounters() {
    var els = document.querySelectorAll('[data-mps-count]');
    if (!els.length || reduced || !('IntersectionObserver' in window)) return;

    function run(el) {
      var target = parseInt(el.getAttribute('data-mps-count'), 10) || 0;
      var pad = el.getAttribute('data-mps-pad') === '1';
      var dur = 1100;
      var t0 = null;

      el.textContent = pad ? '00' : '0';

      function frame(ts) {
        if (t0 === null) t0 = ts;
        var p = Math.min((ts - t0) / dur, 1);
        var v = Math.round(target * (1 - Math.pow(1 - p, 3)));
        el.textContent = (pad && v < 10) ? '0' + v : String(v);
        if (p < 1) window.requestAnimationFrame(frame);
      }
      window.requestAnimationFrame(frame);
    }

    var co = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          run(entries[i].target);
          co.unobserve(entries[i].target);
        }
      }
    }, { threshold: 0.45 });

    Array.prototype.forEach.call(els, function (n) { co.observe(n); });
  }

  // Cursor-follow light on cards (pointer devices only).
  function initSpotlight() {
    if (reduced) return;
    if (window.matchMedia && !window.matchMedia('(hover: hover)').matches) return;

    var cards = document.querySelectorAll('.mps-spot');
    Array.prototype.forEach.call(cards, function (card) {
      if (card.getAttribute('data-mps-spot') === '1') return;
      card.setAttribute('data-mps-spot', '1');

      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty('--mps-mx', (((e.clientX - r.left) / r.width) * 100).toFixed(1) + '%');
        card.style.setProperty('--mps-my', (((e.clientY - r.top) / r.height) * 100).toFixed(1) + '%');
      });
    });
  }

  function boot() {
    try {
      initReveal();
      initCounters();
      initSpotlight();
      window.setTimeout(safetyNet, 600);
    } catch (err) {
      showAll();
    }
  }

  window.__mpsMotion = boot;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  window.addEventListener('load', function () { initReveal(); safetyNet(); });
})();
`;

/* ------------------------------------------------------------------
   CONTENT
------------------------------------------------------------------ */

/* Drop your photo at public/images/services/services-hero.jpg
   Leave this as an empty string ("") to show the placeholder frame instead. */
const heroImage = "/images/services/services-hero.jpg";

const heroTrust = [
  "Quality you can trust",
  "Flexible manufacturing models",
  "Domestic supply and export",
];

const heroStats = [
  { value: 5, label: "Service routes", meta: "Manufacturing, brand and market support" },
  { value: 10, label: "Product categories", meta: "Pharma, nutra, devices, diagnostics" },
  { value: 3, label: "Manufacturing models", meta: "Contract, third-party and OEM" },
  { value: 2, label: "Supply routes", meta: "Domestic distribution and export" },
];

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
];

const journey: [string, string, string][] = [
  [
    "01",
    "Product requirement",
    "The process begins by understanding the product or category you require, along with composition, dosage form, quantity, packaging and intended market.",
  ],
  [
    "02",
    "Manufacturing & production",
    "For manufacturing requirements, production can be planned according to the agreed product specifications and commercial requirements.",
  ],
  [
    "03",
    "Packaging & presentation",
    "Packaging requirements can be coordinated according to the product format, pack size, branding and intended distribution channel.",
  ],
  [
    "04",
    "Branding & private label",
    "Businesses planning to launch their own pharmaceutical or healthcare brand can explore OEM and private-label manufacturing solutions.",
  ],
  [
    "05",
    "Documentation & supply",
    "Applicable product, manufacturing and commercial documentation can be coordinated according to the nature of the project.",
  ],
  [
    "06",
    "Domestic & international",
    "Our service portfolio supports businesses requiring products for domestic distribution as well as international pharmaceutical supply.",
  ],
];

const manufacturingServices: ServiceItem[] = [
  {
    code: "SRV / 01",
    title: "Pharmaceutical Manufacturing",
    text: "Manufacturing solutions for pharmaceutical and healthcare products based on your formulation, product category, quantity and packaging requirements.",
    tags: ["Production support", "Formulation-led", "Packaging"],
    href: "/services/pharmaceutical-manufacturing",
    icon: "factory",
  },
  {
    code: "SRV / 02",
    title: "Contract Manufacturing",
    text: "Outsource pharmaceutical production to a manufacturing partner while continuing to manage your own brand, sales and distribution operations.",
    tags: ["Flexible manufacturing", "Agreement based"],
    href: "/services/contract-manufacturing",
    icon: "contract",
  },
  {
    code: "SRV / 03",
    title: "Third-Party Manufacturing",
    text: "Manufacturing solutions for pharmaceutical companies, distributors and marketing businesses looking to outsource product production.",
    tags: ["Scalable production", "Distributor friendly"],
    href: "/services/third-party-manufacturing",
    icon: "network",
  },
];

const brandServices: ServiceItem[] = [
  {
    code: "SRV / 04",
    title: "OEM / Private Label",
    text: "Develop and manufacture pharmaceutical, nutraceutical and healthcare products that can be marketed and sold under your own brand.",
    tags: ["Your brand, our support", "Pack design", "Label coordination"],
    href: "/services/oem-private-label",
    icon: "package",
  },
  {
    code: "SRV / 05",
    title: "Export Services",
    text: "Pharmaceutical product, manufacturing and supply support for importers, distributors and healthcare businesses serving international markets.",
    tags: ["International supply", "Documentation", "Shipment prep"],
    href: "/services/export-services",
    icon: "globe",
  },
];

const categories: CategoryItem[] = [
  { name: "Nutraceuticals", note: "Daily wellness and supplement formats.", group: "Nutrition", icon: "leaf" },
  { name: "Vitamins & Minerals", note: "Single-nutrient and multi blends.", group: "Nutrition", icon: "capsule" },
  { name: "Protein Powders", note: "Whey, plant and blended formats.", group: "Nutrition", icon: "protein" },
  { name: "Sports Nutrition", note: "Performance and recovery ranges.", group: "Nutrition", icon: "bolt" },
  { name: "Herbal Products", note: "Plant-based healthcare formats.", group: "Herbal", icon: "herb" },
  { name: "Ayurvedic Products", note: "Traditional formulation support.", group: "Herbal", icon: "mortar" },
  { name: "Pharmaceutical Formulations", note: "Solid, liquid and topical dosage.", group: "Pharma", icon: "pill" },
  { name: "Medical Devices", note: "Device and equipment sourcing.", group: "Devices", icon: "monitor" },
  { name: "Surgical Consumables", note: "Single-use surgical supplies.", group: "Devices", icon: "surgical" },
  { name: "Diagnostic Kits", note: "Rapid and lab test formats.", group: "Devices", icon: "vial" },
];

const businessTypes: BusinessItem[] = [
  {
    tag: "Extra capacity",
    title: "Pharmaceutical companies",
    text: "For companies requiring additional manufacturing capacity, outsourced production or support for expanding an existing product range.",
    icon: "building",
  },
  {
    tag: "New range",
    title: "Healthcare & wellness brands",
    text: "For brands looking to introduce pharmaceutical, nutraceutical, wellness, herbal or related healthcare products.",
    icon: "sparkle",
  },
  {
    tag: "Wider portfolio",
    title: "Distributors & wholesalers",
    text: "For businesses looking to expand their product portfolio without managing manufacturing operations internally.",
    icon: "truck",
  },
  {
    tag: "Own brand",
    title: "Private-label businesses",
    text: "For businesses that want products manufactured and supplied under their own brand identity.",
    icon: "tag",
  },
  {
    tag: "Overseas markets",
    title: "Importers & international buyers",
    text: "For buyers seeking pharmaceutical and healthcare products from India for their local markets.",
    icon: "import",
  },
  {
    tag: "Getting started",
    title: "New & growing businesses",
    text: "For businesses looking for a manufacturing and supply partner while developing their pharmaceutical product portfolio.",
    icon: "growth",
  },
];

const flexFactors: [string, string][] = [
  ["Product category", "Pharma, nutra or device"],
  ["Formulation", "Existing or developed"],
  ["Dosage form", "Solid, liquid or topical"],
  ["Required quantity", "Trial to bulk"],
  ["Packaging format", "Primary and secondary"],
  ["Branding", "House or private label"],
  ["Target market", "Domestic or international"],
  ["Supply route", "Distribution or export"],
  ["Repeat orders", "One-time or ongoing"],
];

const routerRows: [string, string][] = [
  ["You have a formulation and need production", "Manufacturing"],
  ["You own the brand, we handle production", "Private label"],
  ["You run marketing or distribution", "Third-party"],
  ["You are buying for an overseas market", "Export"],
];

const faqs: [string, string][] = [
  [
    "What services does Medico Pharma provide?",
    "Medico Pharma provides pharmaceutical manufacturing, contract manufacturing, OEM and private-label solutions, third-party manufacturing and pharmaceutical export services. We also support product, packaging, branding, documentation and supply requirements depending on the project.",
  ],
  [
    "What types of products can Medico Pharma support?",
    "Our services can support multiple pharmaceutical and healthcare categories, including nutraceuticals, vitamins and minerals, protein powders, sports nutrition, herbal products, Ayurvedic products, pharmaceutical formulations, medical devices, surgical consumables and diagnostic kits.",
  ],
  [
    "Can Medico Pharma manufacture products for my own brand?",
    "Yes. Businesses looking to introduce products under their own brand can explore our OEM and private-label services. Product formulation, manufacturing, packaging and branding requirements can be discussed according to the project.",
  ],
  [
    "Do you provide third-party pharmaceutical manufacturing?",
    "Yes. Third-party manufacturing services are available for businesses looking to outsource pharmaceutical production while focusing on marketing, distribution and sales.",
  ],
  [
    "What is the difference between contract manufacturing and third-party manufacturing?",
    "Both models involve outsourcing manufacturing. Contract manufacturing generally refers to manufacturing products according to specific requirements or agreements for another company, while third-party manufacturing is commonly used by pharmaceutical marketing and distribution businesses that outsource production to an external manufacturer. The suitable model depends on your business and product requirements.",
  ],
  [
    "Can you support bulk pharmaceutical requirements?",
    "Bulk and repeat supply requirements can be evaluated based on the product category, formulation, quantity, packaging and manufacturing requirements.",
  ],
  [
    "Do you provide pharmaceutical export services?",
    "Yes. We support international pharmaceutical and healthcare product requirements, including manufacturing or sourcing coordination, packaging, documentation and shipment preparation depending on the product and destination market.",
  ],
  [
    "Can you provide custom packaging?",
    "Packaging requirements can be discussed according to the product type and project. Options may include product-specific primary packaging, labels, cartons and other secondary packaging formats.",
  ],
  [
    "How do I start a manufacturing enquiry?",
    "Send us the product or category you require along with the formulation or composition, required quantity, packaging preference and target market. Our team can then review the requirement and discuss the appropriate service.",
  ],
  [
    "I am not sure which service I need. Can you help?",
    "Yes. You do not need to select a service before contacting us. Tell us what product you need and what you are trying to achieve, and we can help identify the most suitable manufacturing or supply option.",
  ],
];

/* ------------------------------------------------------------------
   ICONS
------------------------------------------------------------------ */

function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  const p = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: "false" as const,
  };

  switch (name) {
    case "factory":
      return (
        <svg {...p}>
          <path d="M3 21V9l6 3V8l6 4V5h6v16H3Z" />
          <path d="M7 17h2M12 17h2M17 17h2" />
        </svg>
      );
    case "contract":
      return (
        <svg {...p}>
          <path d="M6 3h9l4 4v14H6V3Z" />
          <path d="M14 3v5h5M9 12h6M9 16h4" />
        </svg>
      );
    case "package":
      return (
        <svg {...p}>
          <path d="m4 7 8-4 8 4v10l-8 4-8-4V7Z" />
          <path d="m4 7 8 4 8-4M12 11v10" />
        </svg>
      );
    case "network":
      return (
        <svg {...p}>
          <circle cx="6" cy="7" r="2.4" />
          <circle cx="18" cy="7" r="2.4" />
          <circle cx="12" cy="18" r="2.4" />
          <path d="m8 8.4 2.6 7M16 8.4l-2.6 7M8.5 7h7" />
        </svg>
      );
    case "globe":
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c3 3 4 6 4 9s-1 6-4 9c-3-3-4-6-4-9s1-6 4-9Z" />
        </svg>
      );
    case "building":
      return (
        <svg {...p}>
          <path d="M4 21V6l7-3v18M11 21h9V10l-9-3" />
          <path d="M7 9h1M7 13h1M15 13h1M15 17h1" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...p}>
          <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
          <circle cx="12" cy="12" r="2.6" />
        </svg>
      );
    case "truck":
      return (
        <svg {...p}>
          <path d="M3 16V6h11v10M14 9h4l3 3.4V16h-7" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="17" cy="18" r="2" />
        </svg>
      );
    case "tag":
      return (
        <svg {...p}>
          <path d="M3 12V4h8l9 9-8 8-9-9Z" />
          <circle cx="7.5" cy="7.5" r="1.4" />
        </svg>
      );
    case "import":
      return (
        <svg {...p}>
          <path d="M12 3v11m0 0 4-4m-4 4-4-4" />
          <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...p}>
          <path d="M20 4c0 9-5 14-13 14H4c0-9 5-14 13-14h3Z" />
          <path d="M4.5 20c2.6-5.4 6.3-8.6 11-10.4" />
        </svg>
      );
    case "capsule":
      return (
        <svg {...p}>
          <rect x="2.5" y="8" width="19" height="8" rx="4" />
          <path d="M12 8v8" />
        </svg>
      );
    case "protein":
      return (
        <svg {...p}>
          <path d="M5 8h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 8Z" />
          <path d="M8.5 8V5.6A2.6 2.6 0 0 1 11.1 3h1.8a2.6 2.6 0 0 1 2.6 2.6V8" />
          <path d="M9 13h6" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...p}>
          <path d="M13.2 2.5 5 13.6h5.9L9.8 21.5 18 10.4h-5.9l1.1-7.9Z" />
        </svg>
      );
    case "herb":
      return (
        <svg {...p}>
          <path d="M12 21V9.5" />
          <path d="M12 12.5c-4.6 0-6.5-2.8-6.5-6.5 4.6 0 6.5 2.8 6.5 6.5ZM12 16.5c4.6 0 6.5-2.8 6.5-6.5-4.6 0-6.5 2.8-6.5 6.5Z" />
        </svg>
      );
    case "mortar":
      return (
        <svg {...p}>
          <path d="M4 9.5h16A8 8 0 0 1 12 17a8 8 0 0 1-8-7.5Z" />
          <path d="M12 17v3.5M8.5 20.5h7M14.5 3.5 10 9.5" />
        </svg>
      );
    case "pill":
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="8.2" />
          <path d="M7.2 12h9.6" />
        </svg>
      );
    case "monitor":
      return (
        <svg {...p}>
          <rect x="2.5" y="4" width="19" height="13" rx="2.2" />
          <path d="M12 17v4M8.5 21h7" />
          <path d="M6 10.5h2.2l1.4-2.8 2.2 5.6 1.4-2.8H18" />
        </svg>
      );
    case "surgical":
      return (
        <svg {...p}>
          <path d="M3.2 16.4 13.6 6a3 3 0 0 1 4.3 4.2L7.4 20.6l-4.6.6.4-4.8Z" />
          <path d="m12.4 7.4 4.2 4.2" />
        </svg>
      );
    case "vial":
      return (
        <svg {...p}>
          <path d="M9 3h6M10 3v7.4L5.7 18a2 2 0 0 0 1.7 3h9.2a2 2 0 0 0 1.7-3L14 10.4V3" />
          <path d="M7.4 15.2h9.2" />
        </svg>
      );
    default:
      return (
        <svg {...p}>
          <path d="M12 21V10" />
          <path d="M12 13c-5 0-7-3-7-7 5 0 7 3 7 7ZM12 17c5 0 7-3 7-7-5 0-7 3-7 7Z" />
        </svg>
      );
  }
}

/* ------------------------------------------------------------------
   HELPERS
------------------------------------------------------------------ */

const step = (ms: number) => ({ "--mps-delay": `${ms}ms` } as CSSProperties);

function ServiceCard({ service, index, wide }: { service: ServiceItem; index: number; wide?: boolean }) {
  return (
    <Link
      href={service.href}
      className={`mps-service-card mps-spot mps-reveal${wide ? " is-wide" : ""}`}
      style={step(index * 90)}
    >
      <span className="mps-service-sweep" aria-hidden="true" />

      <div className="mps-service-top">
        <span className="mps-service-glyph" aria-hidden="true">
          <Icon name={service.icon} size={26} />
        </span>
        <span className="mps-service-code">{service.code}</span>
      </div>

      <h3>{service.title}</h3>
      <p>{service.text}</p>

      <div className="mps-service-tags">
        {service.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className="mps-service-foot">
        Explore this service
        <i aria-hidden="true">↗</i>
      </div>
    </Link>
  );
}

/* ------------------------------------------------------------------
   PAGE
------------------------------------------------------------------ */

export default function ServicesPage() {
  const allServices = [...manufacturingServices, ...brandServices];

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
    itemListElement: allServices.map((service, index) => ({
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
    <main className="mps-page">
      <noscript dangerouslySetInnerHTML={{ __html: noscriptStyles }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ---------- BREADCRUMB ---------- */}
      {/* <div className="mps-crumb-band">
        <div className="mps-container">
          <nav className="mps-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <strong>Services</strong>
          </nav>
        </div>
      </div> */}

      {/* ---------- HERO ---------- */}
      <section className="mps-hero">
        <span className="mps-hero-orb mps-hero-orb-a" aria-hidden="true" />
        <span className="mps-hero-orb mps-hero-orb-b" aria-hidden="true" />

        <div className="mps-container mps-hero-grid">
          <div className="mps-hero-copy">
            {/* <span className="mps-kicker mps-kicker-light mps-anim" style={step(60)}>
              <b>Services</b> Medico Pharma
            </span> */}

            <h1 className="mps-anim" style={step(150)}>
              Pharmaceutical solutions built around <em>your requirement.</em>
            </h1>

            <p className="mps-anim" style={step(250)}>
              We work with pharmaceutical companies, healthcare brands, distributors, wholesalers, importers and
              exporters — providing <strong>manufacturing, private label and supply solutions</strong> for businesses
              developing or expanding a healthcare product portfolio.
            </p>

            <div className="mps-hero-actions mps-anim" style={step(350)}>
              <Link href="/contact" className="mps-button mps-button-light">
                Discuss your requirement <span aria-hidden="true">→</span>
              </Link>
              <a href="#services" className="mps-button mps-button-quiet">
                View all services <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="mps-hero-visual mps-anim" style={step(300)}>
            <div
              className="pmx-image-slot pmx-image-slot-hero has-image"
  style={{ backgroundImage: 'url("/solutions.png")' }}
  role="img"
  aria-label="Pharmaceutical manufacturing facility"
            >
              {heroImage ? (
                <span
                  className="mps-hero-photo"
                  style={{ backgroundImage: `url("${heroImage}")` }}
                  aria-hidden="true"
                />
              ) : (
                <span className="mps-hero-placeholder" aria-hidden="true">
                  <i />
                  <b />
                  <small>Add hero image</small>
                </span>
              )}

              <span className="mps-hero-tint" aria-hidden="true" />
              <span className="mps-hero-sweep" aria-hidden="true" />
            </div>

            <div className="mps-hero-card is-routes">
              <span>Service routes</span>
              <strong>05 available</strong>
              <div className="mps-hero-bars" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>

            <div className="mps-hero-card is-signal">
              <span>
                <i aria-hidden="true" />
                Requirement signal
              </span>
              <svg viewBox="0 0 220 40" preserveAspectRatio="none" aria-hidden="true">
                <path
                  vectorEffect="non-scaling-stroke"
                  d="M0 24H34l7-16 6 26 7-22 5 12h44l7-17 6 27 7-23 5 13h92"
                />
              </svg>
              <strong>One enquiry, routed</strong>
            </div>

            <ul className="mps-hero-panel">
              {heroTrust.map((line) => (
                <li key={line}>
                  <i aria-hidden="true" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mps-container">
          <div className="mps-hero-stats" aria-label="Services at a glance">
            {heroStats.map((stat, index) => (
              <div key={stat.label} className="mps-anim" style={step(430 + index * 70)}>
                <strong data-mps-count={stat.value} data-mps-pad="1">
                  {String(stat.value).padStart(2, "0")}
                </strong>
                <b>{stat.label}</b>
                <small>{stat.meta}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 01 OVERVIEW ---------- */}
      <section className="mps-section mps-intro">
        <div className="mps-container mps-intro-grid mps-reveal">
          <div className="mps-section-code">
            <span aria-hidden="true">01</span>
            <b>Overview</b>
          </div>

          <div className="mps-intro-copy">
            <p>
              Medico Pharma provides pharmaceutical manufacturing and supply solutions for businesses looking to
              develop, manufacture, source and distribute healthcare products.
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

      {/* ---------- 02 SUPPORT LEDGER ---------- */}
      <section className="mps-section mps-support-section">
        <div className="mps-container">
          <div className="mps-heading-row mps-reveal">
            <div>
              <span className="mps-kicker">
                <b>02</b> One roof
              </span>
              <h2>Complete pharmaceutical support under one roof</h2>
            </div>

            <div className="mps-heading-copy">
              <p>
                Bringing a product to market involves more than manufacturing alone. Businesses often need to
                coordinate product requirements, manufacturing, packaging, branding, documentation and supply through
                multiple partners.
              </p>
              <p>
                Medico Pharma simplifies this with <strong>integrated pharmaceutical services</strong> that support
                different stages of the product and supply journey.
              </p>
            </div>
          </div>

          <div className="mps-support-grid mps-reveal" style={step(70)}>
            {supportItems.map((item, index) => (
              <div className="mps-support-row" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
                <i aria-hidden="true">↗</i>
              </div>
            ))}
          </div>

          <p className="mps-support-note mps-reveal" style={step(110)}>
            Our approach lets businesses <strong>choose only the services they need</strong> rather than following a
            single fixed manufacturing model.
          </p>
        </div>
      </section>

      {/* ---------- 03 JOURNEY ---------- */}
      <section className="mps-flow-section">
        <div className="mps-container">
          <div className="mps-flow-heading mps-reveal">
            <div>
              <span className="mps-kicker mps-kicker-light">
                <b>03</b> How it works
              </span>
              <h2>From product requirement to finished supply</h2>
            </div>
            <p>
              Some companies already have formulations and simply need production. Others want a new range under their
              own brand. We coordinate the right service for each route.
            </p>
          </div>

          <div className="mps-flow-track" aria-hidden="true">
            <i />
          </div>

          <ol className="mps-flow-grid">
            {journey.map(([number, title, text], index) => (
              <li className="mps-flow-card mps-reveal" key={title} style={step(index * 70)}>
                <span className="mps-flow-node">
                  {number}
                  <i aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- 04 SERVICES ---------- */}
      <section className="mps-section mps-services-section" id="services">
        <div className="mps-container">
          <div className="mps-heading-row mps-reveal">
            <div>
              <span className="mps-kicker">
                <b>04</b> Our services
              </span>
              <h2>Five focused routes, one place to start</h2>
            </div>
            <p className="mps-heading-copy">
              Each service has its own page, so you can move straight into the right commercial conversation instead of
              working through unrelated options.
            </p>
          </div>

          <div className="mps-service-group mps-reveal">
            <div className="mps-group-head">
              <span>Manufacturing</span>
              <i aria-hidden="true" />
              <small>Services 01–03</small>
            </div>

            <div className="mps-service-grid is-three">
              {manufacturingServices.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </div>
          </div>

          <div className="mps-service-group mps-reveal">
            <div className="mps-group-head">
              <span>Brand &amp; market support</span>
              <i aria-hidden="true" />
              <small>Services 04–05</small>
            </div>

            <div className="mps-service-grid is-two">
              {brandServices.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} wide />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 05 PRODUCT CATEGORIES (cards) ---------- */}
      <section className="mps-section mps-category-section">
        <div className="mps-container">
          <div className="mps-heading-row mps-reveal">
            <div>
              <span className="mps-kicker">
                <b>05</b> Product categories
              </span>
              <h2>Categories these services can cover</h2>
            </div>
            <p className="mps-heading-copy">
              Every service above can be applied across the categories below, so a single partner can support your
              portfolio as it grows from one product into a full range.
            </p>
          </div>

          <div className="mps-category-grid">
            {categories.map((category, index) => (
              <article className="mps-cat-card mps-spot mps-reveal" key={category.name} style={step(index * 55)}>
                <div className="mps-cat-visual">
                  <span className="mps-cat-grain" aria-hidden="true" />
                  <span className="mps-cat-sweep" aria-hidden="true" />
                  <span className="mps-cat-icon" aria-hidden="true">
                    <Icon name={category.icon} size={26} />
                  </span>
                  <span className="mps-cat-group">{category.group}</span>
                </div>

                <div className="mps-cat-copy">
                  <h3>{category.name}</h3>
                  <p>{category.note}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mps-category-cta mps-reveal" style={step(90)}>
            <div>
              <strong>Looking for a category that isn&apos;t listed here?</strong>
              <p>Send the product or composition you need and we will confirm whether we can support it.</p>
            </div>

            <div className="mps-category-cta-actions">
              <Link href="/products" className="mps-button mps-button-dark">
                Explore our products <span aria-hidden="true">→</span>
              </Link>
              <Link href="/contact" className="mps-button mps-button-outline">
                Ask about a category <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 06 WHO WE WORK WITH ---------- */}
      <section className="mps-section mps-business-section">
        <div className="mps-container">
          <div className="mps-heading-row mps-reveal">
            <div>
              <span className="mps-kicker">
                <b>06</b> Who we work with
              </span>
              <h2>Solutions for different types of businesses</h2>
            </div>
            <p className="mps-heading-copy">
              Our services support businesses at different stages of growth — from established pharmaceutical companies
              to first-time brand owners and international buyers.
            </p>
          </div>

          <div className="mps-business-grid">
            {businessTypes.map((item, index) => (
              <article className="mps-business-card mps-spot mps-reveal" key={item.title} style={step(index * 70)}>
                <div className="mps-business-top">
                  <span className="mps-business-icon" aria-hidden="true">
                    <Icon name={item.icon} size={24} />
                  </span>
                  <span className="mps-business-tag">{item.tag}</span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 07 FLEXIBLE MODEL ---------- */}
      <section className="mps-section mps-flex-section">
        <div className="mps-container mps-flex-grid">
          <div className="mps-flex-copy mps-reveal">
            <span className="mps-kicker">
              <b>07</b> Flexible service model
            </span>
            <h2>No single model fits every business</h2>
            <p>
              Your requirement may depend on product category, formulation, dosage form, quantity, packaging format,
              branding, target market, supply route and repeat-order expectations.
            </p>
            <p>
              Our team reviews these factors together to help decide the right manufacturing or supply solution for your
              business.
            </p>
          </div>

          <div className="mps-console mps-reveal" style={step(110)} aria-label="Requirement evaluation factors">
            <div className="mps-console-head">
              <span>
                <i aria-hidden="true" /> Requirement review
              </span>
              <b>MP / EVALUATION</b>
            </div>

            <span className="mps-console-scan" aria-hidden="true" />

            <div className="mps-console-body">
              {flexFactors.map(([label, value], index) => (
                <div className="mps-console-cell" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                  <i aria-hidden="true" style={step(index * 170)} />
                </div>
              ))}
            </div>

            <div className="mps-console-foot">
              <span>Reviewed together, not in isolation</span>
              <strong>09 factors</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 08 HELP CHOOSING ---------- */}
      <section className="mps-help-section">
        <div className="mps-container mps-help-grid">
          <div className="mps-help-copy mps-reveal">
            <span className="mps-kicker mps-kicker-light">
              <b>08</b> Not sure where to start
            </span>
            <h2>We can pick the right service for you</h2>
            <p>
              Not sure whether your requirement falls under pharmaceutical manufacturing, contract manufacturing,
              private label or third-party manufacturing?
            </p>
            <p>
              Send us your product requirement and our team will identify the right solution. You do not need to choose
              a service first.
            </p>

            <div className="mps-help-actions">
              <Link href="/contact" className="mps-button mps-button-light">
                Discuss your requirement <span aria-hidden="true">→</span>
              </Link>
              <a href="#faq" className="mps-button mps-button-quiet">
                Read the FAQs <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="mps-router mps-reveal" style={step(110)} aria-label="How requirements are routed">
            <div className="mps-router-head">
              <span>Requirement routing</span>
              <b>Live</b>
            </div>

            {routerRows.map(([from, to], index) => (
              <div className="mps-route-row" key={from}>
                <span>{from}</span>
                <span className="mps-route-line" aria-hidden="true">
                  <i style={step(index * 360)} />
                </span>
                <b>{to}</b>
              </div>
            ))}

            <p className="mps-router-foot">
              <i aria-hidden="true" />
              Tell us the product and the goal — the route follows from there.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- 09 FAQ ---------- */}
      <section className="mps-section mps-faq-section" id="faq">
        <div className="mps-container mps-faq-grid">
          <div className="mps-faq-intro mps-reveal">
            <span className="mps-kicker">
              <b>09</b> Frequently asked questions
            </span>
            <h2>Answers before you send the enquiry</h2>
            <p>
              Common questions from pharmaceutical companies, brands, distributors and international buyers evaluating
              our services.
            </p>
          </div>

          <div className="mps-faq-list">
            {faqs.map(([question, answer], index) => (
              <details className="mps-faq-item mps-reveal" key={question} open={index === 0} style={step(index * 45)}>
                <summary>
                  <span>{question}</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="mps-faq-answer">
                  <p>{answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Script id="mps-motion" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: motionScript }} />
    </main>
  );
}
