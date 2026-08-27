/**
 * Контент Café Antilla — единый источник правды (ТЗ п.0.6, п.13).
 * ВСЁ — дословно из ТЗ. Никакого AI-rewrite, никакого lorem ipsum.
 *
 * RSC-friendly: импортируется в Server Components и передаётся пропсами
 * в Client Components (см. ТЗ п.5.1).
 */

// ----------------------------------------------------------------------------
// HERO
// ----------------------------------------------------------------------------
export const HERO = {
  overline: "LITTLE HAVANA · MIAMI · A MODERN VENTANITA",
  h1: "MIAMI RUNS ON CAFECITO.",
  sub: "Cuban sugar, specialty beans, zero hurry. Antilla is the window your abuela wishes existed.",
  ctaPrimary: "See the menu",
  ctaSecondary: "Find the window ↓",
} as const;

export const HERO_STICKERS = [
  { kind: "stamp", text: "EST. 2023 — CALLE OCHO", rotate: "-4deg" as const },
  { kind: "hand",  text: "espuma first, questions later", rotate: "1.5deg" as const },
  { kind: "stamp", text: "NO DECAF. EVER.", rotate: "3deg" as const },
] as const;

// ----------------------------------------------------------------------------
// TICKER
// ----------------------------------------------------------------------------
export const TICKER_ITEMS = [
  "CAFECITO",
  "CORTADITO",
  "COLADA",
  "CAFÉ CON LECHE",
  "PASTELITO",
] as const;

// ----------------------------------------------------------------------------
// STORY ("THE WINDOW")
// ----------------------------------------------------------------------------
export const STORY = {
  overline: "OUR STORY",
  h2: "Born at a window.",
  chapters: [
    {
      title: "THE WINDOW",
      body: "Before Miami had coffee shops, it had windows. A ventanita is a walk-up window where a cafecito costs less than a dollar and the gossip is free. We grew up on one. We just rebuilt it with better beans.",
    },
    {
      title: "THE ESPUMA",
      body: "Espuma isn't foam. It's sugar, whipped by the first drops of espresso until it turns pale — abuela's meringue. No eggs. No mercy. We still argue about whose is lighter.",
    },
    {
      title: "THE BEANS",
      body: "Your cafecito is pulled on a single-origin Colombian, roasted eight miles from the window. Tradition in the cup, third wave in the grinder.",
    },
  ],
} as const;

export const STORY_PHOTOS = [
  { src: "/images/story-cortadito.jpg", alt: "Cortadito with thick pale espuma in a faceted glass", caption: "the window, 7:04 am", speed: 0.9,  rotate: "rotate-sticker-1" as const },
  { src: "/images/story-barista.jpg",  alt: "Barista tamping portafilter, film grain",            caption: "espuma check",        speed: 1.05, rotate: "rotate-sticker-2" as const },
  { src: "/images/story-woman.jpg",    alt: "Guest with a cup, surrounded by monstera leaves",   caption: "domino park regulars", speed: 1.2,  rotate: "rotate-sticker-3" as const },
  { src: "/images/story-table.jpg",    alt: "Cup on a scribbled table, Little Havana",          caption: "the moka that started it all", speed: 1.3, rotate: "rotate-sticker" as const },
] as const;

// ----------------------------------------------------------------------------
// PARALLAX BREAKS
// ----------------------------------------------------------------------------
export const BREAK_QUOTES = [
  {
    text: "Sugar is a spice, not a sin.",
    cite: "ABUELA ROSA, HEAD OF ESPUMA",
    image: "/images/break-moka.webp",
    alt: "Dark close-up of a moka pot pouring cuban coffee",
  },
  {
    text: "ANTILLA",
    image: "/images/break-ocean.jpg",
    alt: "Ocean Drive at sunset with neon and palm trees",
    outline: true,
  },
] as const;

// ----------------------------------------------------------------------------
// MENU
// ----------------------------------------------------------------------------
export const MENU_TABS = ["VENTANITA", "SPECIALTY", "BAKERY"] as const;
export type MenuTab = (typeof MENU_TABS)[number];

export const MENU: Record<MenuTab, { name: string; desc: string; price: number; hover?: string }[]> = {
  VENTANITA: [
    { name: "Cafecito",         desc: "espresso, demerara, espuma",  price: 3.5, hover: "/images/menu-pastelito.jpg" },
    { name: "Cortadito",        desc: "half espresso, half scalded milk", price: 4.0 },
    { name: "Colada",           desc: "cafecito to-go + 4 thimbles, meant for sharing", price: 5.5 },
    { name: "Café con Leche",   desc: "more milk than gossip",      price: 4.5, hover: "/images/menu-conleche.jpg" },
  ],
  SPECIALTY: [
    { name: "Guava Cold Brew",         desc: "18h cold brew, guava mist, lime", price: 6.5 },
    { name: "Key Lime Espresso Tonic", desc: "tonic, espresso, key lime wheel", price: 6.5 },
    { name: "V60",                     desc: "Huila, Colombia: panela, orange, cocoa nib", price: 7.0 },
    { name: "Oat Cortadito",           desc: "same ritual, oat milk", price: 5.0 },
  ],
  BAKERY: [
    { name: "Pastelito de Guayaba", desc: "laminated at 6 a.m.",         price: 4.5, hover: "/images/menu-pastelito.jpg" },
    { name: "Croqueta de Jamón",    desc: "ham croquette, classic",       price: 3.5 },
    { name: "Pan con Lechón",      desc: "roasted pork, pickles, butter-griddled", price: 9.0 },
    { name: "Tres Leches (slice)",  desc: "three-milk sponge",            price: 6.0 },
  ],
};

