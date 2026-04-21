"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Reenie_Beanie } from "next/font/google";

const reenieBeanie = Reenie_Beanie({
  subsets: ["latin"],
  weight: "400",
});

const navItems = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function SiteNavbar() {
  return (
    <motion.header
      className="px-5 pt-10 sm:px-7 sm:pt-12 lg:px-10 lg:pt-14"
      initial={{ y: -34, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.65, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="rounded-[1.75rem] bg-transparent p-8">
        <div className="mx-auto flex max-w-[68rem] items-center justify-between rounded-[0.95rem] bg-white/72 px-6 py-3 shadow-[0_10px_35px_rgba(34,29,25,0.05)]">
          <div className="flex items-center gap-5">
            <Link href="/" className="flex h-11 items-center">
              <div className="relative h-9 w-[10.75rem]">
                <span
                  aria-hidden="true"
                  className={`${reenieBeanie.className} absolute left-[10px] top-1/2 -translate-y-1/2 text-[2.45rem] leading-none tracking-[0.01em] text-[var(--color-accent-coral)]`}
                >
                  yonatan
                </span>
                <span
                  className={`${reenieBeanie.className} absolute left-0 top-1/2 -translate-y-1/2 text-[2.45rem] leading-none tracking-[0.01em] text-transparent`}
                  style={{
                    textShadow:
                      "1.05px 0 0 var(--color-ink), -1.05px 0 0 var(--color-ink), 0 1.05px 0 var(--color-ink), 0 -1.05px 0 var(--color-ink)",
                  }}
                >
                  yonatan
                </span>
              </div>
            </Link>
            <span className="hidden h-7 w-px bg-black/8 md:block" />
            <span className="hidden pt-0.5 text-[0.66rem] uppercase tracking-[0.24em] text-[var(--color-muted)]/70 md:block">
              creative developer portfolio
            </span>
          </div>

          <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative pb-1 text-[0.72rem] font-medium tracking-[0.1em] text-[var(--color-muted)] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[var(--color-ink)] after:transition-all hover:text-[var(--color-ink)] hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
