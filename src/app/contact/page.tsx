// app/contact/page.tsx  —  CONTACT
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Medico Pharma | Medico Pharma Healthcare",
  description:
    "Contact Medico Pharma for pharmaceutical product enquiries, contract manufacturing, private label, third-party manufacturing, export services and business partnerships.",
alternates: { canonical: "/contact" },
  };

/** hero load-in delay (pure CSS keyframes) */
const h = (ms: number) => ({ "--ct-d": `${ms}ms` }) as CSSProperties;
/** scroll-reveal stagger consumed by the global [data-reveal] CSS */
const rd = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

const PHONE = "+91 98765 43210";
const PHONE_HREF = "tel:+919876543210";
const EMAIL = "info@medico-pharma.com";
const WHATSAPP = "https://wa.me/919876543210";

const heroLines = [
  { text: "Tell us what", em: null },
  { text: "you're ", em: "looking for" },
  { text: "and we'll route it.", em: null },
];

const heroChips = [
  "Product enquiry",
  "Manufacturing",
  "Private label",
  "Export services",
  "Partnership",
];

const channels = [
  {
    code: "01",
    title: "Call the team",
    text: "Speak to us directly about a product, quantity or manufacturing requirement.",
    value: PHONE,
    href: PHONE_HREF,
    action: "Call now",
    icon: "phone",
  },
  {
    code: "02",
    title: "Email an enquiry",
    text: "Send product lists, specifications or documentation for a written response.",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    action: "Send email",
    icon: "mail",
  },
  {
    code: "03",
    title: "Message on WhatsApp",
    text: "Quick questions, catalogue requests and follow-ups on an existing discussion.",
    value: "Chat with us",
    href: WHATSAPP,
    action: "Open chat",
    icon: "chat",
  },
];

const routes = [
  ["Product enquiries", "Portfolio, availability and product information."],
  ["Manufacturing & private label", "Contract, third-party and OEM production requirements."],
  ["Export & distribution", "International sourcing, supply and partnership requests."],
  ["General support", "Company information and other business questions."],
];

const steps = [
  ["01", "You share the requirement", "Product category, market, quantity, packaging and the commercial expectation."],
  ["02", "We identify the route", "Direct sourcing, manufacturing, private label or export support."],
  ["03", "We respond with next steps", "A structured reply with the relevant details and the right person to continue with."],
];

