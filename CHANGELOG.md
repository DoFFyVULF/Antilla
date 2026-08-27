# Changelog

All notable changes to Café Antilla are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] — 2026-08-27

### Added

- Initial frontend release.
- Next.js 16 App Router, RSC-first, full static export (`output: 'export'`).
- Tailwind CSS v4 with CSS-first `@theme` tokens (no `tailwind.config.ts`).
- Sections: Header, Hero (4-layer parallax + mouse-parallax stickers), Ticker, Story (sticky two-col + polaroids), ParallaxBreak ×2 (h-svh full-bleed), Menu (accessible tablist, cursor-following photo), Gallery (scroll-scrubbed desktop, scroll-snap mobile), Visit (inline SVG map, letter-board hours), Reviews (duplicated marquee), Newsletter (UI stub with stamp-in success), Footer (outline wordmark).
- Hooks: `useLenis` (singleton + ScrollTrigger sync), `useParallax` (GSAP tween, dynamic import), `useMouseParallax` (rAF + lerp, touch/reduced-motion safe), `useReducedMotion`, `useReveal` (IntersectionObserver).
- UI primitives: `Button`/`ButtonLink`, `Stamp`, `Sticker`, `ScallopedDivider`, custom SVG icons (domino, moka, palm, thimble, guava, flamingo, arrow).
- Custom utilities in `globals.css`: `shadow-hard(-lg|-stamp)`, `rotate-sticker(-1|-2|-3|-neg4)`, `tape-top`, `border-scalloped-(down|up)`, `link-underline`, `reveal`, `reveal-clip`, `btn-hard`, `marquee-track(-slow)`, `stamp-in`, `text-outline(-paper)`.
- JSON-LD `CafeOrCoffeeShop` schema, `sitemap.xml`, `robots.txt`, branded 404.
- `og-image.png` (1200×630) and `favicon.ico`/`favicon.svg` generated programmatically.
- Lint setup (ESLint flat config), TypeScript strict, `noUncheckedIndexedAccess`.

### Notes

- `images.unoptimized: true` because `output: 'export'` is incompatible with the default `next/image` optimizer; assets are pre-bundled in `public/images/`.
- Fraunces uses `wght` + `opsz` axes (Google Fonts); the brief's SOFT/WONK axes are not available — closest match is `font-variation-settings: 'opsz' 144` on H1.
