# Surya Vijayakumar — Portfolio

A responsive personal portfolio website built from the Playful Geometric design direction and populated with the supplied resume.

## Profile represented

The website now includes Surya Vijayakumar's profile as an Electrical and Electronics Engineering student at SNS College of Technology, current CGPA of 8.23, contact details, skills, NSS Coordinator experience, Texperia-26 workshop organizer experience, academic history, languages, and achievements including Rotaract executive membership and student engagement leadership.

The portrait embedded in the supplied resume PDF has been extracted into `client/public/assets/resume-asset-000.png` and used in the hero composition.

## Design

The interface combines a cream canvas, ink outlines, purple action color, pink/yellow/mint accents, hard shadows, and expressive Outfit headings with DM Sans body copy. The layout is intentionally personal: a portrait-led hero, resume-derived experience cards, a skills board, an academic timeline, and direct email/phone actions.

## Accessibility and responsiveness

The page uses semantic sections, labeled navigation, keyboard-accessible controls, visible interaction states, meaningful link text, `aria-expanded` FAQ state, and reduced-motion support. Desktop uses asymmetric compositions; mobile collapses the navigation, stacks content, and reduces decoration while preserving the main visual identity.

## Development

```bash
pnpm install
pnpm dev
pnpm run check
pnpm run build
```
