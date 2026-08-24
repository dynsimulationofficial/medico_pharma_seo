import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Medico Pharma's approach to pharmaceutical quality, clear communication, and dependable partnerships.",
};

const values = [
  ["01", "Clarity", "We make product and company information easier to navigate, understand, and act on."],
  ["02", "Responsibility", "Healthcare communication should be measured, accurate, and built around trust."],
  ["03", "Consistency", "A strong pharmaceutical brand should feel dependable at every digital touchpoint."],
  ["04", "Partnership", "The best experiences help customers, distributors, and partners move forward with confidence."],
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow light">About Medico Pharma</span>
            <h1>Trust is built in the details.</h1>
          </div>
          <p>
            Medico Pharma is presented as a modern pharmaceutical brand focused on clear information,
            quality-led communication, and long-term healthcare partnerships.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-story-grid">
          <div className="story-number">01</div>
          <div>
            <SectionHeading
              eyebrow="Our approach"
              title="A straightforward story, designed for confidence."
              description="This website foundation keeps the company story concise and credible. As your verified corporate information becomes available, this page can be expanded with your actual history, certifications, manufacturing details, leadership, and market presence."
            />
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading eyebrow="What guides us" title="Four principles behind the experience." align="center" />
          <div className="values-grid">
            {values.map(([number, title, text]) => (
              <article className="value-card" key={title}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-panel-grid">
          <article className="dark-panel">
            <span className="eyebrow light">For healthcare partners</span>
            <h2>A professional destination for product discovery and business enquiries.</h2>
            <p>Keep key routes short, visible, and easy to use from any device.</p>
          </article>
          <article className="light-panel">
            <span className="eyebrow">Built for growth</span>
            <h2>Ready for richer company information when you are.</h2>
            <p>Add verified milestones, facilities, compliance information, certifications, and leadership content without redesigning the site.</p>
            <Link href="/contact" className="text-link">Talk to our team <span>→</span></Link>
          </article>
        </div>
      </section>
    </>
  );
}
