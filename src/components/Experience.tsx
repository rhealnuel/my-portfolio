// src/components/Experience.tsx
"use client";

import React, { useEffect, useState } from "react";
import { LuArrowDown, LuArrowUpRight, LuBriefcaseBusiness } from "react-icons/lu";
import ExperienceCard from "./ExperienceCard";
import Spinner from "./spinner";
import Reveal from "@/components/ui/Reveal";

type Experience = {
  _id?: string;
  logo: string;
  company: string;
  role: string;
  date: string;
  bullets: string[];
};

const VISIBLE_COUNT = 3;

const Experience = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function fetchExperiences() {
      try {
        const res = await fetch("/api/dashboard/experience");

        if (!res.ok) {
          throw new Error("Failed to fetch experience");
        }

        const data = await res.json();
        setExperiences(data.experiences || []);
      } catch {
        setExperiences([]);
      } finally {
        setLoading(false);
      }
    }

    fetchExperiences();
  }, []);

  const visibleExperiences = showAll
    ? experiences
    : experiences.slice(0, VISIBLE_COUNT);

  return (
    <section
      id="Experience"
      className="w-full border-y border-border bg-paper py-24 sm:py-28 lg:py-36"
    >
      <div className="container-page">
        {/* Section intro */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[150px_minmax(0,1fr)_280px] xl:grid-cols-[170px_minmax(0,1fr)_340px]">
          <Reveal>
            <div className="flex items-center gap-3 lg:block">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                03
              </span>

              <span className="hidden h-px w-8 bg-border lg:mt-4 lg:block" />

              <p className="mt-0 text-sm text-muted lg:mt-4">
                Experience
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="max-w-4xl">
              <h2 className="text-[clamp(2.5rem,5vw,5.25rem)] font-medium leading-[0.94] tracking-[-0.055em] text-ink">
                Building software,
                <br />
                <span className="text-muted">
                  learning how products move.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                My experience has been rooted in software engineering, but
                working closely with products and teams has increasingly shaped
                how I think about users, priorities, delivery, and outcomes.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.14} className="lg:pt-2">
            <div className="border-l border-border pl-5 lg:pl-6">
              <div className="flex items-center gap-2 text-muted">
                <LuBriefcaseBusiness size={15} strokeWidth={1.6} />

                <span className="font-mono text-[10px] uppercase tracking-[0.18em]">
                  Career path
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-ink">
                Software Engineering
                <br />
                ↓
                <br />
                Technical Leadership
                <br />
                ↓
                <br />
                Product Management
              </p>
            </div>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="mt-20 lg:mt-28">
          <div className="mb-5 flex items-center justify-between border-t border-border pt-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              Selected roles
            </span>

            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              {experiences.length > 0
                ? `${experiences.length} ${
                    experiences.length === 1 ? "role" : "roles"
                  }`
                : "Experience"}
            </span>
          </div>

          {loading && (
            <div className="flex min-h-[240px] items-center justify-center border-y border-border">
              <Spinner />
            </div>
          )}

          {!loading && experiences.length === 0 && (
            <div className="border-y border-border py-16">
              <p className="text-sm text-muted">
                No experience entries yet. Add some from the dashboard.
              </p>
            </div>
          )}

          {!loading && experiences.length > 0 && (
            <div className="flex flex-col">
              {visibleExperiences.map((exp, index) => (
                <Reveal
                  key={exp._id ?? `${exp.company}-${index}`}
                  delay={index * 0.06}
                  className="border-b border-border"
                >
                  <div className="group relative py-8 sm:py-10 lg:py-12">
                    {/* Timeline marker */}
                    <div className="absolute left-0 top-0 hidden h-full w-px bg-border lg:block">
                      <span className="absolute -left-[3px] top-12 h-[7px] w-[7px] rounded-full bg-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>

                    <div className="lg:pl-8">
                      <ExperienceCard
                        logo={exp.logo}
                        company={exp.company}
                        role={exp.role}
                        date={exp.date}
                        bullets={exp.bullets}
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {/* Show more */}
          {!loading && experiences.length > VISIBLE_COUNT && (
            <div className="flex justify-center pt-8">
              <button
                type="button"
                onClick={() => setShowAll((current) => !current)}
                className="group inline-flex items-center gap-3 border border-border px-5 py-3 text-sm font-medium text-ink transition-all duration-200 hover:border-ink hover:bg-paper-raised"
              >
                <span>
                  {showAll
                    ? "Show less"
                    : `Show ${experiences.length - VISIBLE_COUNT} more`}
                </span>

                <LuArrowUpRight
                  size={15}
                  className={`transition-transform duration-300 ${
                    showAll
                      ? "rotate-90"
                      : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  }`}
                />
              </button>
            </div>
          )}
        </div>

        {/* Closing statement */}
        {!loading && experiences.length > 0 && (
          <Reveal delay={0.18}>
            <div className="mt-14 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-2xl text-sm leading-6 text-muted">
                Each role has added another layer to how I approach building
                products, from implementation and technical decisions to
                collaboration, delivery, and understanding what is worth
                building.
              </p>

              <a
                href="#Contact"
                className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-ink"
              >
                Start a conversation
                <LuArrowDown
                  size={15}
                  className="rotate-[-45deg] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default Experience;