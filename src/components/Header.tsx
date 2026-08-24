"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Brand from "./Brand";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
          <div className="nav-links">
            {links.map((link) => {
              const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={active ? "active" : ""}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <Link href="/contact" className="button button-small" onClick={() => setOpen(false)}>
            Enquire now
            <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
