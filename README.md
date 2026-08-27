# Café Antilla — Frontend

> Cuban soul. Specialty heart.  
> A modern *ventanita* on Calle Ocho, Little Havana, Miami.  
> One-pager: hero, story, menu, gallery, visit, reviews, newsletter.

**Stack:** Next.js 16 (App Router · RSC) · React 19 · TypeScript · Tailwind CSS v4 (CSS-first `@theme`) · GSAP + Lenis

---

## Prerequisites

- Node.js **≥ 20.9** (tested on 25.x)
- pnpm **≥ 10** (`corepack enable` if missing)

## Install

```bash
pnpm install
```

## Develop

```bash
pnpm dev
# → http://localhost:3000
```

Turbopack is on by default in Next.js 16. No `--turbopack` flag needed.

## Build (static export)

```bash
pnpm build
# → out/  (deployable as static assets to any web host)
```

The site is a fully static export — there is no backend, no API routes, no server runtime.  
Newsletter form is a UI stub (`console.log` on submit).

## Lint

```bash
pnpm lint
```

## Project layout

```
app/
├── layout.tsx          RootLayout: html/body, fonts, metadata, JsonLd, LenisProvider, skip-link
├── page.tsx            RSC: section composition
├── not-found.tsx       Branded 404
├── globals.css         Tokens (CSS vars), @theme, custom utilities, noise, reduced-motion
├── sitemap.ts          /sitemap.xml
└── robots.ts           /robots.txt

components/
├── Header/             fixed header, mobile burger
├── Hero/               h-svh, 4-layer parallax (data-speed), mouse-parallax stickers
├── Ticker/             seafoam marquee
├── Story/              sticky two-col + 4 polaroids
├── ParallaxBreak/      h-svh full-bleed quote (×2)
├── Menu/               accessible tablist + cursor-following photo
├── Gallery/            scroll-scrubbed horizontal postcard lane (desktop) / scroll-snap (mobile)
├── Visit/              inline SVG map (Server) + letter-board hours
├── Reviews/            duplicated marquee (aria-hidden dup)
├── Newsletter/         form stub with stamp-in success animation
├── Footer/             outline wordmark + columns
├── JsonLd.tsx          CafeOrCoffeeShop JSON-LD
└── ui/                 Button, Stamp, Sticker, ScallopedDivider, Icons

hooks/
├── useLenis.ts         singleton Lenis + ScrollTrigger sync
├── useParallax.ts      data-speed → GSAP tween
├── useMouseParallax.ts rAF + lerp, auto-disabled on touch/reduced-motion
├── useReducedMotion.ts matchMedia('(prefers-reduced-motion: reduce)')
└── useReveal.ts        IntersectionObserver add .is-in

lib/
├── fonts.ts            next/font/google (Fraunces / Karla / Space Mono / Caveat)
├── metadata.ts         root + page metadata
└── constants.ts        Single source of truth for content (verbatim from brief)

public/
├── favicon.ico         stamp mark
├── favicon.svg         vector version
├── og-image.png        1200×630
└── images/             12 stock photos (locally bundled)
```

## Design system

- **Anti-AI checklist** enforced: no gradients on text, no glassmorphism, no centered hero+2-buttons cliché, no rounded-2xl-everywhere, no system fonts, no emoji icons, no lorem ipsum.
- **Tokens** live in `app/globals.css` under `:root` (raw CSS variables) and `@theme` (Tailwind v4 CSS-first config). Palette: `paper / ink / flamingo / seafoam / teal / butter / sky / line / cream`.
- **Shadows** are offset-only: `.shadow-hard`, `.shadow-hard-lg`, `.shadow-stamp` — never `shadow-md/lg/xl`.
- **Custom utilities** under `@layer utilities` in `globals.css`: `.rotate-sticker(-1|-2|-3|-neg4)`, `.tape-top`, `.border-scalloped-(down|up)`, `.link-underline`, `.reveal`, `.reveal-clip`, `.btn-hard`, `.marquee-track(-slow)`, `.stamp-in`, `.text-outline(-paper)`.
- **Noise/grain** is a fixed `body::before` pseudo-element with an inline SVG turbulence, `mix-blend-mode: multiply`, `opacity: .05` (ТЗ п.5.7).

## Performance & a11y

- Static export — TTFB, LCP, INP all served as static assets.
- Hero image: `priority` (LCP), `sizes="100vw"`, with `unoptimized:true` for static export.
- `prefers-reduced-motion: reduce` fully degrades: parallax off, Lenis off, marquee paused, reveals instant.
- All interactive elements ≥ 44×44 px touch targets.
- Tabs: `role="tablist"/tab/tabpanel`, `aria-selected`, arrow-key navigation.
- Marquee dups: `aria-hidden="true"`.
- Focus-visible: 2px dashed ink outline (single source in `globals.css`).
- Color contrast: ink/paper ≈ 13:1; flamingo is reserved for large text/UI.
- Single `<h1>` (Hero), landmarks `header/nav/main/footer`, `aria-labelledby` on every `<section>`.

## Notes on stack vs. brief

The brief targets Next.js 16 + Tailwind v4. A few things worth flagging:

| Brief | Reality | Resolution |
|---|---|---|
| `tailwind.config.ts` `theme.extend` | Tailwind v4 is **CSS-first**; `tailwind.config.ts` is optional/legacy | All tokens live in `@theme { ... }` inside `app/globals.css` |
| `next/image` AVIF/WebP + blur | `output:'export'` does **not** support the default image optimizer | `images.unoptimized: true` + JPEG/WebP pre-bundled in `public/images/` |
| `output:'export'` + API routes | API routes are not allowed in static export | No API routes; newsletter is a UI stub |
| Fraunces axes SOFT/WONK | Google Fonts ships only `wght` + `opsz` | We use `opsz: 144` on H1 (decorative "wonky" feel) |
| `next lint` | Migrated to ESLint CLI in v16 | `pnpm lint` runs the new flat-config ESLint |

## License & assets

Photos bundled under `public/images/` are referenced from the brief; for production please replace with your own licensed photography (or your commissioned shoot). All trademarks, brand names, and “Café Antilla” itself are fictional.
