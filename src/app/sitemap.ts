import type { MetadataRoute } from "next";
import { categories } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ).replace(/\/$/, "");
  const lastModified = new Date();
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/contact",
    "/services",
    "/privacy-policy",
    "/terms-&-conditions",
    "/product-01",
    "/product-03",
    "/product-04",
  ];
  const categoryRoutes = categories.map((category) => category.internalUrl);

  return [...staticRoutes, ...categoryRoutes].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
