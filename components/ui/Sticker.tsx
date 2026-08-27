/**
 * Sticker — стикер с лёгким поворотом и тенью (ТЗ п.2.2, п.10 [HERO]).
 * - font-hand для рукописных.
 * - kind=stamp → font-mono uppercase, обводка.
 */
import type { ReactNode } from "react";

interface StickerProps {
  kind?: "hand" | "stamp";
  rotate?: string;
  className?: string;
  children: ReactNode;
}

export function Sticker({ kind = "hand", rotate = "rotate-sticker", className = "", children }: StickerProps) {
  const base =
    "inline-block px-3 py-1.5 leading-tight shadow-stamp select-none " +
    "bg-paper text-ink will-change-transform";
  const typ =
    kind === "stamp"
      ? "font-mono uppercase tracking-[0.12em] text-[11px] border-2 border-ink"
      : "font-hand text-[20px] md:text-[22px]";
  return <span className={`${base} ${typ} ${rotate} ${className}`}>{children}</span>;
}
