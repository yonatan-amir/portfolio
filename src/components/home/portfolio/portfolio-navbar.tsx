"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { Reenie_Beanie } from "next/font/google";

import { navItems, socialLinks } from "@/components/home/portfolio/portfolio-data";

const reenieBeanie = Reenie_Beanie({
  subsets: ["latin"],
  weight: "400",
});

type BrandMarkProps = {
  containerClass: string;
  textClassName: string;
  accentLeftClassName: string;
};

function BrandMark({
  containerClass,
  textClassName,
  accentLeftClassName,
}: BrandMarkProps) {
  return (
    <div className={containerClass}>
      <span
        aria-hidden="true"
        className={`${reenieBeanie.className} absolute ${accentLeftClassName} top-1/2 -translate-y-1/2 ${textClassName} leading-none tracking-[0.01em] text-[var(--color-accent-coral)]`}
      >
        yonatan
      </span>
      <span
        className={`${reenieBeanie.className} absolute left-0 top-1/2 -translate-y-1/2 ${textClassName} leading-none tracking-[0.01em] text-transparent`}
        style={{
          textShadow:
            "1.05px 0 0 var(--color-ink), -1.05px 0 0 var(--color-ink), 0 1.05px 0 var(--color-ink), 0 -1.05px 0 var(--color-ink)",
        }}
      >
        yonatan
      </span>
    </div>
  );
}

export function PortfolioNavbar() {
  return (
    <motion.header
      className="px-3 pt-4 sm:px-7 sm:pt-8 md:px-6 md:pt-6 lg:px-10 lg:pt-14"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto max-w-[68rem] rounded-[1.75rem] bg-transparent p-0">
        <div className="rounded-[0.95rem] border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-2 py-1.5 shadow-[0_10px_35px_rgba(34,29,25,0.05)] backdrop-blur-[10px] sm:px-5 sm:py-3 md:px-3 md:py-2">
          <div className="flex flex-row items-center justify-between gap-2 md:hidden">
            <div className="flex min-w-0 items-center">
              <Link href="#home" className="flex h-7 items-center">
                <div className="relative h-5.5 w-[6.1rem] overflow-hidden">
                  <BrandMark
                    containerClass="absolute inset-0"
                    textClassName="text-[1.3rem]"
                    accentLeftClassName="left-[7px]"
                  />
                </div>
              </Link>
            </div>

            <nav aria-label="Primary" className="flex flex-1 items-center justify-center gap-x-1.25">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative pb-1 text-[0.52rem] font-medium tracking-[0.07em] text-[var(--color-muted)] transition after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[var(--color-ink)] after:transition-all hover:text-[var(--color-ink)] hover:after:w-full"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex min-w-0 items-center justify-end gap-1">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="inline-flex h-7.5 items-center gap-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-1.5 text-[0.54rem] font-medium tracking-[0.06em] text-[var(--color-muted)] transition hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-strong)] hover:text-[var(--color-ink)]"
                  >
                    <Icon className="h-3 w-3" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="hidden flex-row items-center justify-between gap-2 md:flex lg:hidden md:gap-4">
            <div className="flex min-w-0 items-center gap-2 md:gap-3">
              <Link href="#home" className="flex h-8 items-center">
                <div className="relative h-6 w-[6.4rem] overflow-hidden sm:h-7 sm:w-[9.75rem] md:w-[9.25rem] lg:w-[10.75rem]">
                  <BrandMark
                    containerClass="absolute inset-0"
                    textClassName="text-[1.45rem] sm:text-[2.15rem] md:text-[1.8rem]"
                    accentLeftClassName="left-[7px]"
                  />
                </div>
              </Link>

              <span className="hidden h-7 w-px bg-black/8 sm:block md:block" />
              <span className="hidden pt-0.5 text-[0.66rem] uppercase tracking-[0.24em] text-[var(--color-muted)]/70 lg:block">
                developer portfolio
              </span>
            </div>

            <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-2.5 md:gap-3 lg:gap-5">
              <nav
                aria-label="Primary"
                className="flex min-w-0 flex-1 items-center justify-between gap-0 sm:flex-none sm:justify-end sm:gap-x-1.5 sm:gap-y-1 md:gap-4 lg:gap-5"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative pb-1 text-[0.52rem] font-medium tracking-[0.07em] text-[var(--color-muted)] transition after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[var(--color-ink)] after:transition-all hover:text-[var(--color-ink)] hover:after:w-full sm:text-[0.66rem] md:text-[0.62rem] lg:text-[0.66rem]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center justify-end gap-2 sm:gap-2.5">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      className="inline-flex h-7.5 items-center gap-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-1.75 text-[0.54rem] font-medium tracking-[0.06em] text-[var(--color-muted)] transition hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-strong)] hover:text-[var(--color-ink)] sm:h-9 sm:px-2.5 sm:text-[0.68rem] md:h-8 md:px-2 md:text-[0.6rem] lg:text-[0.64rem]"
                    >
                      <Icon className="h-3.5 w-3.5 sm:h-3.5 sm:w-3.5 md:h-3 md:w-3" />
                      <span className="hidden sm:inline">{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-row items-center justify-between gap-6">
            <div className="flex min-w-0 items-center gap-3">
              <Link href="#home" className="flex h-11 items-center">
                <div className="relative h-9 w-[10.75rem]">
                  <BrandMark
                    containerClass="absolute inset-0"
                    textClassName="text-[2.45rem]"
                    accentLeftClassName="left-[10px]"
                  />
                </div>
              </Link>

              <span className="hidden h-7 w-px bg-black/8 md:block" />
              <span className="hidden pt-0.5 text-[0.66rem] uppercase tracking-[0.24em] text-[var(--color-muted)]/70 lg:block">
                developer portfolio
              </span>
            </div>

            <div className="flex min-w-0 items-center justify-end gap-5">
              <nav aria-label="Primary" className="flex min-w-0 items-center justify-end gap-5">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative pb-1 text-[0.72rem] font-medium tracking-[0.1em] text-[var(--color-muted)] transition after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[var(--color-ink)] after:transition-all hover:text-[var(--color-ink)] hover:after:w-full"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center justify-end gap-2">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      className="inline-flex h-10 items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-3 text-[0.72rem] font-medium tracking-[0.08em] text-[var(--color-muted)] transition hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-strong)] hover:text-[var(--color-ink)]"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
