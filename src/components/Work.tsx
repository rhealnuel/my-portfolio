// src/components/Work.tsx
"use client";

import React, { useEffect, useState } from "react";
import { LuArrowUpRight, LuBoxes, LuSparkles } from "react-icons/lu";
import Reveal from "@/components/ui/Reveal";
import WorkCard from "./WorkCard";
import Spinner from "./spinner";

export type Project = {
  _id?: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  link: string;
  role?: string;
  problem?: string;
  highlights?: string[];
  githubUrl?: string;
  featured?: boolean;
};

const VISIBLE_COUNT = 4;

const Work = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/dashboard/project");

        if (!res.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await res.json();
        setProjects(data.projects || []);
      } catch {
        setProjects([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, VISIBLE_COUNT);

  const hasExplicitFeatured = projects.some((project) => project.featured);

  return (
    <section
      id="Work"
      className="w-full border-y border-border bg-paper-raised"
    >
      <div className="container-page py-24 sm:py-28 lg:py-36">
        {/* Intro */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[150px_minmax(0,1fr)_280px] xl:grid-cols-[170px_minmax(0,1fr)_340px]">
          <Reveal>
            <div className="flex items-center gap-3 lg:block">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                02
              </span>

              <span className="hidden h-px w-8 bg-border lg:mt-4 lg:block" />

              <p className="mt-0 text-sm text-muted lg:mt-4">Selected work</p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="max-w-4xl">
              <h2 className="text-[clamp(2.5rem,5vw,5.25rem)] font-medium leading-[0.94] tracking-[-0.055em] text-ink">
                Products I&apos;ve
                <br />
                <span className="text-muted">helped bring to life.</span>
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                A selection of products and digital experiences I&apos;ve
                designed, built, collaborated on, and shipped across different
                teams and stages of development.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.14} className="lg:pt-2">
            <div className="border-l border-border pl-5 lg:pl-6">
              <div className="flex items-center gap-2 text-muted">
                <LuBoxes size={15} strokeWidth={1.6} />

                <span className="font-mono text-[10px] uppercase tracking-[0.18em]">
                  What I care about
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-ink">
                Useful products.
                <br />
                Clear interfaces.
                <br />
                Thoughtful systems.
                <br />
                Software that ships.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Project archive */}
        <div className="mt-20 lg:mt-28">
          <div className="mb-5 flex items-center justify-between border-t border-border pt-4">
            <div className="flex items-center gap-2">
              <LuSparkles
                size={13}
                strokeWidth={1.6}
                className="text-muted"
              />

              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                Selected projects
              </span>
            </div>

            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              {projects.length > 0
                ? `${projects.length} ${
                    projects.length === 1 ? "project" : "projects"
                  }`
                : "Work"}
            </span>
          </div>

          {loading && (
            <div className="flex min-h-[320px] items-center justify-center border-y border-border">
              <Spinner />
            </div>
          )}

          {!loading && projects.length === 0 && (
            <div className="border-y border-border py-16">
              <p className="text-sm text-muted">
                No projects yet. Add some from the dashboard.
              </p>
            </div>
          )}

          {!loading && projects.length > 0 && (
            <div className="flex flex-col gap-8">
              {visibleProjects.map((project, index) => {
                const isFeatured = hasExplicitFeatured
                  ? !!project.featured
                  : index === 0;

                return (
                  <Reveal
                    key={project._id ?? `${project.title}-${index}`}
                    delay={index * 0.06}
                    className="w-full"
                  >
                    <div className="relative">
                      {/* Featured marker */}
                      {isFeatured && (
                        <div className="mb-3 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-ink" />

                          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                            Featured
                          </span>
                        </div>
                      )}

                      <WorkCard
                        project={project}
                        featured={isFeatured}
                        reverse={index % 2 === 1}
                      />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          )}

          {/* Show more */}
          {!loading && projects.length > VISIBLE_COUNT && (
            <div className="flex justify-center pt-10">
              <button
                type="button"
                onClick={() => setShowAll((current) => !current)}
                className="group inline-flex items-center gap-3 border border-border px-5 py-3 text-sm font-medium text-ink transition-all duration-200 hover:border-ink hover:bg-paper"
              >
                <span>
                  {showAll
                    ? "Show less"
                    : `Show ${projects.length - VISIBLE_COUNT} more`}
                </span>

                <LuArrowUpRight
                  size={15}
                  className={`transition-transform duration-300 ${
                    showAll
                      ? "rotate-90"
                      : "group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  }`}
                />
              </button>
            </div>
          )}
        </div>

        {/* Closing statement */}
        {!loading && projects.length > 0 && (
          <Reveal delay={0.18}>
            <div className="mt-16 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  More than a tech stack
                </p>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                  The technologies matter, but the real work is understanding
                  the problem, making good trade-offs, collaborating with the
                  team, and getting something useful into people&apos;s hands.
                </p>
              </div>

              <a
                href="#Contact"
                className="group inline-flex w-fit shrink-0 items-center gap-2 text-sm font-medium text-ink"
              >
                Let&apos;s build something
                <LuArrowUpRight
                  size={15}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default Work;