# Portfolio module

This folder contains the portfolio page broken into small, reusable pieces.

## Structure

- `portfolio-page.tsx` - thin entrypoint that renders the page shell
- `portfolio-page-shell.tsx` - composes the navbar, hero, sections, and floating controls
- `portfolio-navbar.tsx` - responsive navbar only
- `portfolio-hero.tsx` - hero section only
- `portfolio-about-section.tsx` - about section only
- `portfolio-projects-section.tsx` - projects section only
- `portfolio-contact-section.tsx` - contact section only

## Shared pieces

- `portfolio-data.ts` - all static copy, links, and project metadata
- `portfolio-section-shell.tsx` - shared section header/layout wrapper
- `portfolio-project-card.tsx` - reusable project card
- `portfolio-tag.tsx` - small tag pill used by projects

## Editing rule

Prefer changing the section-specific file first. Only touch the shared primitives when the same pattern needs to change in multiple sections.
