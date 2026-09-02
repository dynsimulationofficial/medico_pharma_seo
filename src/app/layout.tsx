import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BTQ2LG17SZ"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BTQ2LG17SZ');
          `}
        </Script>

        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "yc0rgbimvc");
          `}
        </Script>

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}