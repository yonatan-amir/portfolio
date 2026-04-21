"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { SectionShell, sectionVariants } from "@/components/home/portfolio/portfolio-section-shell";

const contactLinks = [
  {
    href: "https://github.com/yonatan-amir",
    label: "GitHub",
    value: "github.com/yonatan-amir",
  },
  {
    href: "https://linkedin.com/in/yamir1",
    label: "LinkedIn",
    value: "linkedin.com/in/yamir1",
  },
  {
    href: "mailto:jonathanamir1@gmail.com",
    label: "Email",
    value: "jonathanamir1@gmail.com",
  },
] as const;

export function PortfolioContactSection() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Open to conversations about product and engineering."
      description="If you want to discuss work, backend systems, infrastructure, or where I’m heading next, feel free to reach out."
    >
      <motion.div
        variants={sectionVariants}
        className="overflow-hidden rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-paper)]/76 shadow-[0_18px_45px_rgba(34,29,25,0.05)] backdrop-blur-[10px]"
      >
        <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr] md:divide-x md:divide-black/8">
          <div className="flex h-full flex-col p-5 sm:p-6">
            <p className="text-[0.7rem] uppercase tracking-[0.24em] text-[var(--color-muted)]/60">
              Links
            </p>
            <p className="mt-3 max-w-md text-[0.92rem] leading-7 text-[var(--color-muted)] sm:text-[0.98rem]">
              Reach out directly through whichever channel feels easiest.
            </p>
            <div className="mt-5 grid gap-3">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="group flex w-full items-center justify-between rounded-[1.15rem] border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-4 py-4 transition hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-strong)]"
                >
                  <div className="min-w-0">
                    <p className="text-[0.66rem] uppercase tracking-[0.2em] text-[var(--color-muted)]/60">
                      {item.label}
                    </p>
                    <p className="mt-1 break-all text-[0.88rem] leading-6 text-[var(--color-ink)]/88">
                      {item.value}
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--color-muted)] transition group-hover:text-[var(--color-ink)]" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex h-full flex-col bg-[var(--color-cream)]/70 p-5 sm:p-6">
            <p className="text-[0.7rem] uppercase tracking-[0.24em] text-[var(--color-muted)]/60">
              What to expect
            </p>
            <p className="mt-3 max-w-md text-[0.9rem] leading-7 text-[var(--color-muted)] sm:text-[0.95rem]">
              Clear communication, careful execution, and a focus on building things that hold up over time.
            </p>
          </div>
        </div>
      </motion.div>
    </SectionShell>
  );
}
