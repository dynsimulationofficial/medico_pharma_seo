import Link from "next/link";
import type { CSSProperties } from "react";

const products = [
  {
    code: "NUT",
    title: "Nutraceuticals",
    href: "/products/nutraceuticals",
    text: "Nutrition-led formulations for wellness portfolios, private-label programs and healthcare distribution.",
    tags: ["Wellness", "Daily nutrition", "Private label"],
    icon: "capsule",
  },
  {
    code: "V&M",
    title: "Vitamins & Minerals",
    href: "/products/vitamins-minerals",
    text: "Vitamin and mineral formats organised for clear portfolio discovery across everyday nutrition categories.",
    tags: ["Vitamins", "Minerals", "Micronutrients"],
    icon: "spark",
  },
  {
    code: "PRO",
    title: "Protein Powders",
    href: "/products/protein-powders",
    text: "Protein-focused powder concepts for nutrition, lifestyle and active-wellness product ranges.",
    tags: ["Powders", "Protein", "Nutrition"],
    icon: "powder",
  },
  {
    code: "SPT",
    title: "Sports Nutrition",
    href: "/products/sports-nutrition",
    text: "Performance-oriented nutrition categories designed for active consumers and sports-focused portfolios.",
    tags: ["Performance", "Recovery", "Active wellness"],
    icon: "bolt",
  },
  {
    code: "HRB",
    title: "Herbal Products",
    href: "/products/herbal-products",
    text: "Botanical and plant-based product categories presented with responsible, non-disease communication.",
    tags: ["Botanical", "Plant based", "Wellness"],
    icon: "leaf",
  },
  {
    code: "AYU",
    title: "Ayurvedic Products",
    href: "/products/ayurvedic-products",
    text: "Traditional wellness product categories for partners seeking clearly positioned Ayurvedic ranges.",
    tags: ["Ayurvedic", "Traditional", "Wellness"],
    icon: "herb",
  },
  {
    code: "DEV",
    title: "Medical Devices",
    href: "/products/medical-devices",
    text: "A dedicated route for healthcare equipment and device opportunities across institutional and trade needs.",
    tags: ["Devices", "Healthcare", "Institutional"],
    icon: "device",
  },
  {
    code: "SUR",
    title: "Surgical Consumables",
    href: "/products/surgical-consumables",
    text: "Essential clinical and surgical-use consumables grouped for fast procurement and partnership enquiries.",
    tags: ["Clinical", "Consumables", "Procurement"],
    icon: "cross",
  },
  {
    code: "DX",
    title: "Diagnostic Kits",
    href: "/products/diagnostic-kits",
    text: "Diagnostic and testing categories structured for clear product discovery where market permissions apply.",
    tags: ["Diagnostics", "Testing", "Healthcare"],
    icon: "diagnostic",
  },
];

const services = [
  {
    number: "01",
    title: "Pharmaceutical Manufacturing",
    href: "/services/pharmaceutical-manufacturing",
    text: "Manufacturing support organised around product requirements, documentation and dependable coordination.",
  },
  {
    number: "02",
    title: "Contract Manufacturing",
    href: "/services/contract-manufacturing",
    text: "A flexible route for partners that need production capability without building their own manufacturing setup.",
  },
  {
    number: "03",
    title: "OEM / Private Label",
    href: "/services/oem-private-label",
    text: "Product and packaging support for businesses building a market-ready range under their own brand.",
  },
  {
    number: "04",
    title: "Third-Party Manufacturing",
    href: "/services/third-party-manufacturing",
    text: "Scalable third-party collaboration for established portfolios, new launches and distribution-led requirements.",
  },
  {
    number: "05",
    title: "Export Services",
    href: "/services/export-services",
    text: "Commercial and supply coordination for international buyers, distributors and cross-border opportunities.",
  },
];

const partnerTypes = [
  {
    number: "01",
    title: "Distributors & Importers",
    text: "A clearer path to categories, commercial resources and export-related enquiries.",
    icon: "network",
  },
  {
    number: "02",
    title: "Private-Label Brands",
    text: "Explore product families alongside OEM, private-label and manufacturing support.",
    icon: "package",
  },
  {
    number: "03",
    title: "Healthcare Buyers",
    text: "Find devices, diagnostics and surgical categories without working through unrelated products.",
    icon: "medical",
  },
  {
    number: "04",
    title: "International Partners",
    text: "Move from portfolio discovery to an export conversation through one focused route.",
    icon: "globe",
  },
];

