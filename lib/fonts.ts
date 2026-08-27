/**
 * Шрифты (ТЗ п.0.4, п.3.2).
 * - Display: Fraunces (variable, wght 500-900 + opsz).
 *   Google Fonts отдаёт оси wght/opsz. Оси SOFT/WONK, упомянутые в ТЗ,
 *   недоступны в next/font/google — компенсируем через `font-variation-settings`
 *   "opsz" 144 на крупных H1 ("wonky" декоративный вид) + letter-spacing.
 * - Body: Karla.
 * - Mono: Space Mono.
 * - Hand: Caveat.
 *
 * На выходе: 4 CSS-переменных (--font-display/body/mono/hand) для Tailwind v4.
 */
import { Fraunces, Karla, Space_Mono, Caveat } from "next/font/google";

export const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  // Fraunces — variable font: weight wght 100-900 по умолчанию.
  // "axes" нельзя задавать вместе с явным weight в Next 16.
  // Ось opsz управляется через `font-variation-settings: 'opsz' 144` на H1.
});

export const karla = Karla({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-karla",
  weight: ["400", "500", "700"],
});

export const spaceMono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

export const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
  weight: ["600"],
});

export const fontVariables = [
  fraunces.variable,
  karla.variable,
  spaceMono.variable,
  caveat.variable,
].join(" ");
