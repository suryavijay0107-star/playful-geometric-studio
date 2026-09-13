# Playful Geometric Studio

A polished landing page translating the **Playful Geometric** master prompt into a working, responsive frontend experience.

## Analysis

The brief calls for a frontend design-system integration centered on a stable content grid with energetic decoration layered on top. Its core requirements are centralized tokens, reusable primitives, tactile interactions, responsive behavior, visible accessibility states, and a clear implementation sequence that avoids a large-scale rewrite.

This project uses the generated static scaffold: React 19, TypeScript, Vite, Tailwind 4, and Lucide icons. The experience is intentionally a single-page showcase rather than a full product dashboard, because the brief emphasizes communicating the design language and component system.

## Design decisions

- **Visual direction:** light, optimistic cream canvas with ink outlines, purple actions, pink accents, butter-yellow highlights, and mint success/freshness cues.
- **Typography:** Outfit for expressive display headings, DM Sans for readable body copy, and DM Mono for labels and token-like metadata.
- **Depth:** crisp no-blur hard shadows reinforce the sticker/candy-button language from the prompt.
- **Composition:** a strong asymmetric hero pairs a large message with a geometric composition; later sections alternate between structured grids and more expressive orbit decoration.
- **Interaction:** buttons use tactile press states, cards lift on hover, FAQ items expand with accessible `aria-expanded` state, and the mobile navigation collapses behind a labeled menu control.
- **Motion restraint:** all non-essential motion is gated by `prefers-reduced-motion`.

## Implementation

- `client/src/index.css` contains the centralized token layer and all responsive component styling.
- `client/src/pages/Home.tsx` contains the modular landing page sections: navigation, hero, ticker, feature cards, philosophy/orbit, component showcase, FAQ, CTA, and footer.
- `client/src/App.tsx` keeps the application entry point intentionally small and routes directly to the home experience.
- `client/index.html` includes metadata and the font strategy.

## Accessibility review

The page uses semantic sections, labeled navigation, visible focus-compatible controls, meaningful button text, keyboard-reachable FAQ toggles, `aria-label`/`aria-expanded` attributes where needed, and a reduced-motion media query. Color is supported by labels, shape, typography, and iconography rather than being the only carrier of meaning.

## Responsive review

The layout is mobile-first at the breakpoint level: the two-column hero and philosophy section stack, the navigation becomes a menu, feature cards collapse to one column, and the component showcase becomes vertical. Desktop restores the asymmetric compositions, orbit layout, full navigation, and three-column feature grid.

## Future improvements

A production design-system package could extract the tokens and primitives into versioned modules, add Storybook coverage, automate contrast checks, provide dark-theme mappings, and add visual regression tests for the component states.

## Local development

```bash
pnpm install
pnpm dev
```

Build and typecheck:

```bash
pnpm run check
pnpm run build
```
