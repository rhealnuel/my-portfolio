// src/components/Contact.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { LuArrowUpRight, LuGithub, LuMail } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";
import Reveal from "@/components/ui/Reveal";

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

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSuccess(null);
    setError(null);
    setSending(true);

    const form = e.currentTarget;

    const name = (
      form.elements.namedItem("name") as HTMLInputElement
    ).value;

    const email = (
      form.elements.namedItem("email") as HTMLInputElement
    ).value;

    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    ).value;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (res.ok) {
        setSuccess("Message sent. I’ll get back to you shortly.");
        form.reset();
      } else {
        const json = await res.json();

        setError(
          json.error || "Something went wrong. Please try again."
        );
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="Contact"
      className="w-full bg-ink text-paper"
    >
      <div className="container-page py-24 sm:py-28 lg:py-36">
        {/* Top label */}
        <Reveal>
          <div className="flex items-center justify-between border-t border-paper/15 pt-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">
              05
            </span>

            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/40">
              Contact
            </span>
          </div>
        </Reveal>

        {/* Main content */}
        <div className="mt-16 grid grid-cols-1 gap-16 lg:mt-24 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.7fr)] lg:gap-24 xl:gap-32">
          {/* Statement */}
          <div className="flex flex-col justify-between">
            <div>
              <Reveal delay={0.05}>
                <p className="mb-6 max-w-sm text-sm leading-6 text-paper/50">
                  Product management, software, collaboration, or something
                  worth building from scratch.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="max-w-4xl text-[clamp(3.25rem,7vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.065em] text-balance">
                  Let&apos;s make
                  <br />
                  something
                  <br />
                  <span className="text-paper/45">useful.</span>
                </h2>
              </Reveal>
            </div>

            {/* Contact details */}
            <Reveal
              delay={0.18}
              className="mt-14 lg:mt-20"
            >
              <div className="border-t border-paper/15 pt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/40">
                  Reach me directly
                </p>

                <a
                  href="mailto:kawekwuneemmanuel2001@gmail.com"
                  className="group mt-4 flex w-fit items-center gap-2 text-base text-paper transition-colors hover:text-paper/70 sm:text-lg"
                >
                  <LuMail size={17} strokeWidth={1.5} />

                  <span>
                    kawekwuneemmanuel2001@gmail.com
                  </span>

                  <LuArrowUpRight
                    size={15}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal
            delay={0.12}
            className="lg:pt-3"
          >
            <div className="border-t border-paper/15 pt-6">
              <div className="mb-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/40">
                  Send a message
                </p>

                <p className="mt-3 max-w-md text-sm leading-6 text-paper/50">
                  Tell me what you&apos;re working on, what you&apos;re trying
                  to solve, or where you think we could work together.
                </p>
              </div>

              <form
                className="space-y-7"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-paper/45"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      autoComplete="name"
                      required
                      className="w-full border-0 border-b border-paper/20 bg-transparent px-0 py-3 text-sm text-paper outline-none transition-colors placeholder:text-paper/25 focus:border-paper/60"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-paper/45"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                      className="w-full border-0 border-b border-paper/20 bg-transparent px-0 py-3 text-sm text-paper outline-none transition-colors placeholder:text-paper/25 focus:border-paper/60"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-paper/45"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me a little about what you have in mind..."
                    required
                    className="w-full resize-none border-0 border-b border-paper/20 bg-transparent px-0 py-3 text-sm leading-6 text-paper outline-none transition-colors placeholder:text-paper/25 focus:border-paper/60"
                  />
                </div>

                <div className="flex flex-col gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={sending}
                    className="group inline-flex w-full items-center justify-center gap-3 bg-paper px-5 py-3.5 text-sm font-medium text-ink transition-opacity duration-200 hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <span>
                      {sending ? "Sending..." : "Send message"}
                    </span>

                    {!sending && (
                      <LuArrowUpRight
                        size={16}
                        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    )}
                  </button>

                  {success && (
                    <p
                      role="status"
                      className="text-sm text-emerald-300"
                    >
                      {success}
                    </p>
                  )}

                  {error && (
                    <p
                      role="alert"
                      className="text-sm text-red-300"
                    >
                      {error}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </Reveal>
        </div>

        {/* Socials */}
        {/* <Reveal delay={0.2}>
          <div className="mt-20 flex flex-col gap-6 border-t border-paper/15 pt-6 sm:mt-28 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/40">
              Elsewhere
            </p>

            <div className="flex flex-wrap items-center gap-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex items-center gap-2 text-sm text-paper/50 transition-colors duration-200 hover:text-paper"
                >
                  <Icon size={16} />

                  <span>{label}</span>

                  <LuArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </div>
        </Reveal> */}
      </div>
    </section>
  );
}