// app/about/page.tsx  —  ABOUT US
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn how Medico Pharma approaches pharmaceutical quality, clear communication, and dependable healthcare partnerships.",
};

const values = [
  ["CLR", "Clarity", "Product and company information should be easy to navigate, understand, and act on."],
  ["RSP", "Responsibility", "Healthcare communication stays measured and accurate, because trust is the product."],
  ["CNS", "Consistency", "A pharmaceutical brand should feel dependable at every digital touchpoint."],
  ["PTN", "Partnership", "The best experiences help customers, distributors, and partners move forward with confidence."],
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow light hero-anim" style={{ animationDelay: "80ms" }}>
              About Medico Pharma
            </span>
            <h1 className="hero-anim" style={{ animationDelay: "170ms" }}>
              Trust is built in the <em>details</em>.
            </h1>
            <nav className="crumb hero-anim" style={{ animationDelay: "320ms" }} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>About</span>
            </nav>
          </div>
          <p className="hero-anim" style={{ animationDelay: "260ms" }}>
            Medico Pharma is presented as a modern pharmaceutical brand focused on clear information,
            quality-led communication, and long-term healthcare partnerships.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-story-grid">
          <div data-reveal="fade">
            <p className="story-number">SEC / 01</p>
          </div>
          <div data-reveal style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
            <div className="section-heading">
              <span className="eyebrow">Our approach</span>
              <h2>A straightforward story, designed for confidence.</h2>
              <p>
                This foundation keeps the company story concise and credible. As your verified
                corporate information becomes available, the page expands with real history,
                certifications, manufacturing detail, leadership, and market presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div data-reveal>
            <div className="section-heading align-center">
              <span className="eyebrow">What guides us</span>
              <h2>Four principles behind the experience.</h2>
            </div>
          </div>

          <div className="values-grid">
            {values.map(([code, title, text], index) => (
              <div
                key={title}
                data-reveal="scale"
                style={{ "--reveal-delay": `${index * 90}ms` } as React.CSSProperties}
              >
                <article className="value-card">
                  <span>{code}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-panel-grid">
          <div data-reveal="left">
            <article className="dark-panel">
              <span className="eyebrow light">For healthcare partners</span>
              <h2>A professional destination for product discovery and business enquiries.</h2>
              <p>Key routes stay short, visible, and usable from any device.</p>
            </article>
          </div>

          <div data-reveal="right" style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
            <article className="light-panel">
              <span className="eyebrow">Built for growth</span>
              <h2>Ready for richer company information when you are.</h2>
              <p>
                Add verified milestones, facilities, compliance information, certifications, and
                leadership content without redesigning the site.
              </p>
              <Link href="/contact" className="text-link">
                Talk to our team <span aria-hidden="true">→</span>
              </Link>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
