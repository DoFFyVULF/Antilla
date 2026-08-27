/**
 * Типы секций и общие интерфейсы (ТЗ п.0.2).
 * Никаких `any`. Импортируется в Server/Client компонентах.
 */

export type SectionId =
  | "hero"
  | "ticker"
  | "story"
  | "break-1"
  | "menu"
  | "gallery"
  | "break-2"
  | "visit"
  | "reviews"
  | "newsletter"
  | "footer";

export interface ParallaxPhoto {
  src: string;
  alt: string;
  caption: string;
  speed: number;
  rotate: "rotate-sticker" | "rotate-sticker-1" | "rotate-sticker-2" | "rotate-sticker-3" | "rotate-sticker-neg4";
}

export interface MenuItem {
  name: string;
  desc: string;
  price: number;
  hover?: string;
}

export interface Review {
  body: string;
  author: string;
  city: string;
}
