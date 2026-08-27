/**
 * RootLayout (ТЗ п.0.1, п.0.4, п.5.3, п.7, п.8.1, п.8.2).
 * - html/body, шрифты, метаданные.
 * - <LenisProvider> оборачивает дерево (ТЗ п.5.3).
 * - <JsonLd /> — JSON-LD.
 * - Skip-link первым элементом body.
 */
import type { ReactNode } from "react";
import { fontVariables } from "@/lib/fonts";
import { rootMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { LenisProvider } from "@/components/ui/LenisProvider";
import "./globals.css";

export const metadata = rootMetadata;

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F9F0DE",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="bg-paper text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-ink focus:text-paper focus:px-3 focus:py-2 focus:rounded-sm"
        >
          Skip to content
        </a>
        <JsonLd />
        <LenisProvider />
        {children}
      </body>
    </html>
  );
}
