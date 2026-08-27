"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

const productGroups = [
  {
    title: "Nutrition & Wellness",
    items: [
      ["Nutraceuticals", "/products/nutraceuticals", "Wellness formulations"],
      ["Vitamins & Minerals", "/products/vitamins-minerals", "Daily micronutrition"],
      ["Protein Powders", "/products/protein-powders", "Protein-led nutrition"],
      ["Sports Nutrition", "/products/sports-nutrition", "Active lifestyle support"],
      ["Herbal Products", "/products/herbal-products", "Botanical ranges"],
      ["Ayurvedic Products", "/products/ayurvedic-products", "Traditional wellness"],
    ],
  },
  {
    title: "Clinical & Diagnostics",
    items: [
      ["Medical Devices", "/products/medical-devices", "Healthcare equipment"],
      ["Surgical Consumables", "/products/surgical-consumables", "Clinical essentials"],
      ["Diagnostic Kits", "/products/diagnostic-kits", "Testing solutions"],
    ],
  },
];

const serviceGroups = [
  {
    title: "Manufacturing",
    items: [
      ["Pharmaceutical Manufacturing", "/services/pharmaceutical-manufacturing", "Production support"],
      ["Contract Manufacturing", "/services/contract-manufacturing", "Flexible manufacturing"],
      ["Third-Party Manufacturing", "/services/third-party-manufacturing", "Scalable production partnerships"],
    ],
  },
  {
    title: "Brand & Market Support",
    items: [
      ["OEM / Private Label", "/services/oem-private-label", "Your brand, our support"],
      ["Export Services", "/services/export-services", "International supply coordination"],
    ],
  },
];

const resourceGroups = [
  {
    title: "Commercial Resources",
    items: [
      ["Product Catalog", "/resources/product-catalog", "Browse the portfolio"],
      ["Company Profile", "/resources/company-profile", "Company and capabilities"],
    ],
  },
];

const menuGroups = {
  Products: {
    href: "/products",
    eyebrow: "Products",
    description:
      "Nine focused healthcare categories organised for faster discovery by buyers, distributors and brand partners.",
    groups: productGroups,
  },
  Services: {
    href: "/services",
    eyebrow: "Services",
    description:
      "Manufacturing, private-label and export support organised around the way commercial partnerships actually begin.",
    groups: serviceGroups,
  },
  Resources: {
    href: "/resources",
    eyebrow: "Resources",
    description:
      "Core commercial documents kept separate from product browsing so partners can reach them quickly.",
    groups: resourceGroups,
  },
} as const;

type MenuName = keyof typeof menuGroups;

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuName | null>(null);
  const [stuck, setStuck] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      setStuck(window.scrollY > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const nodes = document.querySelectorAll("[data-reveal]:not(.is-visible)");

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        nodes.forEach((node) => node.classList.add("is-visible"));
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
      );

      nodes.forEach((node) => observer.observe(node));
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setOpenMenu(null);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <div
        className="scroll-progress"
        style={{ "--progress": progress } as CSSProperties}
        aria-hidden="true"
      />

      <header
        className={`site-header pharma-header ${stuck ? "is-stuck" : ""}`.trim()}
        onMouseLeave={() => {
          if (!mobileOpen) setOpenMenu(null);
        }}
      >
        <div className="container header-inner pharma-header-inner">
          <Link href="/" className="brand" aria-label="Medico Pharma — home">
            <span className="brand-mark" aria-hidden="true">
              <span />
              <i />
            </span>
            <span className="brand-text">
              <strong>Medico Pharma</strong>
              <small>Healthcare</small>
            </span>
          </Link>

          <button
            className="menu-toggle"
            type="button"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="main-nav"
            onClick={() => {
              setMobileOpen((value) => !value);
              setOpenMenu(null);
            }}
          >
            <span />
            <span />
          </button>

          <nav
            id="main-nav"
            className={`main-nav pharma-main-nav ${mobileOpen ? "is-open" : ""}`.trim()}
            aria-label="Main navigation"
          >
            <div className="pharma-nav-links">
              <Link href="/" className={isActive("/") ? "active" : ""}>Home</Link>
              <Link href="/about" className={isActive("/about") ? "active" : ""}>About us</Link>

              {(Object.keys(menuGroups) as MenuName[]).map((name) => (
                <div className="pharma-nav-group" key={name}>
                  <button
                    type="button"
                    className={isActive(menuGroups[name].href) ? "active" : ""}
                    aria-expanded={openMenu === name}
                    onMouseEnter={() => setOpenMenu(name)}
                    onFocus={() => setOpenMenu(name)}
                    onClick={() => setOpenMenu((current) => (current === name ? null : name))}
                  >
                    {name}
                    <span className="nav-chevron" aria-hidden="true" />
                  </button>

                  <div className={`mobile-nav-accordion ${openMenu === name ? "is-open" : ""}`}>
                    <Link href={menuGroups[name].href} className="mobile-nav-view-all">
                      View all {name.toLowerCase()} <span aria-hidden="true">→</span>
                    </Link>
                    {menuGroups[name].groups.flatMap((group) =>
                      group.items.map(([label, href]) => (
                        <Link href={href} key={href}>{label}</Link>
                      ))
                    )}
                  </div>
                </div>
              ))}

              <Link href="/contact" className={isActive("/contact") ? "active" : ""}>Contact</Link>
            </div>

            <Link href="/contact" className="button button-small pharma-enquire">
              Enquire now <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </div>

        <div className={`desktop-mega-shell ${openMenu ? "is-open" : ""}`}>
          {openMenu && (
            <div className="container desktop-mega-inner">
              <div className="desktop-mega-intro">
                <span className="mega-eyebrow">{menuGroups[openMenu].eyebrow}</span>
                <p>{menuGroups[openMenu].description}</p>
                <Link href={menuGroups[openMenu].href} className="mega-all-link">
                  View all {openMenu.toLowerCase()} <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className={`desktop-mega-columns mega-${openMenu.toLowerCase()}`}>
                {menuGroups[openMenu].groups.map((group) => (
                  <div className="desktop-mega-column" key={group.title}>
                    <span className="mega-column-title">{group.title}</span>
                    <div className="mega-column-rule" />
                    <div className="desktop-mega-list">
                      {group.items.map(([label, href, meta]) => (
                        <Link href={href} className="desktop-mega-link" key={href}>
                          <span>
                            <strong>{label}</strong>
                            <small>{meta}</small>
                          </span>
                          <i aria-hidden="true">↗</i>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
