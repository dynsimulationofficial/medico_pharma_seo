import Link from "next/link";
import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Medico Pharma",
  description:
    "Terms and conditions governing use of the Medico Pharma website, product information, enquiries, manufacturing, private-label and export discussions.",
};

const LAST_UPDATED = "27 August 2026";

const sections: ReadonlyArray<readonly [string, string]> = [
  ["acceptance", "1. Acceptance of these Terms"],
  ["scope", "2. Scope of the Website"],
  ["healthcare", "3. Healthcare & Regulatory Information"],
  ["use", "4. Permitted Use"],
  ["enquiries", "5. Enquiries, Quotations & Commercial Discussions"],
  ["products", "6. Product Information & Availability"],
  ["manufacturing", "7. Manufacturing, OEM & Private Label"],
  ["export", "8. Export & Destination-Market Compliance"],
  ["pricing", "9. Pricing, Taxes & Payment"],
  ["ip", "10. Intellectual Property"],
  ["confidentiality", "11. Confidential Information"],
  ["third-party", "12. Third-Party Links & Services"],
  ["disclaimers", "13. Disclaimers"],
  ["liability", "14. Limitation of Liability"],
  ["indemnity", "15. Indemnity"],
  ["privacy", "16. Privacy & Personal Data"],
  ["force-majeure", "17. Force Majeure"],
  ["termination", "18. Suspension & Termination"],
  ["changes", "19. Changes to these Terms"],
  ["law", "20. Governing Law & Disputes"],
  ["general", "21. General Provisions"],
  ["contact", "22. Contact"],
];

type SectionProps = {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
  tone?: "default" | "highlight";
  delay?: number;
};

