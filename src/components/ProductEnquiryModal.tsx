"use client";

import { useEffect, useState } from "react";
import { countryCodes } from "@/data/countryCodes";

export interface EnquiryProduct {
  id?: string;
  name: string;
  category?: string;
  image?: string;
}

interface ProductEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: EnquiryProduct | null;
}

type Values = {
  name: string;
  email: string;
  company: string;
  country: string;
  phone: string;
  enquiry: string;
  message: string;
};

type Errors = Partial<Record<keyof Values, string>>;

const enquiryTypes = [
  "Product information",
  "Institutional supply",
  "Distribution partnership",
  "Export enquiry",
  "General question",
];

const emptyValues: Values = {
  name: "",
  email: "",
  company: "",
  country: "US",
  phone: "",
  enquiry: "Product information",
  message: "",
};

export default function ProductEnquiryModal({
  isOpen,
  onClose,
  product,
}: ProductEnquiryModalProps) {
  const [values, setValues] = useState<Values>(emptyValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [website, setWebsite] = useState("");
  const [serverError, setServerError] = useState("");
  const [formStartedAt, setFormStartedAt] = useState(() => Date.now());

  useEffect(() => {
    if (isOpen && product) {
      setValues({
        name: "",
        email: "",
        company: "",
        country: "US",
        phone: "",
        enquiry: "Product information",
        message: `I am interested in ${product.name}${
          product.category ? ` (${product.category})` : ""
        }. Please share pricing, minimum order quantity (MOQ), and commercial availability.`,
      });
      setErrors({});
      setServerError("");
      setStatus("idle");
      setFormStartedAt(Date.now());
    }
  }, [isOpen, product]);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const update =
    (key: keyof Values) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      setValues((prev) => ({ ...prev, [key]: event.target.value }));
      if (errors[key]) {
        setErrors((prev) => ({ ...prev, [key]: undefined }));
      }
      if (serverError) {
        setServerError("");
      }
    };

  const validate = (): Errors => {
    const errs: Errors = {};
    if (values.name.trim().length < 2) {
      errs.name = "Enter your full name.";
    }
    if (!values.email.trim()) {
      errs.email = "Enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
      errs.email = "Enter a valid email address.";
    }
    if (!values.phone.trim()) {
      errs.phone = "Enter your phone number.";
    } else if (!/^[\d\s().-]{5,20}$/.test(values.phone.trim())) {
      errs.phone = "Enter a valid phone number.";
    }
    if (!values.enquiry) {
      errs.enquiry = "Select enquiry type.";
    }
    if (values.message.trim().length < 20) {
      errs.message = "Please write at least 20 characters.";
    } else if (values.message.length > 3000) {
      errs.message = "Keep your requirement under 3,000 characters.";
    }
    return errs;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const foundErrors = validate();
    setErrors(foundErrors);

    if (Object.keys(foundErrors).length > 0) {
      return;
    }

    setStatus("sending");
    setServerError("");

    const selectedCountry =
      countryCodes.find((c) => c.code === values.country) || countryCodes[0];
    const fullPhone = values.phone.trim()
      ? `${selectedCountry.dialCode} ${values.phone.trim()}`
      : "";

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        credentials: "same-origin",
        cache: "no-store",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify({
          ...values,
          product: product.name,
          countryCode: selectedCountry.dialCode,
          countryName: `${selectedCountry.name} (${selectedCountry.code})`,
          phone: fullPhone,
          website,
          formStartedAt,
        }),
      });

      const data = (await response.json().catch(() => null)) as
        | { success?: boolean; error?: string }
        | null;

      if (response.ok && data?.success) {
        setStatus("sent");
        return;
      }

      setServerError(
        data?.error || "We could not send your enquiry. Please try again."
      );
      setStatus("idle");
    } catch {
      setServerError("An unexpected network error occurred. Please try again.");
      setStatus("idle");
    }
  };

  return (
    <div
      className="product-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className="product-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="product-modal-close"
          onClick={onClose}
          aria-label="Close enquiry modal"
        >
          ✕
        </button>

        {status === "sent" ? (
          <div className="product-modal-success">
            <div className="product-modal-success-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3>Enquiry sent successfully!</h3>
            <p>
              Thank you for enquiring about <strong>{product.name}</strong>. Our
              commercial team will review your requirement and reach out to you
              shortly.
            </p>
            <button
              type="button"
              className="product-modal-submit-btn"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="product-modal-header">
              <div className="product-modal-badge-row">
                <span className="product-modal-tag">B2B Product Enquiry</span>
                {product.category && (
                  <span className="product-modal-cat">{product.category}</span>
                )}
              </div>
              <h2 id="modal-product-title" className="product-modal-title">
                {product.name}
              </h2>
              <p className="product-modal-subtitle">
                Fill out the form below for pricing, specifications, and commercial supply.
              </p>
            </div>

            {serverError && (
              <div className="product-modal-alert">{serverError}</div>
            )}

            <form
              className="product-modal-form"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* Honeypot field */}
              <div className="form-honeypot" aria-hidden="true" style={{ display: "none" }}>
                <input
                  type="text"
                  name="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="product-modal-grid">
                <div className={`product-modal-field ${errors.name ? "has-error" : ""}`}>
                  <label htmlFor="modal-name">
                    Full name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="modal-name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={update("name")}
                    placeholder="Your full name"
                    autoComplete="name"
                    maxLength={100}
                    required
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>

                <div className={`product-modal-field ${errors.email ? "has-error" : ""}`}>
                  <label htmlFor="modal-email">
                    Email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="modal-email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={update("email")}
                    placeholder="name@company.com"
                    autoComplete="email"
                    maxLength={254}
                    required
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>

                <div className={`product-modal-field ${errors.phone ? "has-error" : ""}`}>
                  <label htmlFor="modal-phone">
                    Phone <span aria-hidden="true">*</span>
                  </label>
                  <div className="product-modal-phone-group">
                    <div className="product-modal-country-wrap">
                      <select
                        id="modal-country"
                        name="country"
                        value={values.country}
                        onChange={update("country")}
                        aria-label="Country calling code"
                        className="product-modal-country-select"
                      >
                        {countryCodes.map((item) => (
                          <option key={item.code} value={item.code}>
                            {item.flag} {item.dialCode} ({item.code})
                          </option>
                        ))}
                      </select>
                    </div>
                    <input
                      id="modal-phone"
                      name="phone"
                      type="tel"
                      value={values.phone}
                      onChange={update("phone")}
                      placeholder="(555) 000-0000"
                      autoComplete="tel-national"
                      maxLength={20}
                      className="product-modal-phone-input"
                      required
                    />
                  </div>
                  {errors.phone && <span className="field-error">{errors.phone}</span>}
                </div>

                <div className="product-modal-field">
                  <label htmlFor="modal-company">Company or institution</label>
                  <input
                    id="modal-company"
                    name="company"
                    type="text"
                    value={values.company}
                    onChange={update("company")}
                    placeholder="Optional"
                    autoComplete="organization"
                    maxLength={120}
                  />
                </div>

                <div className={`product-modal-field span-2 ${errors.enquiry ? "has-error" : ""}`}>
                  <label htmlFor="modal-enquiry">
                    Type of enquiry <span aria-hidden="true">*</span>
                  </label>
                  <select
                    id="modal-enquiry"
                    name="enquiry"
                    value={values.enquiry}
                    onChange={update("enquiry")}
                    required
                  >
                    {enquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.enquiry && (
                    <span className="field-error">{errors.enquiry}</span>
                  )}
                </div>

                <div className={`product-modal-field span-2 ${errors.message ? "has-error" : ""}`}>
                  <label htmlFor="modal-message">
                    Your requirement <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="modal-message"
                    name="message"
                    rows={3}
                    value={values.message}
                    onChange={update("message")}
                    placeholder="Provide details about your required quantity, target market or specifications..."
                    maxLength={3000}
                    required
                  />
                  {errors.message && (
                    <span className="field-error">{errors.message}</span>
                  )}
                </div>
              </div>

              <div className="product-modal-actions">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="product-modal-submit-btn"
                >
                  {status === "sending" ? "Submitting enquiry…" : "Submit Enquiry"} <span aria-hidden="true">→</span>
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
