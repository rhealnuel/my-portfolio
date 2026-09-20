
// src/components/Navbar.tsx
"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { label: "About", href: "#About" },
  { label: "Work", href: "#Work" },
  { label: "Experience", href: "#Experience" },
  { label: "Contact", href: "#Contact" },
];

const RESUME_URL =
  "https://docs.google.com/document/d/1iBuuoVU1eM26WLPdp_N-zX5L97rzgZTyO4UHTBFnLVE/edit?usp=sharing";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-border shadow-[0_1px_0_0_rgba(0,0,0,0.02)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-sm font-medium tracking-tight text-ink transition-opacity hover:opacity-70"
          onClick={() => setMenuOpen(false)}
        >
          EK<span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-8 text-sm text-ink-soft">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="relative py-1 transition-colors duration-200 hover:text-ink after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-ink after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#Contact">
            <button
              type="button"
              className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-all duration-200 hover:bg-ink-soft"
            >
              Let&rsquo;s talk
            </button>
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="text-ink md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="overflow-hidden border-t border-border bg-paper md:hidden"
          >
            <ul className="container-page flex flex-col gap-1 py-6 text-base text-ink-soft">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block py-3 transition-colors hover:text-ink"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="container-page flex flex-col gap-3 pb-8">
              <a href="#Contact" onClick={() => setMenuOpen(false)}>
                <button
                  type="button"
                  className="w-full rounded-full bg-ink px-4 py-3 text-sm font-medium text-paper transition-all hover:bg-ink-soft"
                >
                  Let&rsquo;s talk
                </button>
              </a>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="w-full rounded-full border border-border px-4 py-3 text-sm font-medium text-ink transition-all hover:border-ink"
                >
                  View resume
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;