import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Medico Pharma | Pharmaceutical Solutions",
    template: "%s | Medico Pharma",
  },
  description:
    "Discover Medico Pharma's pharmaceutical capabilities, product categories, quality approach, and partnership support.",
  keywords: [
    "Medico Pharma",
    "pharmaceutical company",
    "pharma products",
    "healthcare products",
    "pharmaceutical partner",
  ],
  openGraph: {
    title: "Medico Pharma",
    description:
      "Pharmaceutical solutions built around quality, responsibility, and dependable partnerships.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
