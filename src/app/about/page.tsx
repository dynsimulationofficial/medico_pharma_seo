// app/about/page.tsx  —  ABOUT US (Medico Pharma)
// Server component. Scroll reveals use the existing global [data-reveal] system.
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Medico Pharma | Medico Pharma Healthcare",
  description:
    "Learn about Medico Pharma, a pharmaceutical company providing quality products, contract manufacturing, private label, third-party manufacturing, export services and business partnerships.",
alternates: { canonical: "/about" },
  };

/** hero load-in delay (pure CSS keyframes) */
const h = (ms: number) => ({ "--ab-d": `${ms}ms` }) as CSSProperties;
/** scroll-reveal stagger consumed by the global [data-reveal] CSS */
const rd = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

const heroLines = [
  { text: "Building Trusted", em: null },
  { text: "Pharmaceutical ", em: "Partnerships" },
  { text: "for Better Healthcare", em: null },
];

const heroChips = [
  "Pharmaceutical Products",
  "Manufacturing",
  "Private Label",
  "Export Services",
  "Business Partnerships",
];

const capabilities = [
  {
    number: "01",
    title: "Pharmaceutical Products",
    text: "A broad range of pharmaceutical and healthcare categories across dosage forms — tablets, capsules, injections, medicines, skin care, ointments, antibiotics, antidiabetics, protein powders and herbal products.",
    href: "/products",
    cta: "Explore products",
    icon: "grid",
  },
  {
    number: "02",
    title: "Pharmaceutical Manufacturing",
    text: "Manufacturing support across selected product categories and formulations, discussed around product, quantity, formulation, packaging and commercial needs.",
    href: "/services/pharmaceutical-manufacturing",
    cta: "Pharmaceutical manufacturing",
    icon: "layers",
  },
  {
    number: "03",
    title: "Contract Manufacturing",
    text: "Outsource production while your team stays focused on brand, sales, marketing and distribution activities.",
    href: "/services/contract-manufacturing",
    cta: "Contract manufacturing",
    icon: "package",
  },
  {
    number: "04",
    title: "Third-Party Manufacturing",
    text: "For pharmaceutical companies, distributors and marketing businesses expanding or developing their product portfolio.",
    href: "/services/third-party-manufacturing",
    cta: "Third-party manufacturing",
    icon: "network",
  },
  {
    number: "05",
    title: "OEM / Private Label",
    text: "Introduce pharmaceutical and healthcare products under your own brand, with support across product selection, manufacturing, branding and packaging.",
    href: "/services/oem-private-label",
    cta: "OEM / Private label",
    icon: "medical",
  },
  {
    number: "06",
    title: "Export Services",
    text: "For international importers, distributors and partners sourcing pharmaceutical and healthcare products from India, according to individual market requirements.",
    href: "/services/export-services",
    cta: "Export services",
    icon: "globe",
  },
];

const partners = [
  ["01", "Pharmaceutical Distributors", "Expand your portfolio with products suited to your distribution network and market.", "TRADE & DISTRIBUTION"],
  ["02", "Importers & International Buyers", "Explore pharmaceutical sourcing and supply opportunities from India.", "EXPORT ENQUIRIES"],
  ["03", "Pharmaceutical Brands", "Contract manufacturing, third-party manufacturing and product expansion for established and growing brands.", "BRAND BUILDING"],
  ["04", "Private-Label Businesses", "Introduce pharmaceutical or healthcare products under your own brand identity.", "OWN LABEL"],
  ["05", "Healthcare Businesses", "Commercial healthcare buyers exploring pharmaceutical and related product categories.", "INSTITUTIONAL SUPPLY"],
  ["06", "Business & Distribution Partners", "Organisations building longer-term sourcing, manufacturing and distribution relationships.", "LONG-TERM PARTNERSHIPS"],
];

const approach = [
  ["01", "Understand", "We start with the actual requirement — product category, market, quantity, manufacturing model, packaging and commercial expectations."],
  ["02", "Identify", "We determine the most appropriate route: direct sourcing, manufacturing, contract or third-party production, OEM / private label or export support."],
  ["03", "Coordinate", "Product and business discussions stay structured so the relevant requirements remain clear throughout the process."],
  ["04", "Grow", "Our objective is to build business relationships that develop beyond a single product or transaction."],
];

const values = [
  ["QF", "Quality Focus", "Quality stays central to products, sourcing decisions and manufacturing partnerships."],
  ["CC", "Clear Communication", "Requirements, expectations and commercial discussions are organised from the beginning."],
  ["RL", "Reliability", "A professional, dependable experience throughout the enquiry and business discussion."],
  ["RB", "Responsible Business", "Pharmaceutical communication requires accuracy, responsibility and a measured approach."],
  ["PT", "Partnership", "Relationships that grow over time rather than a focus on individual transactions."],
];

