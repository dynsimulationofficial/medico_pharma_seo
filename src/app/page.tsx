import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const products = [
  { number: "01", title: "Tablets & Capsules", text: "A flexible portfolio presentation for solid oral dosage categories and everyday therapeutic needs." },
  { number: "02", title: "Oral Liquids", text: "Clear product organisation for syrups, suspensions, and other liquid formulation categories." },
  { number: "03", title: "Topical Care", text: "A dedicated space for creams, gels, lotions, and dermatology-focused product lines." },
  { number: "04", title: "Wellness & OTC", text: "Consumer healthcare and over-the-counter categories presented with accessible, responsible information." },
];

const capabilities = [
  ["Portfolio clarity", "Organised product information designed to help partners navigate categories quickly."],
  ["Quality-first communication", "A professional digital presence that puts responsible healthcare communication first."],
  ["Partner support", "A clear path for distributors, institutions, and business partners to begin an enquiry."],
];

const faqs = [
  ["What information can I find on the products page?", "The products page groups the portfolio into easy-to-scan categories. Specific SKUs, compositions, pack sizes, and regulatory information can be added when your final product data is ready."],
  ["Can I enquire about distribution or partnerships?", "Yes. Use the contact page and select the relevant enquiry type so the request can be routed to the appropriate team."],
  ["Is the website ready for future SEO expansion?", "Yes. The structure uses semantic pages, reusable metadata, clean heading hierarchy, and dedicated routes that can later expand into individual product or knowledge pages."],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow light">Trusted pharmaceutical solutions</span>
            <h1>
              Healthcare built on <em>clarity, quality</em> and care.
            </h1>
            <p>
              Medico Pharma brings pharmaceutical products and business support together in a modern,
              dependable experience for healthcare partners and customers.
            </p>
            <div className="hero-actions">
              <Link href="/products" className="button button-light">
                Explore products <span aria-hidden="true">→</span>
              </Link>
              <Link href="/contact" className="button button-ghost-light">
                Talk to our team
              </Link>
            </div>
            <div className="hero-trust-row">
              <span className="pulse-dot" />
              <span>Built for a quality-focused pharma presence</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Abstract pharmaceutical product illustration">
            <div className="visual-card visual-card-top">
              <span className="visual-mini-label">Portfolio</span>
              <strong>Product categories</strong>
              <div className="mini-bars"><i /><i /><i /></div>
            </div>
            <div className="medicine-stage">
              <div className="capsule capsule-one"><span /></div>
              <div className="capsule capsule-two"><span /></div>
              <div className="tablet tablet-one" />
              <div className="tablet tablet-two" />
              <div className="bottle">
                <div className="bottle-cap" />
                <div className="bottle-label"><span>MEDICO</span><strong>Care</strong></div>
              </div>
            </div>
            <div className="visual-card visual-card-bottom">
              <span className="quality-icon">✓</span>
              <div><strong>Quality-led</strong><span>Responsible presentation</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-strip-inner">
          <span>PHARMACEUTICALS</span>
          <span className="trust-divider" />
          <span>HEALTHCARE</span>
          <span className="trust-divider" />
          <span>QUALITY</span>
          <span className="trust-divider" />
          <span>PARTNERSHIPS</span>
        </div>
      </section>

      <section className="section about-preview">
        <div className="container split-grid">
          <div className="about-art">
            <div className="about-art-inner">
              <span className="about-pill pill-a">Reliable</span>
              <span className="about-pill pill-b">Responsible</span>
              <div className="about-cross"><span /><span /></div>
              <p>Care in every detail.</p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="About Medico Pharma"
              title="A stronger digital foundation for a trusted healthcare brand."
              description="The website is designed to communicate the essentials quickly: who you are, what you offer, how you approach quality, and how partners can reach you."
            />
            <div className="feature-list">
              <div><span>01</span><p><strong>Clear positioning</strong>Professional messaging without unnecessary complexity.</p></div>
              <div><span>02</span><p><strong>Structured portfolio</strong>Product categories that can scale as your catalogue grows.</p></div>
              <div><span>03</span><p><strong>Easy enquiry path</strong>Strong calls-to-action placed where users naturally need them.</p></div>
            </div>
            <Link href="/about" className="text-link">Learn more about us <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="capabilities">
        <div className="container">
          <SectionHeading
            eyebrow="Product portfolio"
            title="Organised around the way people search."
            description="A clean category system keeps the experience simple today and gives the website room to grow tomorrow."
          />
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.title}>
                <div className="product-card-top"><span>{product.number}</span><span className="product-arrow">↗</span></div>
                <div className="product-symbol" aria-hidden="true"><i /><i /></div>
                <h3>{product.title}</h3>
                <p>{product.text}</p>
              </article>
            ))}
          </div>
          <div className="section-action"><Link href="/products" className="button">View all product categories <span>→</span></Link></div>
        </div>
      </section>

      <section className="section quality-section" id="quality">
        <div className="container quality-grid">
          <div>
            <SectionHeading
              eyebrow="Why Medico Pharma"
              title="Built to make confidence visible."
              description="Healthcare websites need more than polished visuals. The experience should make information easy to understand, easy to verify, and easy to act on."
            />
          </div>
          <div className="capability-stack">
            {capabilities.map(([title, text], index) => (
              <article key={title} className="capability-item">
                <span>0{index + 1}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container stats-card">
          <div className="stats-intro">
            <span className="eyebrow light">Designed to scale</span>
            <h2>One website. A clear path from discovery to enquiry.</h2>
          </div>
          <div className="stats-grid">
            <div><strong>4</strong><span>core pages ready</span></div>
            <div><strong>100%</strong><span>responsive layout</span></div>
            <div><strong>SEO</strong><span>friendly structure</span></div>
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container faq-grid">
          <SectionHeading eyebrow="Frequently asked" title="Useful answers, without the clutter." />
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary><span>{question}</span><i>+</i></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container final-cta">
          <div><span className="eyebrow light">Let&apos;s connect</span><h2>Ready to discuss your pharmaceutical requirements?</h2></div>
          <Link href="/contact" className="button button-light">Start an enquiry <span>→</span></Link>
        </div>
      </section>
    </>
  );
}
