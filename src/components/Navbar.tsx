// src/components/Navbar.tsx
"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";

const navLinks = [
  { label: "About", href: "#About" },
  { label: "Work", href: "#Work" },
  { label: "Skills", href: "#Skills" },
  { label: "Experience", href: "#Experience" },
  { label: "Contact", href: "#Contact" },
];

const RESUME_URL =
  "https://docs.google.com/document/d/1iBuuoVU1eM26WLPdp_N-zX5L97rzgZTyO4UHTBFnLVE/edit?usp=sharing";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -65% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-border bg-paper/92 shadow-[0_1px_0_rgba(0,0,0,0.025)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-[68px] items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          onClick={closeMenu}
          aria-label="Emmanuel Kawekwune home"
          className="group flex items-center gap-2 text-ink"
        >
          <span className="font-mono text-[15px] font-medium tracking-[-0.04em]">
            EK
          </span>

          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125"
          />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center md:flex" aria-label="Main navigation">
          <ul className="flex items-center gap-7">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href.slice(1);

              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`group relative inline-flex py-2 text-[13px] font-medium transition-colors duration-200 ${
                      isActive ? "text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    {item.label}

                    <span
                      aria-hidden="true"
                      className={`absolute bottom-0 left-0 h-px bg-ink transition-all duration-300 ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="ml-8 h-5 w-px bg-border" />

          <div className="ml-6 flex items-center gap-5">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-muted transition-colors hover:text-ink"
            >
              Resume
              <FiArrowUpRight size={13} />
            </a>

            <a
              href="#Contact"
              className="group inline-flex items-center gap-2 border border-ink bg-ink px-4 py-2.5 text-[13px] font-medium text-paper transition-colors duration-200 hover:bg-ink-soft"
            >
              Let&apos;s talk
              <FiArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 items-center justify-center text-ink transition-opacity hover:opacity-60 md:hidden"
        >
          {menuOpen ? <HiX size={23} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="overflow-hidden border-t border-border bg-paper md:hidden"
          >
            <nav
              className="container-page"
              aria-label="Mobile navigation"
            >
              <ul className="py-5">
                {navLinks.map((item, index) => {
                  const isActive =
                    activeSection === item.href.slice(1);

                  return (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.035,
                        duration: 0.25,
                      }}
                    >
                      <a
                        href={item.href}
                        onClick={closeMenu}
                        aria-current={isActive ? "location" : undefined}
                        className="flex items-center justify-between border-b border-border py-4 text-lg font-medium tracking-[-0.02em] text-ink"
                      >
                        <span>{item.label}</span>

                        <FiArrowUpRight
                          size={17}
                          className={`transition-opacity ${
                            isActive ? "opacity-100" : "opacity-30"
                          }`}
                        />
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="grid grid-cols-2 gap-3 border-t border-border py-6">
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 border border-border px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
                >
                  Resume
                  <FiArrowUpRight size={14} />
                </a>

                <a
                  href="#Contact"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 bg-ink px-4 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink-soft"
                >
                  Let&apos;s talk
                  <FiArrowUpRight size={14} />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;