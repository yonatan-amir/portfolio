"use client";

import Image from "next/image";

import { MapPin } from "lucide-react";

import { cn } from "@/lib/utils";

const heroChips = [
  "Berlin",
  "Strong Foundations",
  "Real-World Products",
] as const;

type PortfolioHeroProps = {
  className?: string;
};

export function PortfolioHero({ className }: PortfolioHeroProps) {
  return (
    <section
      id="home"
      className={cn(
        "relative px-4 pb-12 pt-5 sm:px-7 sm:pb-16 sm:pt-8 md:px-8 md:pb-16 md:pt-8 lg:px-10 lg:pb-16 lg:pt-16",
        className,
      )}
    >
      <div className={cn("mx-auto w-full max-w-[68rem]", "relative overflow-hidden rounded-[1.75rem]")}>
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[54rem] -translate-x-1/2 -translate-y-1/2 rounded-full",
            "bg-[radial-gradient(ellipse_at_center,rgba(36,33,31,0.08),transparent_58%)] blur-[42px]",
          )}
        />

        <div className="relative px-0 py-0">
          <div className="grid items-center gap-8 sm:gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="flex flex-col gap-5 sm:gap-6 lg:gap-9">
              <div className="flex flex-wrap items-center gap-2 text-[0.64rem] uppercase tracking-[0.2em] text-[var(--color-muted)]/70 sm:text-[0.66rem] md:text-[0.68rem]">
                {heroChips.map((chip) => (
                  <span key={chip} className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-3 py-1">
                    {chip}
                  </span>
                ))}
              </div>

              <div className="max-w-3xl">
                <h1 className="text-balance text-[clamp(2.2rem,12vw,5.7rem)] leading-[0.92] tracking-[-0.08em] text-[var(--color-ink)] sm:text-[clamp(2.5rem,6.4vw,5.7rem)] md:text-[clamp(2.2rem,5vw,4.2rem)] lg:text-[clamp(2.9rem,7.2vw,5.7rem)]">
                  Yonatan Amir
                </h1>
                <p className="mt-4 max-w-2xl text-[0.92rem] leading-7 text-[var(--color-muted)] sm:text-[0.98rem] md:text-[1rem] lg:mt-6 lg:text-[1.1rem] lg:leading-8">
                  Developer based in Berlin, focused on stronger foundations, backend work,
                  systems thinking, and platform-oriented growth. I build real products around
                  music, operations, and the workflows that I am passionate about.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3 lg:items-center lg:gap-5">
                <div className="lg:col-span-2">
                  <p className="text-[0.66rem] uppercase tracking-[0.18em] text-[var(--color-muted)]/60 sm:text-[0.68rem] md:text-[0.7rem]">
                    Current direction
                  </p>
                  <p className="mt-3 max-w-xl text-[0.88rem] leading-7 text-[var(--color-ink)]/84 sm:text-[0.9rem] md:text-[0.92rem]">
                    Deepening my engineering foundations through 42 Berlin while continuing to build software for real-world use cases.
                  </p>
                </div>

                <div className="inline-flex w-fit items-center gap-2 self-center justify-self-start rounded-[1.15rem] border border-[var(--color-border)] bg-[var(--color-cream)]/40 px-3.5 py-2.5 text-[0.82rem] text-[var(--color-muted)] sm:px-4 sm:py-3 md:px-4 md:py-3">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-[var(--color-accent-coral)]" />
                  <span className="leading-none whitespace-nowrap">Berlin, Germany</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-1 sm:gap-3">
                <a
                  href="#projects"
                  className="view-projects-cta inline-flex items-center justify-center rounded-full border px-4 py-2.5 text-[0.88rem] font-medium transition hover:-translate-y-0.5 sm:px-4 sm:py-2.5 md:px-5 md:py-3"
                >
                  View Projects
                </a>
                <a
                  href="https://github.com/yonatan-amir"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-4 py-2.5 text-[0.88rem] font-medium text-[var(--color-ink)] transition hover:-translate-y-0.5 hover:bg-[var(--color-surface-strong)] sm:px-4 sm:py-2.5 md:px-5 md:py-3"
                >
                  GitHub
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-4 py-2.5 text-[0.88rem] font-medium text-[var(--color-ink)] transition hover:-translate-y-0.5 hover:bg-[var(--color-surface-strong)] sm:px-4 sm:py-2.5 md:px-5 md:py-3"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[17rem] pb-2 pr-2 sm:max-w-[18rem] md:max-w-[16rem] md:pb-2 md:pr-2 lg:mr-2 lg:max-w-[26rem]">
              <div className="relative overflow-clip rounded-3xl border border-[var(--color-border)] shadow-[0_25px_70px_rgba(34,29,25,0.06)]">
                <Image
                  src="/hero-portrait.png"
                  alt="Yonatan Amir wearing headphones"
                  width={1024}
                  height={1536}
                  priority
                  className="h-full w-full translate-y-3 object-cover object-top md:translate-y-2 lg:translate-y-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
