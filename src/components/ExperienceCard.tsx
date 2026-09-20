// src/components/ExperienceCard.tsx
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

interface ExperienceCardProps {
  logo: string;
  company: string;
  role: string;
  date: string;
  bullets: string[];
}

export default function ExperienceCard({
  logo,
  company,
  role,
  date,
  bullets,
}: ExperienceCardProps) {
  return (
    <Reveal className="group w-full">
      <article className="grid grid-cols-1 gap-6 border-t border-border py-8 md:grid-cols-[150px_minmax(0,1fr)_170px] md:gap-8 md:py-10">
        {/* Company */}
        <div className="flex items-start gap-4 md:block">
          {logo && (
            <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden border border-border bg-paper-raised md:mb-5">
              <Image
                src={logo}
                alt={`${company} logo`}
                width={44}
                height={44}
                className="h-full w-full object-contain p-1.5"
              />
            </div>
          )}

          <div>
            <p className="text-sm font-medium text-ink">{company}</p>

            <span className="mt-1 block text-xs uppercase tracking-[0.14em] text-muted md:hidden">
              {date}
            </span>
          </div>
        </div>

        {/* Role + responsibilities */}
        <div className="min-w-0">
          <h3 className="text-xl font-medium tracking-[-0.02em] text-ink sm:text-2xl">
            {role}
          </h3>

          {bullets.length > 0 && (
            <ul className="mt-5 max-w-2xl space-y-3">
              {bullets.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-sm leading-6 text-muted sm:text-[15px]"
                >
                  <span
                    className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Date */}
        <div className="hidden text-right md:block">
          <span className="eyebrow whitespace-nowrap">{date}</span>
        </div>
      </article>
    </Reveal>
  );
}