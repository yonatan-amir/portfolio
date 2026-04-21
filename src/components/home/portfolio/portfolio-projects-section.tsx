"use client";

import { SectionShell } from "@/components/home/portfolio/portfolio-section-shell";
import { ProjectCard } from "@/components/home/portfolio/portfolio-project-card";
import { projects } from "@/components/home/portfolio/portfolio-data";

export function PortfolioProjectsSection() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Selected work"
      title="Real projects built for real use."
      description="A focused set of projects that reflect my current direction: building real products, shipping consistently, and developing stronger engineering depth."
    >
      <div className="grid gap-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} {...project} />
        ))}
      </div>
    </SectionShell>
  );
}