const whyChoose = [
  {
    number: "01",
    title: "Focused portfolio architecture",
    text: "Products are separated by category so partners can identify the right commercial route quickly.",
    icon: "grid",
  },
  {
    number: "02",
    title: "Responsible communication",
    text: "Healthcare information is presented with measured language instead of exaggerated treatment claims.",
    icon: "shield",
  },
  {
    number: "03",
    title: "Multiple partnership models",
    text: "Manufacturing, contract production, OEM/private label and export support each have a dedicated path.",
    icon: "layers",
  },
  {
    number: "04",
    title: "One enquiry destination",
    text: "A single contact journey helps route product and partnership requirements without unnecessary friction.",
    icon: "route",
  },
];

const process = [
  ["01", "Share your requirement", "Tell us the category, market and type of partnership you are exploring."],
  ["02", "Align the right route", "The enquiry can be directed toward products, manufacturing, private label or export support."],
  ["03", "Review commercial details", "Use the catalog and company profile as supporting resources during the discussion."],
  ["04", "Continue with the team", "Move into the next commercial conversation once the requirement and scope are clear."],
];

const faqs = [
  [
    "What product categories does Medico Pharma cover?",
    "The website is structured around Nutraceuticals, Vitamins & Minerals, Protein Powders, Sports Nutrition, Herbal Products, Ayurvedic Products, Medical Devices, Surgical Consumables and Diagnostic Kits.",
  ],
  [
    "Do you support private-label or third-party manufacturing enquiries?",
    "Yes. The Services section includes Contract Manufacturing, OEM / Private Label and Third-Party Manufacturing so each requirement can have its own focused route.",
  ],
  [
    "Can international buyers enquire about export opportunities?",
    "Yes. Export Services has a dedicated route, and the contact flow can be used by distributors, importers and international partners.",
  ],
  [
    "Where can I find the product catalog and company profile?",
    "Both are grouped under Resources so buyers and partners can reach commercial documents without mixing them into the product navigation.",
  ],
];

function CategoryIcon({ type }: { type: string }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (type === "capsule") return <svg {...common}><rect x="2" y="8.5" width="20" height="7" rx="3.5" /><path d="M12 8.5v7" /></svg>;
  if (type === "spark") return <svg {...common}><path d="M12 2v20M2 12h20" /><circle cx="12" cy="12" r="7" /></svg>;
  if (type === "powder") return <svg {...common}><path d="M7 3h10l1 4-2 14H8L6 7l1-4Z" /><path d="M7 7h10M9 12h6" /></svg>;
  if (type === "bolt") return <svg {...common}><path d="m13 2-8 12h6l-1 8 9-13h-6V2Z" /></svg>;
  if (type === "leaf") return <svg {...common}><path d="M20 4C12 4 6 8 6 14c0 3 2 5 5 5 6 0 9-7 9-15Z" /><path d="M5 20c3-5 7-8 12-11" /></svg>;
  if (type === "herb") return <svg {...common}><path d="M12 21V9" /><path d="M12 12c-5 0-7-3-7-7 5 0 7 3 7 7ZM12 16c5 0 7-3 7-7-5 0-7 3-7 7Z" /></svg>;
  if (type === "device") return <svg {...common}><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M8 7h8M8 11h5M9 17h6" /></svg>;
  if (type === "cross") return <svg {...common}><path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3Z" /></svg>;
  return <svg {...common}><path d="M5 3h14v18H5z" /><path d="M8 8h8M8 12h5M8 16h8" /><circle cx="17" cy="12" r="2.5" /></svg>;
}

