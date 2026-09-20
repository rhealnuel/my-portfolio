
// src/components/About.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LuArrowUpRight,
  LuCode,
  LuLayers3,
  LuUsers,
} from "react-icons/lu";
import Reveal from "@/components/ui/Reveal";

const strengths = [
  {
    icon: LuLayers3,
    title: "Product thinking",
    description:
      "Turning ambiguous problems into clear, practical product direction.",
  },
  {
    icon: LuCode,
    title: "Technical depth",
    description:
      "Understanding what happens beyond the interface, from APIs to shipping.",
  },
  {
    icon: LuUsers,
    title: "Team collaboration",
    description:
      "Working across product, design and engineering to move ideas forward.",
  },
];

const About = () => {
  return (
    <section
      id="About"
      className="w-full border-y border-border bg-paper-raised py-24 sm:py-28 lg:py-36"
    >
      <div className="container-page">
        {/* =========================================================
            DESKTOP INTRO
        ========================================================= */}
        <div className="grid gap-10 lg:grid-cols-[120px_minmax(0,1fr)_280px] lg:items-start lg:gap-12 xl:grid-cols-[150px_minmax(0,1fr)_340px] xl:gap-16">
          {/* Section label */}
          <Reveal>
            <div className="flex items-center gap-3 lg:sticky lg:top-28 lg:block">
              <div className="mb-0 h-px w-8 bg-accent lg:mb-5 lg:w-10" />

              <span className="eyebrow whitespace-nowrap">
                About me
              </span>
            </div>
          </Reveal>

          {/* Main statement */}
          <Reveal delay={0.05}>
            <div>
              <h2 className="max-w-4xl text-[clamp(2.4rem,4.3vw,4.8rem)] font-medium leading-[0.98] tracking-[-0.045em] text-ink">
                I started by building software.
                <br />
                <span className="text-muted">
                  Now I&rsquo;m focused on building
                </span>{" "}
                <span className="relative inline-block">
                  better products.
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-accent sm:-bottom-2" />
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                I&rsquo;m Emmanuel, a software engineer transitioning into
                Product Management. I bring hands-on experience building
                digital products together with a growing focus on users,
                priorities, product decisions and team execution.
              </p>
            </div>
          </Reveal>

          {/* Desktop image */}
          <Reveal delay={0.12} className="hidden lg:block">
            <div className="group relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-border bg-surface">
                <Image
                  src="/my-profile.jpeg"
                  alt="Emmanuel Kawekwune"
                  fill
                  sizes="340px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent px-4 pb-4 pt-16">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium text-white">
                      Emmanuel Kawekwune
                    </span>

                    <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/70">
                      Lagos
                    </span>
                  </div>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 -z-10 h-full w-full border border-border"
              />
            </div>
          </Reveal>
        </div>

        {/* =========================================================
            MOBILE IMAGE
        ========================================================= */}
        <Reveal className="mt-14 lg:hidden">
          <div className="group relative mx-auto max-w-md">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-border bg-surface">
              <Image
                src="/my-profile.jpeg"
                alt="Emmanuel Kawekwune"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent px-5 pb-5 pt-20">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-white">
                    Emmanuel Kawekwune
                  </span>

                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/70">
                    Lagos
                  </span>
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 -z-10 h-full w-full border border-border"
            />
          </div>
        </Reveal>

        {/* =========================================================
            STORY
        ========================================================= */}
        <div className="mt-20 grid gap-12 border-t border-border pt-12 lg:mt-28 lg:grid-cols-[150px_minmax(0,1fr)_280px] lg:gap-12 xl:grid-cols-[150px_minmax(0,1fr)_340px] xl:gap-16">
          {/* Small label */}
          <Reveal>
            <span className="eyebrow">The transition</span>
          </Reveal>

          {/* Story */}
          <Reveal delay={0.05}>
            <div className="max-w-3xl space-y-6 text-base leading-7 text-muted sm:text-[17px] sm:leading-8">
              <p>
                I started learning software development in 2020 and gradually
                turned that curiosity into professional experience. Since
                then, I&rsquo;ve worked across frontend and full-stack
                environments, using technologies such as{" "}
                <span className="font-medium text-ink">React</span>,{" "}
                <span className="font-medium text-ink">Next.js</span>,{" "}
                <span className="font-medium text-ink">TypeScript</span> and{" "}
                <span className="font-medium text-ink">Node.js</span> to build
                and ship digital products.
              </p>

              <p>
                Working closely with implementation changed the way I think
                about products. I became increasingly interested in the
                decisions before the code: understanding the problem,
                determining what matters most, balancing constraints and
                helping teams stay focused on the right outcome.
              </p>

              <p>
                That naturally led me toward Product Management. I want to
                combine my technical foundation with stronger product
                thinking, user understanding and cross-functional
                collaboration.
              </p>

              <div className="border-l-2 border-accent pl-5 pt-2">
                <p className="text-lg font-medium leading-7 tracking-tight text-ink sm:text-xl">
                  I like understanding how things work, why they should exist,
                  and what it takes to make them useful.
                </p>
              </div>

              <Link
                href="https://github.com/rhealnuel"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 pt-2 text-sm font-medium text-ink"
              >
                <span className="border-b border-border pb-1 transition-colors group-hover:border-ink">
                  Explore my GitHub
                </span>

                <LuArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </Reveal>

          {/* Side note */}
          <Reveal delay={0.12} className="hidden lg:block">
            <div className="border-l border-border pl-6">
              <span className="eyebrow">A different perspective</span>

              <p className="mt-4 text-sm leading-6 text-muted">
                Engineering taught me how products are built. Product
                Management is teaching me to think more deeply about what
                should be built and why.
              </p>
            </div>
          </Reveal>
        </div>

        {/* =========================================================
            WHAT I BRING
        ========================================================= */}
        <div className="mt-24 border-t border-border pt-10 lg:mt-32">
          <Reveal>
            <div className="mb-8 flex items-center justify-between">
              <span className="eyebrow">What I bring</span>

              <span className="hidden font-mono text-xs text-muted sm:block">
                01 — 03
              </span>
            </div>
          </Reveal>

          <div className="grid border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-border">
            {strengths.map(({ icon: Icon, title, description }, index) => (
              <Reveal
                key={title}
                delay={0.05 * index}
                className="h-full"
              >
                <div className="group flex h-full flex-col py-7 sm:px-7 sm:py-9 first:sm:pl-0 last:sm:pr-0">
                  <div className="mb-9 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center border border-border text-muted transition-colors duration-300 group-hover:border-ink group-hover:text-ink">
                      <Icon size={18} strokeWidth={1.7} />
                    </div>

                    <span className="font-mono text-[10px] text-muted">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-medium text-ink">
                    {title}
                  </h3>

                  <p className="mt-3 max-w-xs text-sm leading-6 text-muted">
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;