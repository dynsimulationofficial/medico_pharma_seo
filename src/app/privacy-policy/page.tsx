import Link from "next/link";
import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";

export const metadata: Metadata = {
  title: "Privacy Policy | Medico Pharma",
  description:
    "Privacy policy explaining how Medico Pharma may collect, use, store and share personal information when you visit the website or contact us.",
};

const LAST_UPDATED = "27 August 2026";

const sections: ReadonlyArray<readonly [string, string]> = [
  ["overview", "1. Overview"],
  ["scope", "2. Scope of this Policy"],
  ["data-we-collect", "3. Personal Data We May Collect"],
  ["how-we-collect", "4. How We Collect Personal Data"],
  ["purposes", "5. How We Use Personal Data"],
  ["legal-bases", "6. Legal Bases & Permissions"],
  ["business-enquiries", "7. Business & Commercial Enquiries"],
  ["cookies", "8. Cookies & Similar Technologies"],
  ["sharing", "9. Sharing & Service Providers"],
  ["international", "10. International Data Transfers"],
  ["retention", "11. Data Retention"],
  ["security", "12. Data Security"],
  ["rights", "13. Your Privacy Rights"],
  ["marketing", "14. Marketing Communications"],
  ["children", "15. Children’s Privacy"],
  ["third-party", "16. Third-Party Links"],
  ["regulated", "17. Sensitive & Regulated Information"],
  ["changes", "18. Changes to this Policy"],
  ["contact", "19. Contact & Privacy Requests"],
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

export default function PrivacyPolicyPage() {
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
            <span>Privacy Policy</span>
          </div>

          <div className="heroGrid">
            <div>
              <h1>Privacy Policy</h1>
              <p className="heroLead">
                This Privacy Policy explains how Medico Pharma may collect, use,
                store, disclose and protect personal information when you visit
                our website, submit an enquiry or communicate with us.
              </p>
            </div>

            <div className="heroMetaCard">
              <span>Document status</span>
              <strong>Privacy Policy</strong>
              <dl>
                <div>
                  <dt>Last updated</dt>
                  <dd>{LAST_UPDATED}</dd>
                </div>
                <div>
                  <dt>Applies to</dt>
                  <dd>Website visitors &amp; business contacts</dd>
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
            <strong>Privacy first:</strong> We aim to collect only information
            that is reasonably needed to operate the website, respond to
            enquiries, manage business relationships, protect our systems and
            comply with applicable legal obligations.
          </p>
        </div>
      </section>

      <div className="container contentLayout">
        <aside className="sidebar">
          <div className="sidebarCard">
            <p className="sidebarTitle">On this page</p>
            <nav aria-label="Privacy Policy sections">
              {sections.map(([id, label]) => (
                <a href={`#${id}`} key={id}>
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div className="sidebarNote">
            <span>Privacy question?</span>
            <p>
              You can contact Medico Pharma to ask about personal information or
              submit a privacy-related request.
            </p>
            <Link href="/contact">
              Contact us <b aria-hidden="true">→</b>
            </Link>
          </div>
        </aside>

        <article className="article">
          <div className="articleIntro">
            <p>
              This Privacy Policy describes Medico Pharma’s approach to personal
              data collected through this website and related business
              communications. The exact rights and obligations that apply may
              depend on your location, the nature of the interaction and
              applicable data-protection law.
            </p>
          </div>

          <Section id="overview" number="01" title="Overview" delay={40}>
            <p>
              “Personal data” or “personal information” means information that
              identifies, relates to, describes or can reasonably be linked to an
              identifiable person, depending on the definition used by applicable
              law.
            </p>
            <p>
              This Policy applies to information received through website forms,
              direct communications generated from the website, business
              enquiries and technical information associated with use of the
              website.
            </p>
          </Section>

          <Section id="scope" number="02" title="Scope of this Policy" delay={80}>
            <p>
              This Policy is intended for website visitors, prospective
              customers, distributors, importers, healthcare buyers, suppliers,
              private-label brands, manufacturing partners, professional
              contacts and other individuals who communicate with Medico Pharma
              through the website.
            </p>
            <p>
              It does not automatically govern employee records, recruitment
              records, patient records, clinical data or information processed
              under a separate written agreement where a different privacy notice
              or contractual framework applies.
            </p>
          </Section>

          <Section
            id="data-we-collect"
            number="03"
            title="Personal Data We May Collect"
            tone="highlight"
            delay={120}
          >
            <p>
              Depending on how you use the website or communicate with us, we may
              collect the following categories of information:
            </p>
            <ul>
              <li>
                <strong>Identity and contact information:</strong> name, business
                email address, telephone number, job title and organisation.
              </li>
              <li>
                <strong>Business information:</strong> company name, country,
                market, business type, product interests and commercial role.
              </li>
              <li>
                <strong>Enquiry information:</strong> messages, requested
                products, manufacturing requirements, quantities, packaging
                needs, destination markets and related details you choose to
                provide.
              </li>
              <li>
                <strong>Communication information:</strong> correspondence,
                responses, meeting details and records of business discussions
                where reasonably necessary.
              </li>
              <li>
                <strong>Technical information:</strong> IP address, browser type,
                device information, approximate location derived from technical
                data, referring pages, access times and website activity where
                collected by our website infrastructure or enabled tools.
              </li>
              <li>
                <strong>Preference information:</strong> communication choices,
                consent records and cookie preferences where applicable.
              </li>
            </ul>

            <div className="callout">
              <strong>Please avoid unnecessary sensitive information</strong>
              <p>
                Do not submit medical records, patient information, government
                identifiers, payment-card information, passwords or other
                sensitive personal data through a general website enquiry form
                unless we specifically request it through an appropriate secure
                process.
              </p>
            </div>
          </Section>

          <Section
            id="how-we-collect"
            number="04"
            title="How We Collect Personal Data"
            delay={160}
          >
            <p>We may collect personal information:</p>
            <ul>
              <li>directly from you when you submit a form or contact us;</li>
              <li>
                when a company representative communicates with us on your
                organisation’s behalf;
              </li>
              <li>
                automatically through website infrastructure, server logs,
                security tools, cookies or similar technologies where enabled;
              </li>
              <li>
                from public business sources where reasonably necessary for
                legitimate B2B communications; and
              </li>
              <li>
                from service providers or business partners where they are
                permitted to provide the information to us.
              </li>
            </ul>
          </Section>

          <Section id="purposes" number="05" title="How We Use Personal Data" delay={200}>
            <p>We may use personal data to:</p>
            <ul>
              <li>respond to enquiries and requests for information;</li>
              <li>
                evaluate product, manufacturing, private-label, distribution or
                export opportunities;
              </li>
              <li>
                communicate about quotations, samples, documentation, meetings
                and commercial discussions;
              </li>
              <li>operate, maintain and improve the website;</li>
              <li>
                protect the website, users, systems and business from fraud,
                misuse, cyber threats and other security risks;
              </li>
              <li>
                maintain business records and manage professional relationships;
              </li>
              <li>
                comply with legal, regulatory, tax, accounting, trade,
                sanctions-screening or other applicable obligations; and
              </li>
              <li>
                establish, exercise or defend legal rights and contractual
                claims.
              </li>
            </ul>
          </Section>

          <Section
            id="legal-bases"
            number="06"
            title="Legal Bases & Permissions"
            delay={240}
          >
            <p>
              Where applicable law requires a legal basis for processing, we may
              rely on one or more grounds permitted by that law, such as:
            </p>
            <ul>
              <li>your consent where consent is required and obtained;</li>
              <li>
                steps requested by you before entering into a contract or
                performance of a contract;
              </li>
              <li>compliance with a legal obligation;</li>
              <li>
                legitimate business interests, where those interests are not
                overridden by applicable privacy rights; or
              </li>
              <li>another lawful basis recognised by the applicable law.</li>
            </ul>
            <p>
              The precise legal basis can vary depending on the country,
              interaction and type of information involved.
            </p>
          </Section>

          <Section
            id="business-enquiries"
            number="07"
            title="Business & Commercial Enquiries"
            delay={280}
          >
            <p>
              When you contact us about products, manufacturing, private label,
              distribution, procurement or export opportunities, we may use the
              information you provide to assess the enquiry, route it to the
              appropriate team, request clarification and maintain a record of
              the discussion.
            </p>
            <p>
              Information contained in a commercial enquiry may also be used to
              perform reasonable due diligence, confirm business credentials,
              assess destination-market requirements and prepare quotations or
              other commercial documents.
            </p>
          </Section>

          <Section
            id="cookies"
            number="08"
            title="Cookies & Similar Technologies"
            delay={320}
          >
            <p>
              The website may use cookies or similar technologies for essential
              website operation, security, preference storage, performance
              measurement or analytics where those tools are enabled.
            </p>
            <p>
              Some cookies may be necessary for the website to function. Other
              cookies may require a choice or consent depending on the
              technology used and the law applicable to the visitor.
            </p>
            <p>
              You may also be able to control cookies through your browser
              settings. Blocking certain technologies may affect website
              functionality.
            </p>
          </Section>

          <Section
            id="sharing"
            number="09"
            title="Sharing & Service Providers"
            delay={360}
          >
            <p>
              We may disclose personal information where reasonably necessary to:
            </p>
            <ul>
              <li>
                website hosting, infrastructure, security, email, communications
                or technology providers acting for us;
              </li>
              <li>
                professional advisers such as legal, accounting or compliance
                advisers;
              </li>
              <li>
                logistics, manufacturing, testing, documentation or other
                commercial partners where necessary for a request and legally
                permitted;
              </li>
              <li>
                regulators, courts, law-enforcement bodies or other authorities
                where disclosure is required or permitted by law;
              </li>
              <li>
                parties involved in a corporate transaction, restructuring or
                transfer of business, subject to appropriate safeguards where
                required; or
              </li>
              <li>
                another party where you direct us to share information or provide
                valid consent.
              </li>
            </ul>
            <p>
              Service providers should receive only the information reasonably
              necessary for the relevant service and should process it subject to
              appropriate contractual or legal obligations where required.
            </p>
          </Section>

          <Section
            id="international"
            number="10"
            title="International Data Transfers"
            delay={400}
          >
            <p>
              Because Medico Pharma may interact with international buyers,
              suppliers, service providers and technology platforms, personal
              information may be processed in countries other than the country in
              which it was originally collected.
            </p>
            <p>
              Where applicable law restricts international transfers, we will
              seek to use a lawful transfer mechanism or other appropriate
              safeguard required for the relevant transfer.
            </p>
          </Section>

          <Section id="retention" number="11" title="Data Retention" delay={440}>
            <p>
              We retain personal information only for as long as reasonably
              necessary for the purposes described in this Policy, including to
              respond to enquiries, manage business relationships, comply with
              legal or accounting obligations, resolve disputes and protect legal
              rights.
            </p>
            <p>
              Retention periods may vary according to the type of information,
              whether a commercial relationship develops, contractual
              requirements, legal limitation periods and applicable regulatory
              obligations.
            </p>
          </Section>

          <Section id="security" number="12" title="Data Security" delay={480}>
            <p>
              We use reasonable administrative, organisational and technical
              measures intended to protect personal data against unauthorised
              access, loss, misuse, alteration or disclosure.
            </p>
            <p>
              No internet transmission, email system or electronic storage method
              can be guaranteed to be completely secure. You should therefore
              avoid sending highly sensitive information through ordinary website
              forms or unsecured email.
            </p>
          </Section>

          <Section id="rights" number="13" title="Your Privacy Rights" delay={520}>
            <p>
              Depending on the law that applies to you, you may have rights in
              relation to your personal information, which may include the right
              to:
            </p>
            <ul>
              <li>request access to personal data we hold about you;</li>
              <li>request correction of inaccurate or incomplete information;</li>
              <li>request deletion in circumstances recognised by law;</li>
              <li>object to or restrict certain processing;</li>
              <li>
                withdraw consent where processing is based on consent, without
                affecting earlier lawful processing;
              </li>
              <li>
                receive certain information in a portable form where applicable;
              </li>
              <li>
                opt out of certain communications or processing where a right to
                opt out exists; and
              </li>
              <li>
                complain to an appropriate data-protection or supervisory
                authority where that right is available.
              </li>
            </ul>
            <p>
              We may need to verify your identity and request enough information
              to locate the relevant records before completing a privacy request.
              Some rights are subject to legal exceptions.
            </p>
          </Section>

          <Section
            id="marketing"
            number="14"
            title="Marketing Communications"
            delay={560}
          >
            <p>
              Where permitted, we may communicate with business contacts about
              products, services, industry opportunities or related Medico Pharma
              information that may be relevant to the professional relationship.
            </p>
            <p>
              Where consent or an opt-in is legally required, we will seek it
              before sending the relevant communication. You may ask us to stop
              non-essential promotional communications at any time. Service,
              enquiry or transaction-related messages may still be sent where
              necessary.
            </p>
          </Section>

          <Section id="children" number="15" title="Children’s Privacy" delay={600}>
            <p>
              This website is intended for general business and professional use
              and is not directed to children. We do not knowingly request
              personal information from children through business enquiry forms.
            </p>
            <p>
              If you believe a child has submitted personal information through
              the website, please contact us so the matter can be reviewed and
              appropriate action taken.
            </p>
          </Section>

          <Section
            id="third-party"
            number="16"
            title="Third-Party Links"
            delay={640}
          >
            <p>
              The website may contain links to third-party websites, social
              networks, platforms or services. Their privacy practices are
              controlled by those third parties and are not governed by this
              Privacy Policy.
            </p>
            <p>
              Review the privacy notices of third-party services before providing
              personal information to them.
            </p>
          </Section>

          <Section
            id="regulated"
            number="17"
            title="Sensitive & Regulated Information"
            tone="highlight"
            delay={680}
          >
            <p>
              Medico Pharma operates in healthcare-related sectors, but the
              general website is not intended to collect patient files, medical
              histories or other sensitive health information.
            </p>
            <ul>
              <li>
                Do not submit patient-identifiable information through a general
                product or business enquiry.
              </li>
              <li>
                Do not submit passwords, authentication codes or confidential
                account credentials.
              </li>
              <li>
                Do not submit payment-card details unless an authorised payment
                process specifically requests them.
              </li>
              <li>
                If sensitive or regulated information is required for a specific
                business process, use the secure process communicated by the
                relevant Medico Pharma representative.
              </li>
            </ul>
          </Section>

          <Section
            id="changes"
            number="18"
            title="Changes to this Policy"
            delay={720}
          >
            <p>
              We may update this Privacy Policy to reflect changes in the
              website, technology, business operations, data practices or legal
              requirements. The revised policy will be posted on this page with
              an updated “Last updated” date.
            </p>
            <p>
              Where applicable law requires additional notice or consent for a
              material change, we will take the steps required by that law.
            </p>
          </Section>

          <Section
            id="contact"
            number="19"
            title="Contact & Privacy Requests"
            delay={760}
          >
            <p>
              To ask a privacy question, request information about personal data
              or exercise a privacy right that applies to you, contact Medico
              Pharma through the contact page and clearly state that your request
              relates to privacy or personal data.
            </p>
            <p>
              Please provide enough information for us to identify the relevant
              interaction without including unnecessary sensitive information.
            </p>

            <div className="callout">
              <strong>Related legal information</strong>
              <p>
                Use of the website is also subject to our{" "}
                <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>.
              </p>
            </div>

            <Link href="/contact" className="contactButton">
              Submit a privacy request <span aria-hidden="true">→</span>
            </Link>
          </Section>
        </article>
      </div>
    </main>
  );
}