function Section({
  id,
  number,
  title,
  children,
  tone = "default",
  delay = 0,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`termSection ${tone === "highlight" ? "highlightSection" : ""}`}
      style={{ "--delay": `${delay}ms` } as CSSProperties}
    >
      <div className="sectionNumber">{number}</div>
      <div className="sectionBody">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default function TermsAndConditionsPage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="heroOrbOne" aria-hidden="true" />
        <div className="heroOrbTwo" aria-hidden="true" />
        <div className="heroPattern" aria-hidden="true" />

        <div className="container heroInner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Terms & Conditions</span>
          </div>

          <div className="heroGrid">
            <div>
              {/* <p className="eyebrow">Legal / Website Terms</p> */}
              <h1>Terms &amp; Conditions</h1>
              <p className="heroLead">
                These Terms explain the rules for using the Medico Pharma website and for starting
                product, manufacturing, private-label, procurement and export discussions with us.
              </p>
            </div>

            <div className="heroMetaCard">
              <span>Document status</span>
              <strong>Website Terms</strong>
              <dl>
                <div>
                  <dt>Last updated</dt>
                  <dd>{LAST_UPDATED}</dd>
                </div>
                <div>
                  <dt>Applies to</dt>
                  <dd>Website visitors &amp; business enquiries</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="introBand">
        <div className="container introGrid">
          <div className="introIcon" aria-hidden="true">
            <span />
            <i />
          </div>
          <p>
            <strong>Important:</strong> Medico Pharma operates in healthcare-related categories.
            Information on this website is for general business and product-discovery purposes and
            is not medical advice. Product legality, claims, registrations and permitted use can vary
            by jurisdiction and product category.
          </p>
        </div>
      </section>

      <div className="container contentLayout">
        <aside className="sidebar">
          <div className="sidebarCard">
            <p className="sidebarTitle">On this page</p>
            <nav aria-label="Terms and Conditions sections">
              {sections.map(([id, label]) => (
                <a href={`#${id}`} key={id}>
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div className="sidebarNote">
            <span>Need clarification?</span>
            <p>For a commercial or legal query, contact the Medico Pharma team.</p>
            <Link href="/contact">Contact us <b aria-hidden="true">→</b></Link>
          </div>
        </aside>

        <article className="article">
          <div className="articleIntro">
            <p>
              By accessing or using this website, submitting an enquiry, requesting information or
              otherwise interacting with Medico Pharma through this website, you agree to these
              Terms &amp; Conditions (“Terms”). If you do not agree, please do not use the website.
            </p>
          </div>

          <Section id="acceptance" number="01" title="Acceptance of these Terms" delay={40}>
            <p>
              These Terms form the rules for access to and use of the Medico Pharma website. They
              apply to visitors, prospective customers, distributors, importers, healthcare buyers,
              private-label brands, manufacturing partners and other users who interact with the site.
            </p>
            <p>
              If you use the website on behalf of a company or other organisation, you confirm that
              you are authorised to act for that organisation and to accept these Terms on its behalf.
            </p>
          </Section>

          <Section id="scope" number="02" title="Scope of the Website" delay={80}>
            <p>
              The website is designed to provide information about Medico Pharma, product categories,
              manufacturing capabilities, contract manufacturing, OEM/private-label opportunities,
              third-party manufacturing, export support and related commercial resources.
            </p>
            <p>
              Website content does not by itself create a sale, supply commitment, manufacturing
              obligation, agency relationship, distributorship, exclusivity arrangement or other
              binding commercial relationship. A binding transaction arises only when the relevant
              parties execute or otherwise accept the applicable quotation, purchase order, agreement
              or other commercial document.
            </p>
          </Section>

          <Section id="healthcare" number="03" title="Healthcare & Regulatory Information" tone="highlight" delay={120}>
            <p>
              Product descriptions, category pages, ingredient references, specifications, visuals
              and other healthcare-related content are provided for general informational and
              business-to-business purposes. They are not a substitute for professional medical,
              pharmaceutical, nutritional, diagnostic or regulatory advice.
            </p>
            <ul>
              <li>Do not use website content to diagnose, treat, cure or prevent a medical condition.</li>
              <li>Do not rely on website content as instructions for clinical use.</li>
              <li>Regulated products may require licences, registrations, approvals or authorised distribution channels.</li>
              <li>Claims, labels, packaging and permitted marketing language can differ by country and product category.</li>
              <li>Availability of a product on the website does not mean it is approved or lawful for sale in every market.</li>
            </ul>
            <div className="callout">
              <strong>Regulatory responsibility</strong>
              <p>
                Buyers, importers, distributors and brand owners remain responsible for confirming the
                regulatory status, lawful import, registration, labelling, advertising and permitted use
                of products in their destination market unless a signed agreement expressly allocates a
                specific responsibility to Medico Pharma.
              </p>
            </div>
          </Section>

          <Section id="use" number="04" title="Permitted Use" delay={160}>
            <p>You may use the website only for lawful purposes. You must not:</p>
            <ul>
              <li>attempt to gain unauthorised access to the website, servers, accounts or systems;</li>
              <li>introduce malware, malicious code, bots or other disruptive technology;</li>
              <li>scrape, harvest or systematically extract website content without permission;</li>
              <li>impersonate Medico Pharma, an employee, customer, partner or another person;</li>
              <li>submit false, misleading, fraudulent or unlawful enquiries;</li>
              <li>use website content in a way that violates intellectual-property, privacy or other rights; or</li>
              <li>use the website to facilitate unlawful trade in medicines, devices, supplements or other regulated products.</li>
            </ul>
          </Section>

          <Section id="enquiries" number="05" title="Enquiries, Quotations & Commercial Discussions" delay={200}>
            <p>
              Submitting an enquiry does not guarantee acceptance, supply, pricing, territory,
              exclusivity, manufacturing capacity or delivery. We may request additional information
              such as intended market, quantity, product format, specifications, packaging, regulatory
              status and business credentials before progressing an enquiry.
            </p>
            <p>
              Quotations, samples, lead times, minimum order quantities, commercial terms and other
              information may be subject to validity periods, stock, production capacity, supplier
              availability, testing, compliance review and written confirmation.
            </p>
          </Section>

          <Section id="products" number="06" title="Product Information & Availability" delay={240}>
            <p>
              We aim to keep product and service information accurate, but formulations, formats,
              packaging, specifications, availability, ingredients, source materials and technical
              details may change. Images may be illustrative and may not represent final packaging or
              market-specific presentation.
            </p>
            <p>
              Where a product specification, certificate, test report or other technical document is
              important to a transaction, the version confirmed in the applicable commercial or quality
              documentation will take priority over general website content.
            </p>
          </Section>

          <Section id="manufacturing" number="07" title="Manufacturing, OEM & Private Label" delay={280}>
            <p>
              Manufacturing, contract manufacturing, OEM/private-label and third-party manufacturing
              projects are subject to technical feasibility, ingredient and material availability,
              minimum quantities, quality requirements, documentation, regulatory constraints,
              packaging requirements and mutually agreed commercial terms.
            </p>
            <ul>
              <li>Custom development may require separate development, testing or tooling charges.</li>
              <li>Customer-provided artwork, trademarks and claims must be lawful and properly authorised.</li>
              <li>Final specifications and responsibilities should be documented before production.</li>
              <li>Timelines may change where approvals, testing, raw materials or customer inputs are delayed.</li>
            </ul>
          </Section>

          <Section id="export" number="08" title="Export & Destination-Market Compliance" delay={320}>
            <p>
              Export opportunities are subject to applicable trade restrictions, documentation,
              product classification, destination-country requirements, customs, import permissions,
              sanctions, licensing, transport conditions and other legal or commercial requirements.
            </p>
            <p>
              Unless otherwise agreed in writing, the buyer or importer is responsible for confirming
              that it can lawfully import, market, distribute and use the relevant product in the
              destination jurisdiction.
            </p>
          </Section>

          <Section id="pricing" number="09" title="Pricing, Taxes & Payment" delay={360}>
            <p>
              Website content does not constitute a binding price offer unless expressly stated.
              Prices, if shown or communicated, may exclude taxes, duties, freight, insurance,
              certification, testing, packaging changes, registration costs and other charges unless
              expressly included.
            </p>
            <p>
              Payment terms, currency, taxes, delivery terms and credit arrangements will be governed
              by the relevant quotation, invoice, purchase order or signed agreement.
            </p>
          </Section>

          <Section id="ip" number="10" title="Intellectual Property" delay={400}>
            <p>
              Unless otherwise stated, the website and its text, layout, visual design, graphics,
              logos, icons, photographs, illustrations, downloads and other content are owned by or
              licensed to Medico Pharma and are protected by applicable intellectual-property laws.
            </p>
            <p>
              You may view and use the website for legitimate internal business evaluation. You may
              not reproduce, republish, sell, license, modify, distribute or commercially exploit the
              website or its content without prior written permission, except where law expressly
              permits otherwise.
            </p>
          </Section>

          <Section id="confidentiality" number="11" title="Confidential Information" delay={440}>
            <p>
              Information submitted through a general website form should not be treated as protected
              confidential information unless confidentiality has been separately agreed. For sensitive
              formulas, technical documents, pricing models, customer lists, proprietary specifications
              or similar information, contact us first so that an appropriate confidentiality arrangement
              can be considered.
            </p>
          </Section>

          <Section id="third-party" number="12" title="Third-Party Links & Services" delay={480}>
            <p>
              The website may link to third-party websites, platforms, documents or services. Those
              resources are provided for convenience and are governed by their own terms and privacy
              practices. Medico Pharma does not control and is not responsible for third-party content,
              availability, security or practices.
            </p>
          </Section>

          <Section id="disclaimers" number="13" title="Disclaimers" delay={520}>
            <p>
              The website is provided on an “as available” and “as is” basis to the maximum extent
              permitted by law. We do not guarantee that the website will always be uninterrupted,
              error-free, secure or free from harmful components, or that every piece of information
              will always be complete or current.
            </p>
            <p>
              Nothing on the website should be interpreted as a guarantee of commercial success,
              regulatory approval, product registration, therapeutic outcome, market acceptance or
              suitability for a particular purpose.
            </p>
          </Section>

          <Section id="liability" number="14" title="Limitation of Liability" delay={560}>
            <p>
              To the maximum extent permitted by applicable law, Medico Pharma will not be liable for
              indirect, incidental, special, punitive or consequential loss arising from use of, or
              inability to use, the website, including loss of profit, revenue, data, opportunity,
              goodwill or business interruption.
            </p>
            <p>
              Any liability relating to a specific product order, manufacturing project, supply
              arrangement or other commercial transaction will be governed by the agreement or
              commercial terms applicable to that transaction.
            </p>
          </Section>

          <Section id="indemnity" number="15" title="Indemnity" delay={600}>
            <p>
              To the extent permitted by law, you agree to indemnify and hold Medico Pharma harmless
              from claims, losses, liabilities and reasonable costs arising from your unlawful use of
              the website, violation of these Terms, infringement of third-party rights, misuse of
              product information, or unlawful claims, artwork or materials supplied by you.
            </p>
          </Section>

          <Section id="privacy" number="16" title="Privacy & Personal Data" delay={640}>
            <p>
              Personal information submitted through the website is handled in accordance with our
              Privacy Policy and applicable data-protection requirements. By submitting information,
              you confirm that the details are accurate and that you are authorised to provide them.
            </p>
            <p>
              Please review our <Link href="/privacy-policy">Privacy Policy</Link> for more information.
            </p>
          </Section>

          <Section id="force-majeure" number="17" title="Force Majeure" delay={680}>
            <p>
              Medico Pharma will not be responsible for delay or failure caused by events beyond its
              reasonable control, including natural disasters, epidemic or pandemic events, war,
              civil disturbance, government action, trade restrictions, transport disruption, power or
              telecommunications failure, labour disruption, shortage of materials or other comparable events.
            </p>
          </Section>

          <Section id="termination" number="18" title="Suspension & Termination" delay={720}>
            <p>
              We may restrict, suspend or terminate access to all or part of the website where reasonably
              necessary for security, maintenance, legal compliance, misuse prevention or protection of
              Medico Pharma, its users or third parties.
            </p>
          </Section>

          <Section id="changes" number="19" title="Changes to these Terms" delay={760}>
            <p>
              We may update these Terms from time to time to reflect changes in the website, business,
              services, legal requirements or operational practices. The updated version will be posted
              on this page with a revised “Last updated” date. Continued use of the website after an
              update means the revised Terms apply to subsequent use.
            </p>
          </Section>

          <Section id="law" number="20" title="Governing Law & Disputes" delay={800}>
            <p>
              These Terms are governed by the laws applicable to the Medico Pharma entity operating
              this website, without prejudice to any mandatory rights that cannot legally be excluded.
              Any dispute should first be raised with us in good faith so the parties can attempt to
              resolve it commercially.
            </p>
            <p>
              Where a specific quotation, purchase order, manufacturing agreement, distribution
              agreement, export contract or other signed document contains its own governing-law or
              dispute provisions, those provisions will control for that transaction.
            </p>
          </Section>

          <Section id="general" number="21" title="General Provisions" delay={840}>
            <ul>
              <li>If part of these Terms is unenforceable, the remaining provisions continue to apply.</li>
              <li>Failure to enforce a provision immediately does not waive the right to enforce it later.</li>
              <li>You may not assign rights arising from these Terms without our written consent where consent is legally required.</li>
              <li>Headings are for convenience and do not limit interpretation.</li>
              <li>Specific signed commercial terms prevail over conflicting general website terms for that transaction.</li>
            </ul>
          </Section>

          <Section id="contact" number="22" title="Contact" delay={880}>
            <p>
              Questions about these Terms, a website issue or a commercial requirement can be sent
              through our contact page. Please include enough detail for the relevant team to respond.
            </p>
            <Link href="/contact" className="contactButton">
              Contact Medico Pharma <span aria-hidden="true">→</span>
            </Link>
          </Section>

          <div className="legalReviewNote">
            <div className="reviewMark" aria-hidden="true">!</div>
            <div>
              <strong>Before publishing</strong>
              <p>
                This page is a professional website-terms template, not legal advice. Have your legal
                adviser confirm the exact legal entity name, registered office, governing law,
                jurisdiction, product-specific obligations and any terms required by the markets in
                which you sell or manufacture.
              </p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
