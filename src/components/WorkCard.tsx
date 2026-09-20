// src/components/WorkCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import Pill from "@/components/ui/Pill";
import Reveal from "@/components/ui/Reveal";
import type { Project } from "./Work";

type WorkCardProps = {
  project: Project;
  featured?: boolean;
  reverse?: boolean;
};

const WorkCard = ({
  project,
  featured = false,
  reverse = false,
}: WorkCardProps) => {
  const {
    title,
    description,
    image,
    techStack,
    link,
    role,
    problem,
    highlights,
    githubUrl,
  } = project;

  return (
    <Reveal className="group w-full">
      {featured ? (
        <article className="border-y border-border">
          {/* Featured visual */}
          <div className="relative overflow-hidden border-x border-border bg-paper-raised">
            <div className="relative aspect-[16/8.5] w-full">
              {image ? (
                <Image
                  src={image}
                  alt={title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 1200px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                />
              ) : (
                <div className="absolute inset-0 bg-paper-raised" />
              )}

              {/* Visual index */}
              <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                <span className="inline-flex items-center border border-paper/30 bg-ink/80 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-paper backdrop-blur-sm">
                  Featured project
                </span>
              </div>

              {/* Open project */}
              {link && (
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${title}`}
                  className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center border border-paper/30 bg-ink/85 text-paper backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-1 sm:bottom-7 sm:right-7"
                >
                  <FiArrowUpRight size={19} />
                </Link>
              )}
            </div>
          </div>

          {/* Featured content */}
          <div className="grid grid-cols-1 gap-10 border-x border-b border-border px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:px-10 lg:py-12 xl:grid-cols-[minmax(0,1fr)_340px]">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />
                {role && <span className="eyebrow">{role}</span>}
              </div>

              <div className="flex flex-col gap-5">
                <h3 className="max-w-2xl text-3xl font-medium tracking-[-0.035em] text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
                  {title}
                </h3>

                {problem && (
                  <p className="max-w-2xl text-base leading-7 text-muted">
                    <span className="font-medium text-ink">
                      The problem:{" "}
                    </span>
                    {problem}
                  </p>
                )}

                <p className="max-w-2xl text-base leading-7 text-muted">
                  {description}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-8 border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              {highlights && highlights.length > 0 && (
                <div>
                  <p className="eyebrow mb-4">Highlights</p>

                  <ul className="space-y-3">
                    {highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="flex gap-3 text-sm leading-6 text-ink-soft"
                      >
                        <span
                          className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {techStack && techStack.length > 0 && (
                <div>
                  <p className="eyebrow mb-4">Built with</p>

                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, index) => (
                      <Pill key={index}>{tech}</Pill>
                    ))}
                  </div>
                </div>
              )}

              {githubUrl && (
                <Link
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
                >
                  <FiGithub size={16} />
                  View source
                  <FiArrowUpRight size={14} />
                </Link>
              )}
            </div>
          </div>
        </article>
      ) : (
        <article
          className={`grid grid-cols-1 border-t border-border py-8 md:grid-cols-5 md:items-center md:gap-8 md:py-10 ${
            reverse ? "md:[&>div:first-child]:order-2" : ""
          }`}
        >
          {/* Project image */}
          <div className="relative mb-7 aspect-[16/10] overflow-hidden bg-paper-raised md:col-span-2 md:mb-0">
            {image ? (
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-600 ease-out group-hover:scale-[1.025]"
              />
            ) : (
              <div className="absolute inset-0 bg-paper-raised" />
            )}

            <div className="absolute inset-0 border border-ink/5" />
          </div>

          {/* Project content */}
          <div className="flex flex-col gap-5 md:col-span-3">
            <div className="flex items-start justify-between gap-6">
              <div>
                {role && <p className="eyebrow mb-3">{role}</p>}

                <h3 className="text-2xl font-medium tracking-[-0.025em] text-ink sm:text-[1.7rem]">
                  {title}
                </h3>
              </div>

              <div className="flex shrink-0 items-center gap-3 pt-1 text-muted">
                {githubUrl && (
                  <Link
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title} on GitHub`}
                    className="transition-colors hover:text-ink"
                  >
                    <FiGithub size={17} />
                  </Link>
                )}

                {link && (
                  <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${title}`}
                    className="transition-colors hover:text-ink"
                  >
                    <FiArrowUpRight size={20} />
                  </Link>
                )}
              </div>
            </div>

            {problem && (
              <p className="max-w-2xl text-sm leading-6 text-muted">
                <span className="font-medium text-ink-soft">
                  The problem:{" "}
                </span>
                {problem}
              </p>
            )}

            <p className="max-w-2xl text-sm leading-6 text-muted">
              {description}
            </p>

            {highlights && highlights.length > 0 && (
              <div className="grid gap-2 sm:grid-cols-2">
                {highlights.slice(0, 4).map((highlight, index) => (
                  <div
                    key={index}
                    className="flex gap-2 text-sm leading-6 text-ink-soft"
                  >
                    <span
                      className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            )}

            {techStack && techStack.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {techStack.map((tech, index) => (
                  <Pill key={index}>{tech}</Pill>
                ))}
              </div>
            )}
          </div>
        </article>
      )}
    </Reveal>
  );
};

export default WorkCard;