function HomeIcon({ type }: { type: string }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (type === "network") return <svg {...common}><circle cx="6" cy="7" r="2.5" /><circle cx="18" cy="7" r="2.5" /><circle cx="12" cy="18" r="2.5" /><path d="m8 8.5 2.7 6.8M16 8.5l-2.7 6.8M8.5 7h7" /></svg>;
  if (type === "package") return <svg {...common}><path d="m4 7 8-4 8 4v10l-8 4-8-4V7Z" /><path d="m4 7 8 4 8-4M12 11v10" /></svg>;
  if (type === "medical") return <svg {...common}><path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3Z" /></svg>;
  if (type === "globe") return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 4 6 4 9s-1 6-4 9c-3-3-4-6-4-9s1-6 4-9Z" /></svg>;
  if (type === "shield") return <svg {...common}><path d="M12 2.8 4.5 6v6c0 4.6 3.2 8.2 7.5 9.2 4.3-1 7.5-4.6 7.5-9.2V6Z" /><path d="m8.8 12 2.2 2.2 4.2-4.4" /></svg>;
  if (type === "layers") return <svg {...common}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></svg>;
  if (type === "route") return <svg {...common}><circle cx="5" cy="5" r="2" /><circle cx="19" cy="19" r="2" /><path d="M7 5h5a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4H9a4 4 0 0 0-4 4v0" /></svg>;
  return <svg {...common}><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg>;
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero hero-home-xl">
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />

        <div className="container hero-grid hero-grid-xl">
          <div className="hero-copy hero-copy-xl">

            <h1 className="hero-anim" style={{ animationDelay: "180ms" }}>
              Healthcare built on <em>clarity, quality</em> and care.
            </h1>
            <p className="hero-anim" style={{ animationDelay: "300ms" }}>
              Medico Pharma brings healthcare product categories, manufacturing support and
              partnership services into one dependable experience for buyers, distributors and brands.
            </p>

            <div className="hero-actions hero-anim" style={{ animationDelay: "400ms" }}>
              <Link href="/products" className="button button-light hero-primary-cta">
                Explore products <span aria-hidden="true">→</span>
              </Link>
              <Link href="/services" className="button button-ghost-light">
                Explore services <span aria-hidden="true">↗</span>
              </Link>
            </div>

            {/* <div className="hero-trust-row hero-anim" style={{ animationDelay: "520ms" }}>
              <span className="pulse-dot" aria-hidden="true" />
              <span>9 product groups · 5 service routes · 2 partner resources</span>
            </div> */}
          </div>

          <div
            className="hero-visual hero-visual-xl hero-anim"
            style={{ animationDelay: "260ms" }}
            role="img"
            aria-label="Medico Pharma portfolio and quality signal illustration"
          >
            <div className="hv-ring hv-ring-a" />
            <div className="hv-ring hv-ring-b" />

            <div className="hv-core hv-core-xl">
              <div className="hv-halo" />
              <div className="hv-halo d2" />
              <div className="hv-halo d3" />
              <div className="hv-cross"><span /><span /></div>
            </div>

            <article className="hv-card hv-card-vitals hero-signal-card">
              <header><span className="live-dot" /> Portfolio signal</header>
              <svg className="trace" viewBox="0 0 200 42" preserveAspectRatio="none">
                <path d="M0 21h48l7-14 8 28 7-22 6 8h20l7-6 7 12 6-6h84" />
              </svg>
              <footer><strong>Structured</strong><span>Partner ready</span></footer>
            </article>

            <article className="hv-card hv-card-batch hero-portfolio-card">
              <span className="batch-code">PORTFOLIO / MP-2026</span>
              <strong>9 product groups</strong>
              <div className="mini-bars" aria-hidden="true"><i /><i /><i /><i /></div>
            </article>

            <div className="hv-capsule hv-capsule-a" aria-hidden="true"><i /><i /></div>
            <div className="hv-capsule hv-capsule-b" aria-hidden="true"><i /><i /></div>
            <div className="hv-tablet hv-tablet-a" aria-hidden="true" />
            <div className="hv-tablet hv-tablet-b" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* MOVING STRIP */}
      <section className="trust-strip" aria-hidden="true">
        <div className="marquee">
          {[0, 1].map((group) => (
            <div className="marquee-group" key={group}>
              {["Nutraceuticals", "Manufacturing", "Private Label", "Medical Devices", "Export", "Diagnostics"].map((word) => (
                <span key={word}>{word} <b /></span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT / BUSINESS OVERVIEW */}
      <section className="section home-overview-section">
        <div className="container home-overview-grid">
          <div data-reveal="left" className="home-overview-copy">
            <span className="eyebrow">About Medico Pharma</span>
            <h2>A healthcare portfolio designed around how partnerships begin.</h2>
            <p>
              Product discovery should feel simple. Medico Pharma separates products, services and
              commercial resources so a buyer can understand the offer and move toward the right conversation quickly.
            </p>
            <Link href="/about" className="text-link">
              Learn more about us <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="home-overview-board" data-reveal="right" style={{ "--reveal-delay": "120ms" } as CSSProperties}>
            <div className="overview-board-head">
              <span>MEDICO / PARTNER MAP</span>
              <i className="live-dot" />
            </div>
            <div className="overview-board-grid">
              <Link href="/products" className="overview-board-cell overview-board-cell-main">
                <span>01</span><strong>Products</strong><small>9 focused categories</small><i>↗</i>
              </Link>
              <Link href="/services" className="overview-board-cell">
                <span>02</span><strong>Services</strong><small>5 partnership routes</small><i>↗</i>
              </Link>
              <Link href="/resources" className="overview-board-cell">
                <span>03</span><strong>Resources</strong><small>Catalog + company profile</small><i>↗</i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS - GREEN BAND */}
      <section className="section home-products-band" id="products">
        <div className="container">
          <div className="catalog-heading-row" data-reveal>
            <div className="section-heading">
              <span className="eyebrow">Product portfolio</span>
              <h2>Nine focused categories. One easier way to browse.</h2>
              <p>
                Each product family gets a dedicated route so buyers can scan the portfolio quickly
                and move into the category that matches their requirement.
              </p>
            </div>
            <Link href="/products" className="text-link catalog-heading-link">
              View all products <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="product-grid product-grid-expanded">
            {products.map((product, index) => (
              <div key={product.title} data-reveal="scale" style={{ "--reveal-delay": `${index * 65}ms` } as CSSProperties}>
                <Link href={product.href} className="product-card product-card-link product-card-home">
                  <div className="product-card-top">
                    <span className="product-code">{product.code}</span>
                    <span className="product-arrow" aria-hidden="true">↗</span>
                  </div>
                  <span className="product-icon" aria-hidden="true"><CategoryIcon type={product.icon} /></span>
                  <h3>{product.title}</h3>
                  <p>{product.text}</p>
                  <ul>{product.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES - DARK GREEN BAND */}
      <section className="section home-services-dark" id="services">
        <div className="home-dark-orb" aria-hidden="true" />
        <div className="container services-layout home-services-layout">
          <div className="services-sticky-copy home-services-copy" data-reveal="left">
            <span className="eyebrow light">Services</span>
            <h2>Support beyond the product catalog.</h2>
            <p>
              Manufacturing, private-label and export requirements are separated into clear service routes,
              making it easier to start with the right conversation.
            </p>
            <Link href="/services" className="button button-light services-button">
              Explore all services <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="service-list home-service-list">
            {services.map((service, index) => (
              <div key={service.title} data-reveal="right" style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}>
                <Link href={service.href} className="service-row service-row-dark">
                  <span className="service-number">{service.number}</span>
                  <div className="service-copy"><h3>{service.title}</h3><p>{service.text}</p></div>
                  <span className="service-arrow" aria-hidden="true">↗</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="section partner-types-section">
        <div className="container">
          <div className="home-centered-heading" data-reveal>
            <span className="eyebrow">Who we work with</span>
            <h2>Different buyers. One clear entry point.</h2>
            <p>
              The home page should immediately help each visitor recognise where they fit and what they should explore next.
            </p>
          </div>

          <div className="partner-types-grid">
            {partnerTypes.map((item, index) => (
              <article
                className="partner-type-card"
                key={item.title}
                data-reveal="scale"
                style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
              >
                <div className="partner-type-top"><span>{item.number}</span><HomeIcon type={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - SOFT GREEN */}
      <section className="section why-choose-section" id="quality">
        <div className="container why-choose-grid">
          <div className="why-choose-intro" data-reveal="left">
            <span className="eyebrow">Why choose us</span>
            <h2>Built for clearer healthcare partnerships.</h2>
            <p>
              The strongest home pages do more than show categories. They explain why the business is easier to work with
              and give visitors confidence about the next step.
            </p>
            <div className="why-choose-statline">
              <div><strong>9</strong><span>product categories</span></div>
              <div><strong>5</strong><span>service routes</span></div>
              <div><strong>2</strong><span>core resources</span></div>
            </div>
          </div>

          <div className="why-choose-cards">
            {whyChoose.map((item, index) => (
              <article
                className="why-choose-card"
                key={item.title}
                data-reveal="right"
                style={{ "--reveal-delay": `${index * 85}ms` } as CSSProperties}
              >
                <div className="why-card-icon"><HomeIcon type={item.icon} /></div>
                <span className="why-card-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section partnership-process-section">
        <div className="container">
          <div className="process-heading-row" data-reveal>
            <div>
              <span className="eyebrow light">Partnership process</span>
              <h2>From first requirement to the right commercial conversation.</h2>
            </div>
            <p>
              Keep the journey simple enough for a first-time buyer to understand in a few seconds.
            </p>
          </div>

          <div className="process-grid">
            {process.map(([number, title, text], index) => (
              <article
                className="process-card"
                key={title}
                data-reveal="scale"
                style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
              >
                <span>{number}</span>
                <div className="process-line" aria-hidden="true"><i /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="section home-resources-section" id="resources">
        <div className="container">
          <div className="home-centered-heading" data-reveal>
            <span className="eyebrow">Resources</span>
            <h2>Commercial information, kept easy to reach.</h2>
            <p>Keep the core documents a buyer is most likely to request one click away from the home page.</p>
          </div>

          <div className="resource-grid home-resource-grid">
            <div data-reveal="left" style={{ "--reveal-delay": "80ms" } as CSSProperties}>
              <Link href="/resources/product-catalog" className="resource-card resource-card-home">
                <div className="resource-card-visual resource-catalog-visual" aria-hidden="true">
                  <span>01</span><i /><i /><i /><b>CATALOG</b>
                </div>
                <div className="resource-card-copy">
                  <span className="resource-kicker">Portfolio resource</span>
                  <h3>Product Catalog</h3>
                  <p>Browse the product families and use the catalog as a central commercial reference.</p>
                  <span className="text-link">Open product catalog <i aria-hidden="true">→</i></span>
                </div>
              </Link>
            </div>

            <div data-reveal="right" style={{ "--reveal-delay": "140ms" } as CSSProperties}>
              <Link href="/resources/company-profile" className="resource-card resource-card-home">
                <div className="resource-card-visual resource-profile-visual" aria-hidden="true">
                  <div className="profile-mark"><span /><i /></div>
                  <b>MEDICO<br />PHARMA</b>
                </div>
                <div className="resource-card-copy">
                  <span className="resource-kicker">Company resource</span>
                  <h3>Company Profile</h3>
                  <p>Present the company, capabilities and partnership structure in one easy-to-share route.</p>
                  <span className="text-link">View company profile <i aria-hidden="true">→</i></span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
  {/* LARGE CONTACT CTA - REFERENCE LAYOUT, PHARMA VISUAL INSTEAD OF PHONE */}
      <section className="home-contact-cta-section">
        <div className="home-contact-grid-bg" aria-hidden="true" />
        <div className="container home-contact-cta-grid">
          <div className="contact-visual-column" data-reveal="left">
            <div className="contact-visual-stage" aria-hidden="true">
              <div className="contact-stage-orbit orbit-a" />
              <div className="contact-stage-orbit orbit-b" />

              <div className="pharma-pack pack-main">
                <span>MEDICO</span>
                <strong>Healthcare<br />Portfolio</strong>
                <i>Partner-ready categories</i>
                <div className="pack-cross"><b /><b /></div>
              </div>

              <div className="pharma-bottle">
                <div className="bottle-cap" />
                <div className="bottle-body">
                  <span>MP</span>
                  <i /><i /><i />
                </div>
              </div>

              <div className="blister-card">
                {Array.from({ length: 8 }).map((_, index) => <i key={index} />)}
              </div>

              <div className="contact-signal-card">
                <span><i className="live-dot" /> PARTNER SIGNAL</span>
                <svg viewBox="0 0 180 38" preserveAspectRatio="none">
                  <path d="M0 20h38l7-13 8 27 7-20 7 7h18l8-6 8 11 6-6h73" />
                </svg>
                <strong>Ready to discuss</strong>
              </div>
            </div>

            <div className="contact-visual-caption">
              <strong>Products, manufacturing, private label and export — one conversation.</strong>
              <p>Share the requirement first. The right route can follow from there.</p>
            </div>
          </div>

          <div className="contact-form-column" data-reveal="right" style={{ "--reveal-delay": "100ms" } as CSSProperties}>
            <span className="contact-section-label"><b>10</b> GET IN TOUCH</span>
            <h2>Discuss your requirement</h2>
            <p>Tell us what you are looking for and move toward the right product or partnership route.</p>

            <form className="home-contact-form" action="/contact" method="get">
              <select name="interest" defaultValue="product" aria-label="Enquiry type">
                <option value="product">Product enquiry</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="private-label">OEM / Private Label</option>
                <option value="export">Export Services</option>
                <option value="other">Other partnership</option>
              </select>
              <input type="text" name="name" placeholder="Name" aria-label="Name" />
              <input type="email" name="email" placeholder="Email" aria-label="Email" />
              <input type="tel" name="phone" placeholder="Phone number" aria-label="Phone number" />
              <textarea name="message" placeholder="Your message" aria-label="Your message" rows={4} />
              <button type="submit">
                Send enquiry <span aria-hidden="true">→</span>
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="section faq-section home-faq-section" id="faq">
        <div className="container faq-grid">
          <div data-reveal="left">
            <div className="section-heading">
              <span className="eyebrow">Frequently asked Questions</span>
              <h2>Useful answers, without the clutter.</h2>
              <p>Answer the questions buyers are likely to ask before they contact the team.</p>
            </div>
          </div>

          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary><span>{question}</span><i aria-hidden="true" /></summary>
                <div className="faq-answer"><p>{answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

    
    </>
  );
}
