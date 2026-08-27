/**
 * Button / Pill-button (ТЗ п.11.1).
 * - shadow-hard на дефолте, на hover — translate + shadow-hard-lg.
 * - active — translate в обратную сторону, без тени.
 * - focus-visible — глобальный (см. globals.css).
 * - "pill" вариант — только для CTA "Order ahead".
 */
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Common = {
  variant?: "pill" | "stamp" | "ghost";
  children: ReactNode;
  className?: string;
};

export function Button({
  variant = "stamp",
  className = "",
  children,
  ...rest
}: Common & ButtonHTMLAttributes<HTMLButtonElement>) {
  const base =
    "btn-hard inline-flex items-center justify-center font-mono uppercase tracking-[0.12em] " +
    "text-sm md:text-[15px] min-h-[44px] min-w-[44px] px-5 py-3 select-none cursor-pointer " +
    "transition-[transform,box-shadow] duration-200 ease-out";
  const v =
    variant === "pill"
      ? "bg-flamingo text-paper rounded-full shadow-hard"
      : variant === "ghost"
      ? "text-ink hover:text-flamingo underline-offset-4"
      : "bg-paper text-ink border-2 border-ink shadow-hard rounded-sm";
  return (
    <button className={`${base} ${v} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "stamp",
  className = "",
  children,
  ...rest
}: Common & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const base =
    "btn-hard inline-flex items-center justify-center font-mono uppercase tracking-[0.12em] " +
    "text-sm md:text-[15px] min-h-[44px] min-w-[44px] px-5 py-3 select-none no-underline " +
    "transition-[transform,box-shadow] duration-200 ease-out";
  const v =
    variant === "pill"
      ? "bg-flamingo text-paper rounded-full shadow-hard"
      : variant === "ghost"
      ? "text-ink underline-offset-4"
      : "bg-paper text-ink border-2 border-ink shadow-hard rounded-sm";
  return (
    <a className={`${base} ${v} ${className}`} {...rest}>
      {children}
    </a>
  );
}
