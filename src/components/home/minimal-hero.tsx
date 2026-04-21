"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RevealLine } from "@/components/ui/reveal-line";
import { cn } from "@/lib/utils";

export function MinimalHero() {
  const [revealProgress, setRevealProgress] = useState(0);

  return (
    <section className="relative min-h-screen w-full px-5 py-12 sm:px-7 sm:py-14 lg:px-10 lg:py-16">
      <div className="relative mx-auto flex min-h-[calc(100vh-9rem)] w-full max-w-[68rem] flex-col justify-center overflow-hidden rounded-[1.75rem] bg-transparent">
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full",
            "bg-[radial-gradient(ellipse_at_center,rgba(36,33,31,0.08),transparent_58%)]",
            "blur-[42px]",
          )}
        />

        <div className="relative flex w-full flex-col items-center justify-center px-5 py-12 sm:px-7 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-12 flex w-full justify-center">
            <RevealLine
              className="max-w-[42rem] text-[var(--color-ink)]/72"
              lineOpacity={1 - revealProgress}
              onRevealDelta={(delta) => {
                setRevealProgress((current) => Math.min(1, current + delta));
              }}
            />
          </div>

          <motion.div
            initial={false}
            animate={{
              opacity: revealProgress,
              y: 32 - revealProgress * 32,
            }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={cn("flex w-full flex-col gap-6", revealProgress < 0.08 && "pointer-events-none")}
          >
            <div className="flex w-full flex-col gap-4 md:flex-row md:items-start md:justify-end">
              <p className="pt-1 text-center text-sm uppercase tracking-[0.16em] text-[var(--color-muted)]/82 md:text-left">
                Minimal portfolio
              </p>

              <div className="md:w-3/4">
                <h1 className="max-w-[15ch] text-balance text-center text-[clamp(2.5rem,5.8vw,5.2rem)] leading-[0.95] tracking-[-0.06em] text-[var(--color-ink)] md:text-left">
                  Building thoughtful web experiences with a clean visual voice.
                </h1>

                <p className="mt-6 max-w-[42ch] text-center text-lg leading-8 text-[var(--color-muted)] md:text-left">
                  Frontend-focused portfolio for selected work, technical range, and a clearer
                  path for recruiters to understand what I build and how I think.
                </p>
              </div>
            </div>

            <div className="flex w-full justify-center gap-3 pt-4 md:justify-end">
              <a
                href="#work"
                className="rounded-full border border-black/10 bg-white/70 px-5 py-2.5 text-sm font-medium tracking-[0.02em] text-[var(--color-ink)] transition hover:bg-white"
              >
                View work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-transparent px-5 py-2.5 text-sm font-medium tracking-[0.02em] text-[var(--color-muted)] transition hover:text-[var(--color-ink)]"
              >
                Contact
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
