// src/components/Skill.tsx
import React from "react";
import Reveal from "@/components/ui/Reveal";
import {
  LuArrowUpRight,
  LuCode,
  LuLayers3,
  LuWorkflow,
} from "react-icons/lu";

const skillGroups = [
  {
    index: "01",
    label: "Product",
    description:
      "How I approach problems, decisions, users, and product delivery.",
    icon: LuLayers3,
    items: [
      "Product Thinking",
      "Problem Definition",
      "Prioritization",
      "Requirements & User Stories",
      "Cross-Functional Collaboration",
      "Stakeholder Communication",
    ],
  },
  {
    index: "02",
    label: "Engineering",
    description:
      "The technical foundation I use to understand, build, and ship products.",
    icon: LuCode,
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express",
      "REST APIs",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    index: "03",
    label: "Workflow",
    description:
      "The tools and systems I use to collaborate and move work forward.",
    icon: LuWorkflow,
    items: [
      "Git & GitHub",
      "Figma",
      "Vercel",
      "Postman",
      "Jira",
      "ClickUp",
      "Slack",
      "Discord",
    ],
  },
];

const Skill = () => {
  return (
    <section
      id="Skills"
      className="w-full border-y border-border bg-white"
    >
      <div className="container-page py-24 sm:py-28 lg:py-36">
        {/* Intro */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[150px_minmax(0,1fr)_280px] xl:grid-cols-[170px_minmax(0,1fr)_340px]">
          <Reveal>
            <div className="flex items-center gap-3 lg:block">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                04
              </span>

              <span className="hidden h-px w-8 bg-border lg:mt-4 lg:block" />

              <p className="mt-0 text-sm text-muted lg:mt-4">Skills</p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="max-w-4xl">
              <h2 className="text-[clamp(2.5rem,5vw,5.25rem)] font-medium leading-[0.94] tracking-[-0.055em] text-ink">
                The overlap between
                <br />
                <span className="text-muted">product and engineering.</span>
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                I bring a technical understanding of how software is built
                together with a growing focus on why products should be built,
                who they are for, and how teams can deliver them effectively.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.14} className="lg:pt-2">
            <div className="border-l border-border pl-5 lg:pl-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                Core approach
              </p>

              <p className="mt-4 text-sm leading-6 text-ink">
                Understand the problem.
                <br />
                Shape the solution.
                <br />
                Work with the team.
                <br />
                Ship and improve.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Skill groups */}
        <div className="mt-20 border-t border-border lg:mt-28">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <Reveal
                key={group.label}
                delay={index * 0.08}
                className="group border-b border-border"
              >
                <div className="grid grid-cols-1 py-10 sm:py-12 lg:grid-cols-[150px_240px_minmax(0,1fr)] lg:items-start lg:gap-8 lg:py-14 xl:grid-cols-[170px_280px_minmax(0,1fr)]">
                  {/* Index */}
                  <div className="mb-7 flex items-center gap-4 lg:mb-0">
                    <span className="font-mono text-xs text-muted">
                      {group.index}
                    </span>

                    <span className="h-px w-8 bg-border transition-all duration-300 group-hover:w-12 group-hover:bg-ink/30" />
                  </div>

                  {/* Group title */}
                  <div className="mb-8 lg:mb-0">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center border border-border bg-paper text-ink transition-colors duration-300 group-hover:border-ink/20">
                        <Icon size={16} strokeWidth={1.6} />
                      </div>

                      <h3 className="text-xl font-medium tracking-[-0.02em] text-ink">
                        {group.label}
                      </h3>
                    </div>

                    <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
                      {group.description}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 lg:max-w-3xl">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="border border-border bg-paper px-3.5 py-2 text-[13px] leading-none text-ink transition-all duration-200 hover:border-ink/25 hover:bg-surface"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom note */}
        <Reveal delay={0.2}>
          <div className="flex flex-col gap-6 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-6 text-muted">
              My strongest advantage is not knowing every tool. It is being
              able to move between product conversations and technical
              conversations without losing sight of the problem.
            </p>

            <a
              href="#Work"
              className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-ink"
            >
              See the work
              <LuArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Skill;