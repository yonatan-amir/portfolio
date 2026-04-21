"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { focusPoints } from "@/components/home/portfolio/portfolio-data";
import { SectionShell, sectionVariants } from "@/components/home/portfolio/portfolio-section-shell";

export function PortfolioAboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="Music-minded, systems-focused, and continuously improving."
      description="I work across creative and technical contexts, but I focus on building software that supports real workflows and real users."
    >
      <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr] md:items-stretch">
        <motion.div
          variants={sectionVariants}
          className="relative overflow-hidden rounded-[1.5rem] border border-[var(--color-border)] shadow-[0_18px_45px_rgba(34,29,25,0.05)]"
        >
          <div className="relative aspect-[4/5] bg-[var(--color-paper)] md:h-full md:aspect-auto">
            <Image
              src="/studio.jpeg"
              alt="Yonatan Amir working in his studio"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 42vw, 100vw"
              priority
            />
          </div>
        </motion.div>

        <div className="flex h-full flex-col gap-4">
          <motion.div
            variants={sectionVariants}
            className="flex-1 rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-paper)]/76 p-5 shadow-[0_18px_45px_rgba(34,29,25,0.05)] backdrop-blur-[10px] sm:p-6"
          >
            <p className="text-[0.7rem] uppercase tracking-[0.24em] text-[var(--color-muted)]/60">
              Background
            </p>
            <p className="mt-4 max-w-xl text-[1rem] leading-8 text-[var(--color-muted)] sm:text-[1.05rem]">
              I’m a developer based in Berlin with a background in both music and software. That combination keeps my work practical, detail-oriented, and grounded in how products are actually used.
            </p>
            <p className="mt-4 max-w-xl text-[1rem] leading-8 text-[var(--color-muted)] sm:text-[1.05rem]">
              I’ve built applications tied to real business needs, and I’m currently deepening my engineering foundations through 42 Berlin, with a stronger focus on backend systems and software fundamentals.
            </p>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            className="flex-1 rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-cream)]/62 p-5 shadow-[0_18px_45px_rgba(34,29,25,0.05)] backdrop-blur-[10px] sm:p-6"
          >
            <div className="space-y-3">
              {focusPoints.map((point, index) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-[1rem] border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-4 py-3 text-[0.88rem] leading-6 text-[var(--color-muted)]"
                >
                  <span className="mt-0.5 text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-muted)]/55">
                    0{index + 1}
                  </span>
                  <span className="flex-1">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionShell>
  );
}
