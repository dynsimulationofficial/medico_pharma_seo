"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-grid">
        <label>
          <span>Full name</span>
          <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
        </label>
        <label>
          <span>Work email</span>
          <input name="email" type="email" autoComplete="email" placeholder="name@company.com" required />
        </label>
      </div>
      <div className="field-grid">
        <label>
          <span>Company</span>
          <input name="company" type="text" autoComplete="organization" placeholder="Company name" />
        </label>
        <label>
          <span>Enquiry type</span>
          <select name="type" defaultValue="">
            <option value="" disabled>Select an option</option>
            <option>Product enquiry</option>
            <option>Business partnership</option>
            <option>Distribution</option>
            <option>General enquiry</option>
          </select>
        </label>
      </div>
      <label>
        <span>Phone number</span>
        <input name="phone" type="tel" autoComplete="tel" placeholder="Your contact number" />
      </label>
      <label>
        <span>Message</span>
        <textarea name="message" rows={6} placeholder="Tell us how we can help" required />
      </label>
      <button className="button form-button" type="submit">
        Send enquiry <span>→</span>
      </button>
      {submitted ? (
        <p className="form-success" role="status">
          Form layout is working. Connect the production email or CRM endpoint before launch to deliver enquiries.
        </p>
      ) : (
        <p className="form-note">The form is ready to connect to your approved email, CRM, or form endpoint.</p>
      )}
    </form>
  );
}