const reasons = [
  ["01", "Diverse Pharmaceutical Portfolio", "Multiple pharmaceutical and healthcare categories through one business platform.", "grid"],
  ["02", "Multiple Manufacturing Solutions", "Pharmaceutical, contract and third-party manufacturing models, chosen to fit your requirement.", "layers"],
  ["03", "Private-Label Opportunities", "Develop selected pharmaceutical and healthcare products for sale under your own brand.", "package"],
  ["04", "International Business Focus", "Sourcing and export opportunities structured for international markets.", "globe"],
  ["05", "B2B-Focused Approach", "Built for distributors, importers, brands, private-label businesses and healthcare buyers.", "network"],
  ["06", "Built for Long-Term Partnerships", "Dependable relationships that can grow across products, services and markets.", "route"],
];

function AbIcon({ type }: { type: string }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (type === "network")
    return (
      <svg {...common}>
        <circle cx="6" cy="7" r="2.5" />
        <circle cx="18" cy="7" r="2.5" />
        <circle cx="12" cy="18" r="2.5" />
        <path d="m8 8.5 2.7 6.8M16 8.5l-2.7 6.8M8.5 7h7" />
      </svg>
    );
  if (type === "package")
    return (
      <svg {...common}>
        <path d="m4 7 8-4 8 4v10l-8 4-8-4V7Z" />
        <path d="m4 7 8 4 8-4M12 11v10" />
      </svg>
    );
  if (type === "medical")
    return (
      <svg {...common}>
        <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3Z" />
      </svg>
    );
  if (type === "globe")
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3 4 6 4 9s-1 6-4 9c-3-3-4-6-4-9s1-6 4-9Z" />
      </svg>
    );
  if (type === "layers")
    return (
      <svg {...common}>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </svg>
    );
  if (type === "route")
    return (
      <svg {...common}>
        <circle cx="5" cy="5" r="2" />
        <circle cx="19" cy="19" r="2" />
        <path d="M7 5h5a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4H9a4 4 0 0 0-4 4v0" />
      </svg>
    );
  return (
    <svg {...common}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div className="ab-page">
      {/* ==================== HERO ==================== */}
      <section className="ab-hero">
        <div className="ab-hero-orb ab-hero-orb-a" aria-hidden="true" />
        <div className="ab-hero-orb ab-hero-orb-b" aria-hidden="true" />

        <div className="container ab-hero-grid">
          <div className="ab-hero-copy">
            {/* <span className="eyebrow light ab-fade" style={h(60)}>
              About Medico Pharma
            </span> */}

            <h1>
              {heroLines.map((line, i) => (
                <span className="ab-line" key={line.text}>
                  <span className="ab-line-i" style={h(200 + i * 120)}>
                    {line.text}
                    {line.em ? <em>{line.em}</em> : null}
                  </span>
                </span>
              ))}
            </h1>

            {/* <p className="ab-hero-lead ab-fade" style={h(620)}>
              Medico Pharma connects pharmaceutical products, manufacturing solutions and business
              partnerships to help distributors, healthcare businesses, brands and international
              buyers source and grow with confidence.
            </p>

            <p className="ab-hero-lead ab-hero-lead-sm ab-fade" style={h(700)}>
              From products and manufacturing support to contract manufacturing, third-party
              manufacturing, OEM / private label and export services, we build dependable solutions
              around real business requirements.
            </p> */}

            <div className="hero-actions ab-fade" style={h(780)}>
              <Link href="/products" className="button button-light">
                Explore our products <span aria-hidden="true">→</span>
              </Link>
              <Link href="/contact" className="button button-ghost-light">
                Discuss your requirement <span aria-hidden="true">↗</span>
              </Link>
            </div>

            {/* <nav className="crumb ab-fade" style={h(860)} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>About</span>
            </nav> */}
          </div>

          {/* Hero visual — capability stack */}
          <div className="ab-hero-visual" aria-hidden="true">
            <div className="ab-ring ab-ring-a" />
            <div className="ab-ring ab-ring-b" />

            <div className="ab-stack">
              {[
                ["MP / 01", "Products", "9 categories"],
                ["MP / 02", "Manufacturing", "4 models"],
                ["MP / 03", "Partnerships", "B2B focused"],
              ].map(([code, label, meta], i) => (
                <div className="ab-stack-row ab-rise" key={label} style={h(420 + i * 140)}>
                  <span className="ab-stack-code">{code}</span>
                  <strong>{label}</strong>
                  <small>{meta}</small>
                  <i className="ab-stack-dot" />
                </div>
              ))}
            </div>

            <div className="ab-signal ab-rise" style={h(880)}>
              <span>
                <i className="ab-live" /> ENQUIRY ROUTE
              </span>
              <div className="ab-signal-bars">
                <i /><i /><i /><i /><i />
              </div>
              <strong>Open for discussion</strong>
            </div>
          </div>
        </div>

        <div className="container">
          <ul className="ab-chips" aria-label="Key focus areas">
            {heroChips.map((chip, i) => (
              <li key={chip} className="ab-chip ab-rise" style={h(940 + i * 90)}>
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ==================== 01 — COMPANY OVERVIEW ==================== */}
      <section className="section" id="overview">
        <div className="container ab-overview">
          <div className="ab-side" data-reveal="fade">
            <div className="ab-side-inner">
              <div className="ab-code">
                <span>01</span>
                <b>Company overview</b>
              </div>
              <span className="ab-rule" aria-hidden="true" />
              <p className="ab-side-note">
                Mumbai, Maharashtra
                <br />
                India
              </p>
            </div>
          </div>

          <div className="ab-overview-copy">
            <div data-reveal>
              <h2>About Medico Pharma</h2>
              <p className="ab-lead-para">
                Medico Pharma is a Mumbai-based pharmaceutical and healthcare company focused on
                pharmaceutical products, manufacturing solutions and long-term business
                partnerships.
              </p>
            </div>

            <div data-reveal style={rd(90)}>
              <p>
                We work with pharmaceutical distributors, healthcare businesses, importers,
                exporters, private-label brands and other business partners looking for dependable
                access to pharmaceutical and healthcare products.
              </p>
            </div>

            <div data-reveal style={rd(160)}>
              <p>
                Our approach is built around understanding what the business actually needs —
                sourcing an existing product, developing a new range, outsourcing manufacturing,
                launching under a private label or exploring supply opportunities for international
                markets.
              </p>
            </div>

            <div data-reveal style={rd(230)}>
              <p>
                Instead of treating every requirement as a simple product enquiry, we look at the
                product category, market, packaging, manufacturing and commercial requirements
                behind it. That lets us connect each partner with a more appropriate pharmaceutical
                solution.
              </p>
            </div>

            <div data-reveal="scale" style={rd(300)}>
              <blockquote className="ab-quote">
                <p>
                  Products. Manufacturing. Partnerships.
                  <em> One pharmaceutical business platform.</em>
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 02 — WHAT WE DO ==================== */}
      <section className="section ab-band-soft" id="what-we-do">
        <div className="container">
          <div className="ab-head" data-reveal>
            <div>
              <span className="eyebrow">Our business</span>
              <h2>Pharmaceutical solutions built around your business.</h2>
            </div>
            <p>
              Product sourcing and business services sit in one place, so partners can explore
              products, manufacturing opportunities and supply requirements through a single
              conversation.
            </p>
          </div>

          <div className="ab-cap-grid">
            {capabilities.map((item, i) => (
              <div key={item.title} data-reveal="scale" style={rd(i * 85)}>
                <Link href={item.href} className="ab-cap">
                  <span className="ab-cap-sweep" aria-hidden="true" />
                  <div className="ab-cap-top">
                    <span className="ab-cap-glyph">
                      <AbIcon type={item.icon} />
                    </span>
                    <span className="ab-cap-code">MP / {item.number}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="ab-cap-foot">
                    {item.cta}
                    <i aria-hidden="true">↗</i>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 03 — WHO WE WORK WITH ==================== */}
      <section className="section" id="partners">
        <div className="container">
          <div className="ab-head" data-reveal>
            <div>
              <span className="eyebrow">Our partners</span>
              <h2>
                Built for pharmaceutical <em>business partnerships.</em>
              </h2>
            </div>
            <p>
              Our focus is B2B. We work with businesses looking for pharmaceutical products,
              manufacturing solutions and dependable supply relationships.
            </p>
          </div>

          <ul className="ab-partner-list">
            {partners.map(([n, title, text, tag], i) => (
              <li key={title} data-reveal style={rd(i * 70)}>
                <div className="ab-partner">
                  <span className="ab-partner-num">{n}</span>
                  <div className="ab-partner-copy">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  <span className="ab-partner-tag">{tag}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ==================== 04 — OUR APPROACH (dark green band) ============ */}
      <section className="section ab-approach" id="approach">
        <div className="container">
          <div className="ab-approach-head" data-reveal>
            <div>
              <span className="eyebrow light">How we work</span>
              <h2>
                Clear requirements.
                <br />
                <em>Appropriate solutions.</em>
              </h2>
            </div>
            <p>
              Pharmaceutical requirements differ by product, market and business model. We start by
              understanding those differences before deciding the route forward.
            </p>
          </div>

          <div className="ab-step-grid" data-reveal="fade">
            <span className="ab-step-track" aria-hidden="true">
              <i />
            </span>

            {approach.map(([n, title, text]) => (
              <article className="ab-step" key={title}>
                <span className="ab-step-node">{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <p className="ab-rhythm" data-reveal style={rd(120)}>
            Understand <i aria-hidden="true">·</i> Identify <i aria-hidden="true">·</i> Coordinate{" "}
            <i aria-hidden="true">·</i> Grow
          </p>
        </div>
      </section>

      {/* ==================== 05 — VISION & MISSION ==================== */}
      <section className="section" id="purpose">
        <div className="container">
          <div className="ab-head" data-reveal>
            <div>
              <span className="eyebrow">Our purpose</span>
              <h2>Creating better connections across pharmaceutical markets.</h2>
            </div>
            <p>
              Strong pharmaceutical businesses are built through quality-focused products, clear
              communication and dependable partnerships.
            </p>
          </div>

          <div className="ab-purpose">
            <div data-reveal="left">
              <article className="ab-panel ab-panel-dark">
                <span className="ab-panel-orb" aria-hidden="true" />
                <span className="eyebrow light">Vision</span>
                <h3>Our Vision</h3>
                <p>
                  To build Medico Pharma into a trusted pharmaceutical business partner connecting
                  quality-focused healthcare products and manufacturing opportunities with
                  businesses across India and international markets.
                </p>
              </article>
            </div>

            <div data-reveal="right" style={rd(120)}>
              <article className="ab-panel ab-panel-light">
                <span className="eyebrow">Mission</span>
                <h3>Our Mission</h3>
                <p>
                  To make pharmaceutical sourcing, manufacturing collaboration and business
                  partnerships more accessible, organised and dependable by understanding each
                  partner&apos;s requirements and helping identify the right pharmaceutical
                  solution.
                </p>
                <Link href="/contact" className="text-link">
                  Talk to our team <span aria-hidden="true">→</span>
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 06 — VALUES ==================== */}
      <section className="section ab-band-mint" id="values">
        <div className="container">
          <div className="ab-head ab-head-center" data-reveal>
            <div>
              <span className="eyebrow">What guides us</span>
              <h2>
                Principles behind <em>every partnership.</em>
              </h2>
            </div>
            <p>
              How we communicate and work with partners matters as much as the products and services
              we provide.
            </p>
          </div>

          <div className="ab-values">
            {values.map(([code, title, text], i) => (
              <div key={title} data-reveal="scale" style={rd(i * 85)}>
                <article className="ab-value">
                  <span className="ab-value-code" aria-hidden="true">
                    {code}
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 07 — WHY MEDICO PHARMA ==================== */}
      <section className="section" id="why-us">
        <div className="container ab-why-grid">
          <div className="ab-why-intro" data-reveal="left">
            <span className="eyebrow">Why choose us</span>
            <h2>A practical pharmaceutical partner for growing businesses.</h2>
            <p>
              Products, manufacturing solutions and partnership opportunities sit on one platform —
              so you can start with today&apos;s requirement and keep future expansion open.
            </p>

            <div className="ab-statline">
              <div>
                <strong>9</strong>
                <span>product categories</span>
              </div>
              <div>
                <strong>5</strong>
                <span>service routes</span>
              </div>
              <div>
                <strong>6</strong>
                <span>partner types</span>
              </div>
            </div>
          </div>

          <div className="ab-why-cards">
            {reasons.map(([n, title, text, icon], i) => (
              <div key={title} data-reveal="right" style={rd(i * 80)}>
                <article className="ab-why-card">
                  <span className="ab-why-icon">
                    <AbIcon type={icon} />
                  </span>
                  <span className="ab-why-num">{n}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      {/* <section className="ab-cta" id="start">
        <div className="ab-cta-bg" aria-hidden="true" />
        <div className="container ab-cta-grid">
          <div data-reveal="left">
            <span className="eyebrow light">Start a conversation</span>
            <h2>Looking for the right pharmaceutical partner?</h2>
            <p>
              Whether you are searching for pharmaceutical products, planning a new private-label
              range, looking for manufacturing support or exploring sourcing opportunities from
              India, start by telling us what your business needs. We will help identify the most
              appropriate next step.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="button button-light">
                Discuss your requirement <span aria-hidden="true">→</span>
              </Link>
              <Link href="/products" className="button button-ghost-light">
                Explore our products <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div data-reveal="right" style={rd(120)}>
            <ul className="ab-cta-list">
              {[
                ["Products", "Tablets, capsules, injections, topicals and nutrition ranges."],
                ["Manufacturing", "Contract, third-party and private-label production routes."],
                ["Export", "Supply coordination for international buyers and distributors."],
              ].map(([title, text]) => (
                <li key={title}>
                  <i aria-hidden="true" />
                  <div>
                    <strong>{title}</strong>
                    <small>{text}</small>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section> */}
    </div>
  );
}
