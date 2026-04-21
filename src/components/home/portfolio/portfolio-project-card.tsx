"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { sectionVariants } from "@/components/home/portfolio/portfolio-section-shell";
import { Tag } from "@/components/home/portfolio/portfolio-tag";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: readonly string[];
  href: string;
  ctaLabel: string;
  imageSrc: string;
  imageAlt: string;
  index: number;
};

export function ProjectCard({
  title,
  description,
  tags,
  href,
  ctaLabel,
  imageSrc,
  imageAlt,
  index,
}: ProjectCardProps) {
  return (
    <motion.article
      variants={sectionVariants}
      className="group rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-paper)]/78 p-5 shadow-[0_18px_45px_rgba(34,29,25,0.05)] backdrop-blur-[10px] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:shadow-[0_22px_55px_rgba(34,29,25,0.08)] sm:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.24em] text-[var(--color-muted)]/60">
            0{index + 1}
          </p>
          <h3 className="mt-3 text-[1.35rem] leading-tight tracking-[-0.04em] text-[var(--color-ink)] sm:text-[1.55rem]">
            {title}
          </h3>
        </div>
        <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-2 text-[var(--color-ink)]/72 transition group-hover:bg-[var(--color-surface-strong)]">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <div className="mt-5 overflow-hidden rounded-[1.1rem] border border-[var(--color-border)] bg-[var(--color-cream)]/60">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1400}
          height={875}
          className="h-full w-full object-cover object-top"
        />
      </div>

      <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-[var(--color-muted)] sm:text-[1rem]">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <div className="mt-6">
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-4 py-2 text-sm font-medium tracking-[0.02em] text-[var(--color-ink)] transition hover:bg-[var(--color-surface-strong)] hover:shadow-[0_10px_20px_rgba(34,29,25,0.06)]"
        >
          {ctaLabel}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </motion.article>
  );
}