export const MENU_FOOTNOTE = "Everything sweet is made with demerara. Everything savory — at 6 a.m.";

// ----------------------------------------------------------------------------
// GALLERY
// ----------------------------------------------------------------------------
export const GALLERY = [
  { src: "/images/gallery-calle8.jpg",   alt: "Calle Ocho tile mosaic in Little Havana", caption: "Calle Ocho, 7:42 am" },
  { src: "/images/gallery-ventanita.jpg", alt: "Cuban ventanita coffee window at night",  caption: "espuma check" },
  { src: "/images/gallery-neon.jpg",     alt: "Cafe facade with bougainvillea and neon", caption: "neon o'clock" },
  { src: "/images/story-cortadito.jpg",  alt: "Cortadito with thick espuma",            caption: "thimbles for the colada" },
  { src: "/images/story-barista.jpg",   alt: "Barista tamping, film grain",            caption: "the moka that started it all" },
  { src: "/images/story-woman.jpg",     alt: "Guest with cup near plants",             caption: "pastelito weather" },
  { src: "/images/menu-pastelito.jpg",  alt: "Pastelito de guayaba, glossy pastry",    caption: "domino park regulars" },
] as const;

// ----------------------------------------------------------------------------
// VISIT
// ----------------------------------------------------------------------------
export const VISIT = {
  address: "1512 SW 8th St (Calle Ocho), Miami, FL 33135",
  phone: "(305) 555-0187",
  phoneHref: "tel:+13055550187",
  hours: [
    { days: "MON–FRI", time: "7:00–22:00" },
    { days: "SAT",     time: "8:00–23:00" },
    { days: "SUN",     time: "8:00–14:00" },
  ],
  handNote: "sundays are for coladas",
  sticker: "the window stays open till the last domino falls",
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=1512+SW+8th+St+Miami+FL+33135",
} as const;

// ----------------------------------------------------------------------------
// REVIEWS
// ----------------------------------------------------------------------------
export const REVIEWS = [
  { body: "The cortadito tastes like my abuela's kitchen. I don't know how they did it.", author: "MARI",  city: "LITTLE HAVANA" },
  { body: "Finally a place that doesn't explain what espuma is. They just pour it.",     author: "DAVE",  city: "WYNWOOD" },
  { body: "Came for one cafecito, left four hours later with new friends.",             author: "LENA",  city: "VISITING FROM BERLIN" },
  { body: "The guava cold brew should be illegal in at least three states.",            author: "TEO",   city: "BRICKELL" },
  { body: "Domino-approved. My uncle plays here every Friday and loses gracefully.",     author: "YANI",  city: "HIALEAH" },
  { body: "I brought my abuela. She nodded once. That's five stars.",                    author: "SOFIA", city: "MIAMI SHORES" },
] as const;

// ----------------------------------------------------------------------------
// NEWSLETTER
// ----------------------------------------------------------------------------
export const NEWSLETTER = {
  overline: "THE COLADA LIST",
  h2: "One email a month. Zero spam. All sugar.",
  cta: "Pour me in →",
  success: "COLADA CONFIRMED ✓",
} as const;

// ----------------------------------------------------------------------------
// FOOTER
// ----------------------------------------------------------------------------
export const FOOTER = {
  tagline: "Made with sugar in the 305.",
  copy: "© 2026 Café Antilla, Miami, FL",
  socials: [
    { label: "IG @cafeantilla",   href: "https://instagram.com/cafeantilla" },
    { label: "TikTok @antilla.miami", href: "https://tiktok.com/@antilla.miami" },
    { label: "Spotify «cafecito o’clock»", href: "https://open.spotify.com/search/cafecito%20o%27clock" },
  ],
  sticker: "NO DECAF. EVER.",
} as const;

// ----------------------------------------------------------------------------
// SITE-WIDE
// ----------------------------------------------------------------------------
export const SITE = {
  url: "https://cafeantilla.com",
  name: "Café Antilla",
  description:
    "Cuban sugar, specialty beans, zero hurry. A modern ventanita on Calle Ocho, Little Havana — Miami, FL.",
  shortDescription:
    "Cuban specialty coffee. A modern ventanita on Calle Ocho, Little Havana, Miami.",
  geo: { lat: 25.7658, lng: -80.2085 },
} as const;
