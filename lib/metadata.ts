/**
 * Хелперы метаданных (ТЗ п.7.1, п.7.2).
 * Корневой Metadata — в app/layout.tsx, page — в app/page.tsx.
 */
import type { Metadata } from "next";
import { SITE } from "./constants";

export const SITE_URL = SITE.url;

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Café Antilla · Cuban Specialty Coffee in Little Havana",
    template: "%s | Café Antilla",
  },
  description: SITE.description,
  keywords: [
    "Cuban coffee",
    "Little Havana",
    "Miami",
    "cafecito",
    "cortadito",
    "colada",
    "espuma",
    "ventanita",
    "specialty coffee",
    "Calle Ocho",
  ],
  authors: [{ name: "Café Antilla" }],
  creator: "Café Antilla",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE.name,
    title: "Café Antilla · Cuban Specialty Coffee in Little Havana",
    description: SITE.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Café Antilla — Cuban specialty coffee, Little Havana, Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Café Antilla · Cuban Specialty Coffee in Little Havana",
    description: SITE.description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export const pageMetadata: Metadata = {
  title: "Cuban Specialty Coffee | Little Havana",
  description: SITE.shortDescription,
  alternates: { canonical: "/" },
};
