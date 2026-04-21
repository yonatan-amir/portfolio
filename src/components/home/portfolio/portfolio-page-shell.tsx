"use client";

import { ArrowUp } from "lucide-react";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { PortfolioNavbar } from "@/components/home/portfolio/portfolio-navbar";
import { PortfolioHero } from "@/components/home/portfolio/portfolio-hero";
import { PortfolioAboutSection } from "@/components/home/portfolio/portfolio-about-section";
import { PortfolioProjectsSection } from "@/components/home/portfolio/portfolio-projects-section";
import { PortfolioContactSection } from "@/components/home/portfolio/portfolio-contact-section";

// Page composition stays here so the route entrypoint can remain thin.
export function PortfolioPageShell() {
  return (
    <div className="pb-10">
      <ThemeToggle className="fixed bottom-5 left-5 z-50" />
      <PortfolioNavbar />
      <PortfolioHero />
      <PortfolioProjectsSection />
      <PortfolioAboutSection />
      <PortfolioContactSection />
      <a
        href="#home"
        aria-label="Back to top"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center text-[var(--color-ink)] transition hover:-translate-y-0.5 hover:text-[var(--color-muted)]"
      >
        <ArrowUp className="h-5 w-5" />
      </a>
    </div>
  );
}
