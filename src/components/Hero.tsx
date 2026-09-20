// src/components/Hero.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { LuArrowDownRight, LuArrowUpRight, LuGithub } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const EASE = [0.16, 1, 0.3, 1] as const;

const socials = [
  { icon: LuGithub, href: "https://github.com/rhealnuel", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/emmanuel-kawekwune",
    label: "LinkedIn",
  },
  { icon: RiTwitterXLine, href: "https://twitter.com/rhealnuel", label: "X" },
];

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: EASE },
    },
  };

  const imageReveal = {
    hidden: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.97,
      y: shouldReduceMotion ? 0 : 12,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.1, ease: EASE },
    },
  };

  return (
    <section className="relative overflow-hidden">
      <div className="container-page">
        <div className="py-16 sm:py-20 lg:flex lg:min-h-[calc(100vh-4rem)] lg:items-center lg:py-20">
          <div className="w-full">
            {/* Status row */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={reveal}
              className="mb-12 flex items-center justify-between sm:mb-16"
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/50" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                </span>
                <span className="eyebrow">Open to Product opportunities</span>
              </div>

              <span className="hidden font-mono text-xs text-muted sm:block">
                06°31′N / 03°22′E
              </span>
            </motion.div>

            {/* Main hero */}
            <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-20 xl:grid-cols-[minmax(0,1fr)_360px]">
              {/* Left content */}
              <div>
                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={reveal}
                  className="eyebrow mb-5"
                >
                  Emmanuel Kawekwune
                </motion.p>

                <motion.h1
                  initial="hidden"
                  animate="visible"
                  variants={reveal}
                  className="max-w-3xl text-[clamp(2.5rem,5vw,4.25rem)] font-medium leading-[1.05] tracking-tight text-ink"
                >
                  I build products
                  <br />
                  <span className="text-muted">with a technical</span>
                  <br />
                  <span className="relative inline-block">
                    point of view.
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.55, duration: 0.5, ease: EASE }}
                      className="absolute -bottom-1 left-0 h-[3px] w-full origin-left bg-accent sm:-bottom-2"
                    />
                  </span>
                </motion.h1>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={reveal}
                  className="mt-8 max-w-xl"
                >
                  <p className="text-base leading-relaxed text-muted sm:text-lg">
                    Product-focused and technically grounded. I bring hands-on
                    software engineering experience into product decisions,
                    helping turn real user and business problems into products
                    that can actually be built and shipped.
                  </p>
                </motion.div>

                {/* Actions */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={reveal}
                  className="mt-9 flex flex-wrap items-center gap-3"
                >
                  <a
                    href="#Work"
                    className="group inline-flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-all duration-200 hover:bg-ink-soft"
                  >
                    Explore my work
                    <LuArrowDownRight
                      size={17}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                    />
                  </a>

                  <a
                    href="#Contact"
                    className="group inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-ink transition-all duration-200 hover:border-ink"
                  >
                    Let&rsquo;s talk
                    <LuArrowUpRight
                      size={16}
                      className="opacity-50 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </a>
                </motion.div>
              </div>

              {/* Portrait */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={imageReveal}
                className="relative lg:pb-2"
              >
                <div className="relative aspect-[4/5] overflow-hidden border border-border bg-paper-raised">
                  <Image
                    src="/first.png"
                    alt="Portrait of Emmanuel Kawekwune"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 360px"
                    className="object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                  />

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/60 to-transparent px-5 pb-5 pt-16">
                    <span className="text-xs font-medium tracking-wide text-paper">
                      Lagos, Nigeria
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-paper/70">
                      01 / 01
                    </span>
                  </div>
                </div>

                {/* Decorative offset frame */}
                <div
                  aria-hidden="true"
                  className="absolute -bottom-3 -right-3 -z-10 h-full w-full border border-border"
                />

                {/* Identity marker */}
                <div className="absolute -left-3 top-8 hidden h-14 w-14 items-center justify-center border border-border bg-paper sm:flex lg:-left-7">
                  <span className="font-mono text-[10px] text-muted">
                    EK<span className="text-accent">.</span>
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Bottom information bar */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={reveal}
              className="mt-16 grid border-y border-border sm:mt-20 sm:grid-cols-[1fr_auto]"
            >
              <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                <div className="py-5 sm:px-5 sm:first:pl-0">
                  <p className="eyebrow">Focus</p>
                  <p className="mt-2 text-sm text-ink">Product Management</p>
                </div>
                <div className="py-5 sm:px-5">
                  <p className="eyebrow">Background</p>
                  <p className="mt-2 text-sm text-ink">Software Engineering</p>
                </div>
                <div className="py-5 sm:px-5 sm:last:pr-0">
                  <p className="eyebrow">Currently</p>
                  <p className="mt-2 text-sm text-ink">Building &amp; learning</p>
                </div>
              </div>

              <div className="flex items-center gap-5 border-t border-border py-5 sm:border-l sm:border-t-0 sm:pl-6">
                <span className="eyebrow hidden lg:block">Connect</span>
                <div className="flex items-center gap-4">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-muted transition-all duration-200 hover:-translate-y-0.5 hover:text-ink"
                    >
                      <Icon size={18} />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.4 }}
              href="#About"
              className="group mt-8 hidden items-center gap-3 text-muted transition-colors hover:text-ink sm:flex"
            >
              <span className="h-10 w-px bg-border transition-colors group-hover:bg-ink" />
              <span className="text-[10px] font-medium uppercase tracking-[0.18em]">
                Scroll to explore
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;