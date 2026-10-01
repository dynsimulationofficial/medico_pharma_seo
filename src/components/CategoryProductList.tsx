"use client";

import { useState } from "react";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { Product } from "@/data/products";
import ProductEnquiryModal, { type EnquiryProduct } from "./ProductEnquiryModal";

interface CategoryProductListProps {
  productsList: Product[];
  categoryName: string;
}

function getProductMeta(name: string) {
  const strength =
    name.match(/\b\d+(?:\.\d+)?\s?(?:mg|mcg|g|ml|iu|%)\b/i)?.[0] || "B2B";
  const lower = name.toLowerCase();

  let form = "Medicine";
  if (lower.includes("capsule")) form = "Capsule";
  else if (lower.includes("tablet")) form = "Tablet";
  else if (lower.includes("injection")) form = "Injection";
  else if (lower.includes("ointment")) form = "Ointment";
  else if (lower.includes("cream")) form = "Cream";
  else if (lower.includes("syrup") || lower.includes("suspension"))
    form = "Liquid";
  else if (lower.includes("powder")) form = "Powder";

  return { strength, form };
}

export default function CategoryProductList({
  productsList,
  categoryName,
}: CategoryProductListProps) {
  const [selectedProduct, setSelectedProduct] = useState<EnquiryProduct | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (product: Product) => {
    setSelectedProduct({
      id: product.id,
      name: product.name,
      category: product.category || categoryName,
      image: product.image,
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <section className="dynamic-category-split-products">
        <div className="dynamic-category-split-products-head">
          <div>
            <h2>Products under {categoryName}</h2>
            <p>
              Catalogue information for qualified B2B enquiries. Commercial
              availability is confirmed only after verification.
            </p>
          </div>

          <div className="dynamic-category-split-count">
            <span>LISTED</span>
            <strong>{String(productsList.length).padStart(2, "0")}</strong>
            <small>items</small>
          </div>
        </div>

        {productsList.length > 0 ? (
          <div className="dynamic-product-premium-list">
            {productsList.map((product, index) => {
              const displayImg = product.image || "/Medics_pharma1.png";
              const meta = getProductMeta(product.name);

              return (
                <article
                  className="dynamic-product-premium-card"
                  key={product.id}
                  style={
                    { "--product-delay": `${index * 70}ms` } as CSSProperties
                  }
                >
                  <span
                    className="dynamic-product-premium-rail"
                    aria-hidden="true"
                  />
                  <span className="dynamic-product-premium-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="dynamic-product-premium-media">
                    <span
                      className="dynamic-product-premium-orbit"
                      aria-hidden="true"
                    />
                    <span
                      className="dynamic-product-premium-shine"
                      aria-hidden="true"
                    />
                    <img
                      src={displayImg}
                      alt={product.name}
                      loading="lazy"
                    />
                  </div>

                  <div className="dynamic-product-premium-main">
                    <div className="dynamic-product-premium-label-row">
                      <span>{product.category}</span>
                      <small>ID / {product.id}</small>
                    </div>

                    <h3>{product.name}</h3>

                    <div className="dynamic-product-premium-specs">
                      <span>
                        <i>◉</i>
                        <b>{meta.strength}</b>
                        <small>Strength</small>
                      </span>
                      <span>
                        <i>○</i>
                        <b>{meta.form}</b>
                        <small>Form</small>
                      </span>
                      <span>
                        <i>□</i>
                        <b>B2B</b>
                        <small>Supply enquiry</small>
                      </span>
                    </div>
                  </div>

                  <div className="dynamic-product-premium-side">
                    <div className="dynamic-product-premium-price">
                      <span>Commercial availability</span>
                      <strong>On request</strong>
                    </div>

                    <div className="dynamic-product-premium-actions">
                      <button
                        type="button"
                        onClick={() => handleOpenModal(product)}
                        className="dynamic-product-premium-enquire"
                        aria-haspopup="dialog"
                      >
                        Business Enquiry <span aria-hidden="true">→</span>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="dynamic-category-empty-state">
            <span>CATALOGUE UPDATE</span>
            <h3>Products for this category are currently being updated.</h3>
            <Link href="/contact" className="text-link">
              Contact commercial team <span aria-hidden="true">→</span>
            </Link>
          </div>
        )}
      </section>

      <ProductEnquiryModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </>
  );
}
