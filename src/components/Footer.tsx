// src/components/Footer.tsx
"use client";

import Link from "next/link";
import {
  LuArrowUpRight,
  LuArrowUp,
  LuGithub,
} from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const navLinks = [
  { label: "About", href: "#About" },
  { label: "Work", href: "#Work" },
  { label: "Skills", href: "#Skills" },
  { label: "Experience", href: "#Experience" },
  { label: "Contact", href: "#Contact" },
];

const socials = [
  {
    icon: LuGithub,
    href: "https://github.com/rhealnuel",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/emmanuel-kawekwune",
    label: "LinkedIn",
  },
  {
    icon: RiTwitterXLine,
    href: "https://twitter.com/rhealnuel",
    label: "X",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-ink text-paper">
      <div className="container-page">
        {/* Main footer */}
        <div className="border-t border-paper/15 py-12 sm:py-14 lg:py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr_auto] lg:items-start lg:gap-16">
            {/* Identity */}
            <div>
              <Link
                href="#"
                className="group inline-flex items-center gap-2"
              >
                <span className="font-mono text-sm font-medium text-paper">
                  Emmanuel Kawekwune
                </span>

                <LuArrowUpRight
                  size={14}
                  className="text-paper/40 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-paper"
                />
              </Link>

              <p className="mt-3 max-w-xs text-sm leading-6 text-paper/45">
                Product-minded software engineer building useful digital
                products with a technical point of view.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/35">
                Navigate
              </p>

              <nav aria-label="Footer navigation">
                <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm sm:grid-cols-3 lg:grid-cols-2">
                  {navLinks.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-paper/55 transition-colors duration-200 hover:text-paper"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Socials */}
            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/35">
                Elsewhere
              </p>

              <div className="flex items-center gap-5">
                {socials.map(({ icon: Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group text-paper/50 transition-colors duration-200 hover:text-paper"
                  >
                    <Icon
                      size={17}
                      className="transition-transform duration-200 group-hover:-translate-y-0.5"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col gap-5 border-t border-paper/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1 text-xs text-paper/35 sm:flex-row sm:items-center sm:gap-3">
            <span>© {currentYear} Emmanuel Kawekwune</span>

            <span className="hidden text-paper/20 sm:inline">•</span>

            <span>Built with Next.js & TypeScript</span>
          </div>

          <a
            href="#"
            className="group inline-flex w-fit items-center gap-2 text-xs text-paper/45 transition-colors duration-200 hover:text-paper"
            aria-label="Back to top"
          >
            Back to top

            <span className="flex h-7 w-7 items-center justify-center border border-paper/15 transition-colors duration-200 group-hover:border-paper/40">
              <LuArrowUp
                size={13}
                className="transition-transform duration-200 group-hover:-translate-y-0.5"
              />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;