function CtIcon({ type }: { type: string }) {
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

  if (type === "phone")
    return (
      <svg {...common}>
        <path d="M6.2 3.5h3l1.5 3.8-2 1.4a11.5 11.5 0 0 0 5.6 5.6l1.4-2 3.8 1.5v3a2 2 0 0 1-2.2 2A16.8 16.8 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2Z" />
      </svg>
    );
  if (type === "mail")
    return (
      <svg {...common}>
        <rect x="2.8" y="5" width="18.4" height="14" rx="2.4" />
        <path d="m3.4 6.6 8.6 6 8.6-6" />
      </svg>
    );
  if (type === "chat")
    return (
      <svg {...common}>
        <path d="M21 11.6a8 8 0 0 1-11.8 7L4 20l1.5-4.8A8 8 0 1 1 21 11.6Z" />
        <path d="M9 11h.01M12.5 11h.01M16 11h.01" />
      </svg>
    );
  if (type === "pin")
    return (
      <svg {...common}>
        <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.6" />
      </svg>
    );
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.4V12l3 1.8" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="ct-page">
      {/* ==================== HERO ==================== */}
      <section className="ct-hero">
        <div className="ct-hero-orb ct-hero-orb-a" aria-hidden="true" />
        <div className="ct-hero-orb ct-hero-orb-b" aria-hidden="true" />

        <div className="container ct-hero-grid">
          <div className="ct-hero-copy">
            {/* <span className="eyebrow light ct-fade" style={h(60)}>
              Contact us
            </span> */}

            <h1>
              {heroLines.map((line, i) => (
                <span className="ct-line" key={line.text}>
                  <span className="ct-line-i" style={h(200 + i * 120)}>
                    {line.text}
                    {line.em ? <em>{line.em}</em> : null}
                  </span>
                </span>
              ))}
            </h1>

            <p className="ct-hero-lead ct-fade" style={h(620)}>
              Share the product, manufacturing or partnership requirement you are working on. We
              will point it toward the right route and reply with the next step.
            </p>

            <div className="hero-actions ct-fade" style={h(700)}>
              <a href="#enquiry" className="button button-light">
                Send an enquiry <span aria-hidden="true">→</span>
              </a>
              <a href={PHONE_HREF} className="button button-ghost-light">
                {PHONE} <span aria-hidden="true">↗</span>
              </a>
            </div>

            {/* <nav className="crumb ct-fade" style={h(780)} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>Contact</span>
            </nav> */}
          </div>

          {/* Hero visual — direct line console */}
          <div className="ct-hero-visual">
            <div className="ct-ring ct-ring-a" aria-hidden="true" />
            <div className="ct-ring ct-ring-b" aria-hidden="true" />

            <div className="ct-console ct-rise" style={h(420)}>
              <div className="ct-console-head">
                <span>
                  <i className="ct-live" aria-hidden="true" /> Enquiry desk
                </span>
                <b>MP / 2026</b>
              </div>

              <a className="ct-console-row" href={PHONE_HREF}>
                <span className="ct-console-icon" aria-hidden="true">
                  <CtIcon type="phone" />
                </span>
                <div>
                  <small>Call anytime</small>
                  <strong>{PHONE}</strong>
                </div>
                <i aria-hidden="true">↗</i>
              </a>

              <a className="ct-console-row" href={`mailto:${EMAIL}`}>
                <span className="ct-console-icon" aria-hidden="true">
                  <CtIcon type="mail" />
                </span>
                <div>
                  <small>Write to us</small>
                  <strong>{EMAIL}</strong>
                </div>
                <i aria-hidden="true">↗</i>
              </a>

              <div className="ct-console-row is-static">
                <span className="ct-console-icon" aria-hidden="true">
                  <CtIcon type="pin" />
                </span>
                <div>
                  <small>Based in</small>
                  <strong>Mumbai, Maharashtra, India</strong>
                </div>
              </div>

              <div className="ct-console-foot">
                <span className="ct-console-bars" aria-hidden="true">
                  <i /><i /><i /><i /><i />
                </span>
                <b>Enquiries answered on business days</b>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <ul className="ct-chips" aria-label="Enquiry types">
            {heroChips.map((chip, i) => (
              <li key={chip} className="ct-rise" style={h(880 + i * 90)}>
                <a href="#enquiry" className="ct-chip">
                  {chip}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ==================== 01 — CHANNELS ==================== */}
      <section className="section" id="channels">
        <div className="container">
          <div className="ct-head" data-reveal>
            <div>
              <span className="eyebrow">Reach us</span>
              <h2>
                Three direct ways to <em>start the conversation.</em>
              </h2>
            </div>
            <p>
              Use whichever suits the enquiry. Detailed requirements are easiest over email or the
              form; quick questions work well on a call.
            </p>
          </div>

          <div className="ct-channel-grid">
            {channels.map((c, i) => (
              <div key={c.title} data-reveal="scale" style={rd(i * 90)}>
                <a
                  className="ct-channel"
                  href={c.href}
                  {...(c.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span className="ct-channel-sweep" aria-hidden="true" />
                  <div className="ct-channel-top">
                    <span className="ct-channel-glyph">
                      <CtIcon type={c.icon} />
                    </span>
                    <span className="ct-channel-code">MP / {c.code}</span>
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                  <span className="ct-channel-value">{c.value}</span>
                  <span className="ct-channel-foot">
                    {c.action}
                    <i aria-hidden="true">↗</i>
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 02 — ENQUIRY FORM ==================== */}
      <section className="section ct-band" id="enquiry">
        <div className="container ct-form-grid">
          <div className="ct-form-intro" data-reveal="left">
            <span className="eyebrow">Start here</span>
            <h2>One clear route for every enquiry.</h2>
            <p>
              Pick the enquiry type that matches your requirement so the message reaches the right
              desk, and add as much detail as you can about product, quantity and market.
            </p>

            <ul className="ct-route-list">
              {routes.map(([title, text], i) => (
                <li key={title} style={rd(i * 60)}>
                  <span className="ct-route-dot" aria-hidden="true" />
                  <div>
                    <strong>{title}</strong>
                    <small>{text}</small>
                  </div>
                </li>
              ))}
            </ul>

            <div className="ct-hours">
              <span className="ct-hours-icon" aria-hidden="true">
                <CtIcon type="clock" />
              </span>
              <div>
                <strong>Business hours</strong>
                <small>Monday – Saturday · 10:00 – 19:00 IST</small>
              </div>
            </div>
          </div>

          <div data-reveal="right" style={rd(120)}>
            <div className="ct-form-shell">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 03 — WHAT HAPPENS NEXT (dark band) ============ */}
      <section className="section ct-next">
        <div className="container">
          <div className="ct-next-head" data-reveal>
            <div>
              <span className="eyebrow light">After you send it</span>
              <h2>
                From enquiry to the
                <br />
                <em>right conversation.</em>
              </h2>
            </div>
            <p>
              Three steps, no unnecessary back and forth — clear enough for a first-time buyer to
              follow.
            </p>
          </div>

          <div className="ct-step-grid" data-reveal="fade">
            <span className="ct-step-track" aria-hidden="true">
              <i />
            </span>

            {steps.map(([n, title, text]) => (
              <article className="ct-step" key={title}>
                <span className="ct-step-node">{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 04 — QUICK LINKS ==================== */}
      <section className="section ct-links-section">
        <div className="container ct-links">
          <div data-reveal="left">
            <Link href="/products" className="ct-link-card">
              <span className="ct-link-code">01 / PRODUCTS</span>
              <h3>Browse the complete product portfolio.</h3>
              <p>Tablets, capsules, injections, topicals, nutrition and specialty ranges.</p>
              <span className="ct-link-foot">
                View products <i aria-hidden="true">→</i>
              </span>
            </Link>
          </div>

          <div data-reveal="right" style={rd(120)}>
            <Link href="/services" className="ct-link-card is-dark">
              <span className="ct-link-orb" aria-hidden="true" />
              <span className="ct-link-code">02 / SERVICES</span>
              <h3>Manufacturing, private label and export routes.</h3>
              <p>Each requirement has its own dedicated service path.</p>
              <span className="ct-link-foot">
                View services <i aria-hidden="true">↗</i>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
