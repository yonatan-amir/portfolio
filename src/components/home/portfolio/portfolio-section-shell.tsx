"use client";

import type { ReactNode, RefObject } from "react";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const containerClass = "mx-auto w-full max-w-[68rem]";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
  sectionRef?: RefObject<HTMLElement | null>;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  sectionRef,
}: SectionShellProps) {
  return (
    <motion.section
      ref={sectionRef}
      id={id}
      className={cn("px-5 py-12 sm:px-7 sm:py-14 md:px-8 md:py-16 lg:px-10 lg:py-16", className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={sectionVariants}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={cn(containerClass, "scroll-mt-28 sm:scroll-mt-32")}>
        <div className="mb-8 flex flex-col gap-4 border-t border-[var(--color-border)] pt-5 sm:mb-10 sm:pt-6 md:pt-7">
          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--color-muted)]/70 md:text-[0.7rem]">
            {eyebrow}
          </p>
          <div className="max-w-3xl">
            <h2 className="text-balance text-[clamp(1.9rem,3.6vw,3.4rem)] leading-[0.98] tracking-[-0.055em] text-[var(--color-ink)] md:text-[clamp(1.8rem,3vw,3rem)]">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-[0.96rem] leading-7 text-[var(--color-muted)] sm:text-[1rem] md:text-[0.98rem]">
              {description}
            </p>
          </div>
        </div>
        {children}
      </div>
    </motion.section>
  );
}

export { sectionVariants, containerClass };
