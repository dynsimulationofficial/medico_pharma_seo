// components/ContactForm.tsx
"use client";

import { useState } from "react";

type Values = {
  name: string;
  email: string;
  company: string;
  phone: string;
  enquiry: string;
  message: string;
};

type Errors = Partial<Record<keyof Values, string>>;

const empty: Values = {
  name: "",
  email: "",
  company: "",
  phone: "",
  enquiry: "",
  message: "",
};

const enquiryTypes = [
  "Product information",
  "Distribution partnership",
  "Institutional supply",
  "Export enquiry",
  "General question",
];

function validate(values: Values): Errors {
  const errors: Errors = {};

  if (!values.name.trim()) errors.name = "Enter your full name.";
  if (!values.email.trim()) {
    errors.email = "Enter an email address we can reply to.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) {
    errors.email = "That email address looks incomplete.";
  }
  if (values.phone && !/^[\d+\s()-]{7,18}$/.test(values.phone)) {
    errors.phone = "Use digits, spaces, +, - or brackets only.";
  }
  if (!values.enquiry) errors.enquiry = "Choose the type of enquiry.";
  if (values.message.trim().length < 20) {
    errors.message = "Add at least 20 characters so we can route this correctly.";
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const update = (key: keyof Values) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setValues((previous) => ({ ...previous, [key]: event.target.value }));
    // Clear the message as soon as the person starts fixing the field
    if (errors[key]) setErrors((previous) => ({ ...previous, [key]: undefined }));
  };

  const handleSubmit = async () => {
    const found = validate(values);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      const first = document.querySelector<HTMLElement>(".has-error input, .has-error select, .has-error textarea");
      first?.focus();
      return;
    }

    setStatus("sending");

    // Connect this to your API route, company inbox, or CRM before launch.
    // Example: await fetch("/api/enquiry", { method: "POST", body: JSON.stringify(values) });
    await new Promise((resolve) => setTimeout(resolve, 1100));

    setStatus("sent");
    setValues(empty);
  };

  if (status === "sent") {
    return (
      <section className="contact-form">
        <div className="form-success">
          <span className="tick" aria-hidden="true">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </span>
          <h2>Enquiry received</h2>
          <p>Our team will review your requirement and reply to the email address you shared.</p>
          <button type="button" className="button" onClick={() => setStatus("idle")}>
            Send another enquiry <span aria-hidden="true">→</span>
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-form">
      <header>
        <span className="eyebrow">Enquiry form</span>
        <h2>Share your requirement.</h2>
        <p>Fields marked with an asterisk are required.</p>
      </header>

      <div className="field-grid">
        <div className={`field ${errors.name ? "has-error" : ""}`.trim()}>
          <label htmlFor="name">
            Full name <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            value={values.name}
            onChange={update("name")}
            placeholder="Dr. Anita Sharma"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <p className="field-error" id="name-error">{errors.name}</p>
          ) : null}
        </div>

        <div className={`field ${errors.email ? "has-error" : ""}`.trim()}>
          <label htmlFor="email">
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={update("email")}
            placeholder="name@company.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p className="field-error" id="email-error">{errors.email}</p>
          ) : null}
        </div>

        <div className="field">
          <label htmlFor="company">Company or institution</label>
          <input
            id="company"
            name="company"
            value={values.company}
            onChange={update("company")}
            placeholder="Optional"
          />
        </div>

        <div className={`field ${errors.phone ? "has-error" : ""}`.trim()}>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={update("phone")}
            placeholder="+91 00000 00000"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone ? (
            <p className="field-error" id="phone-error">{errors.phone}</p>
          ) : null}
        </div>

        <div className={`field field-select span-2 ${errors.enquiry ? "has-error" : ""}`.trim()}>
          <label htmlFor="enquiry">
            Type of enquiry <span aria-hidden="true">*</span>
          </label>
          <select
            id="enquiry"
            name="enquiry"
            value={values.enquiry}
            onChange={update("enquiry")}
            aria-invalid={Boolean(errors.enquiry)}
            aria-describedby={errors.enquiry ? "enquiry-error" : undefined}
          >
            <option value="">Select one</option>
            {enquiryTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.enquiry ? (
            <p className="field-error" id="enquiry-error">{errors.enquiry}</p>
          ) : null}
        </div>

        <div className={`field span-2 ${errors.message ? "has-error" : ""}`.trim()}>
          <label htmlFor="message">
            Your requirement <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={values.message}
            onChange={update("message")}
            placeholder="Tell us about the products, quantities, or partnership you have in mind."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message ? (
            <p className="field-error" id="message-error">{errors.message}</p>
          ) : null}
        </div>
      </div>

      <div className="form-footer">
        <p className="form-note">
          Your details are used only to answer this enquiry.
        </p>
        <button
          type="button"
          className="button"
          onClick={handleSubmit}
          disabled={status === "sending"}
        >
          {status === "sending" ? (
            <>
              <span className="spinner" aria-hidden="true" /> Sending
            </>
          ) : (
            <>
              Send enquiry <span aria-hidden="true">→</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
}
