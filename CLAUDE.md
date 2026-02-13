# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

gold.fi — landing site for a self-custody Swiss gold vault app targeting the Indian market. Built on Tether Gold (XAUT).
## Commands

```bash
npm run dev       # Start Vite dev server (port 5173, auto-opens browser)
npm run build     # Production build to dist/
npm run preview   # Preview production build locally
```

No test runner, linter, or type checker is configured.

## Tech Stack

React 18 + Vite + Tailwind CSS 3. Plain JavaScript (JSX), no TypeScript. No routing library — the entire site is a single vertical scroll page with anchor-link navigation (`#about`, `#features`, `#download`).

## Architecture

`App.jsx` assembles sections top-to-bottom: Navbar → Hero → About → Features → Comparison → CTA → Footer. All components are in `src/components/`. Only `Navbar` uses state (mobile menu toggle). No hooks beyond `useState`, no context, no external state management.

Feature and comparison data are defined as `const` arrays within their respective component files, not in separate data modules.

## Styling

- **Tailwind utilities** as the primary styling method, with custom theme extensions in `tailwind.config.js` (gold color palette, font families, shadows, border-radius).
- **Custom CSS classes** in `src/index.css` using `@apply` and raw CSS: `.gold-text` (gradient text), `.btn-gold` / `.btn-outline-gold` (button variants), `.card-light`, `.app-phone-card`.
- **Fonts**: Inter (sans), Space Grotesk (display), IBM Plex Mono (mono) — loaded via Google Fonts in `index.html`.
- **Responsive**: Tailwind breakpoints (`sm:`, `md:`, `lg:`). Comparison component has separate desktop table and mobile card layouts.

## Notable Details

- `public/` contains image assets (mockups, photos) but most are not currently referenced in JSX — the Hero uses inline JSX to simulate phone UI.
- `index.html` references `/favicon.svg` which does not exist in `public/`.
- Package manager is npm (`package-lock.json`).
