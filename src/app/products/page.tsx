import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore Medico Pharma product categories across solid oral, liquid, topical, OTC, specialty, and partner-focused portfolios.",
};

const categories = [
  { index: "01", title: "Tablets & Capsules", tag: "Solid oral", text: "A flexible category for tablet and capsule formulations across general therapeutic segments.", chips: ["Tablets", "Capsules", "Oral dosage"] },
  { index: "02", title: "Oral Liquids", tag: "Liquid dosage", text: "A structured home for syrups, suspensions, drops, and related oral liquid formats.", chips: ["Syrups", "Suspensions", "Drops"] },
  { index: "03", title: "Topical Care", tag: "External use", text: "A dedicated category for creams, gels, lotions, ointments, and other topical formats.", chips: ["Creams", "Gels", "Lotions"] },
  { index: "04", title: "Wellness & OTC", tag: "Consumer health", text: "Easy-to-understand presentation for non-prescription and everyday consumer health categories.", chips: ["OTC", "Wellness", "Consumer care"] },
  { index: "05", title: "Hospital & Specialty", tag: "Institutional", text: "A scalable section for hospital, institutional, and specialist-led product portfolios.", chips: ["Hospital", "Specialty", "Institutional"] },
  { index: "06", title: "Partner Portfolio", tag: "Business", text: "A future-ready category for contract, distribution, export, or private-label opportunities where applicable.", chips: ["Distribution", "Export", "Partnerships"] },
];

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero products-hero">
        <div className="container page-hero-grid">
          <div><span className="eyebrow light">Our products</span><h1>A portfolio structure built to grow with you.</h1></div>
          <p>Explore the current category framework. Verified product names, compositions, pack sizes, and regulatory information can be added as dedicated SEO-ready product pages.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Product categories" title="Simple to browse. Easy to expand." description="Each category is designed as a clear starting point for a larger catalogue." />
          <div className="category-list">
            {categories.map((category) => (
              <article className="category-row" key={category.title}>
                <div className="category-index">{category.index}</div>
                <div className="category-content"><span>{category.tag}</span><h2>{category.title}</h2><p>{category.text}</p></div>
                <div className="category-chips">{category.chips.map((chip) => <span key={chip}>{chip}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container product-note-grid">
          <div><span className="eyebrow">Important product information</span><h2>Keep medical information verified and specific.</h2></div>
          <div><p>Before launch, replace placeholder category copy with your approved product catalogue and regulatory information. Avoid publishing unverified efficacy, indication, dosage, or safety claims.</p><Link href="/contact" className="button">Send a product enquiry <span>→</span></Link></div>
        </div>
      </section>
    </>
  );
}
