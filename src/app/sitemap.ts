import type { MetadataRoute } from "next";
import { categories } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.medicos-pharma.com";
  const lastModified = new Date("2026-09-11");

  const staticRoutes = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/products", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/services", changeFrequency: "monthly" as const, priority: 0.8 },
    {
      path: "/services/pharmaceutical-manufacturing",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/services/contract-manufacturing",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/services/oem-private-label",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/services/third-party-manufacturing",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/services/export-services",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/privacy-policy",
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      path: "/terms-and-conditions",
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  const categoryRoutes = categories.map((category) => ({
    path: category.internalUrl,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes].map(
    ({ path, changeFrequency, priority }) => ({
      url: `${baseUrl}${path
        .split("/")
        .map((segment) => encodeURIComponent(segment))
        .join("/")}`,
      lastModified,
      changeFrequency,
      priority,
    })
  );
}
