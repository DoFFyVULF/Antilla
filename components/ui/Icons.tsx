/**
 * Кастомные SVG-иконки "одной линией" (ТЗ п.2.2, п.12).
 * stroke-linecap/linejoin round, лёгкая неровность через stroke-width=1.8.
 * Декоративные — aria-hidden=true. Рекомендуется оборачивать на месте.
 */
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

function base(props: IconProps) {
  const { title, ...rest } = props;
  return {
    ...rest,
    "aria-hidden": title ? undefined : true,
    role: title ? "img" : undefined,
    width: rest.width ?? 24,
    height: rest.height ?? 24,
    viewBox: "0 0 32 32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
}

export function DominoIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      {props.title && <title>{props.title}</title>}
      <rect x="6" y="6" width="20" height="20" rx="2" transform="rotate(-6 16 16)" />
      <line x1="16" y1="6" x2="16" y2="26" transform="rotate(-6 16 16)" />
      <circle cx="10" cy="12" r="0.9" transform="rotate(-6 16 16)" fill="currentColor" />
      <circle cx="10" cy="16" r="0.9" transform="rotate(-6 16 16)" fill="currentColor" />
      <circle cx="10" cy="20" r="0.9" transform="rotate(-6 16 16)" fill="currentColor" />
      <circle cx="20" cy="12" r="0.9" transform="rotate(-6 16 16)" fill="currentColor" />
      <circle cx="20" cy="16" r="0.9" transform="rotate(-6 16 16)" fill="currentColor" />
      <circle cx="20" cy="20" r="0.9" transform="rotate(-6 16 16)" fill="currentColor" />
    </svg>
  );
}

export function MokaIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      {props.title && <title>{props.title}</title>}
      <path d="M8 12 H22 V22 a3 3 0 0 1 -3 3 H11 a3 3 0 0 1 -3 -3 Z" />
      <path d="M22 14 h3 a2 2 0 0 1 2 2 v1 a2 2 0 0 1 -2 2 h-3" />
      <path d="M11 9 V7 a3 3 0 0 1 3 -3 h4 a3 3 0 0 1 3 3 V9" />
      <line x1="8" y1="17" x2="22" y2="17" />
    </svg>
  );
}

export function PalmIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      {props.title && <title>{props.title}</title>}
      <path d="M16 28 V14" />
      <path d="M16 14 c-3 -5 -8 -6 -12 -6 c1 4 4 8 12 8 Z" />
      <path d="M16 14 c3 -5 8 -6 12 -6 c-1 4 -4 8 -12 8 Z" />
      <path d="M16 14 c-1 -5 1 -10 5 -13 c-1 5 -3 10 -5 13 Z" />
      <path d="M16 14 c1 -5 -1 -10 -5 -13 c1 5 3 10 5 13 Z" />
    </svg>
  );
}

export function ThimbleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      {props.title && <title>{props.title}</title>}
      <path d="M11 8 H21 L19 26 a2 2 0 0 1 -2 1.6 H15 a2 2 0 0 1 -2 -1.6 Z" />
      <path d="M11 12 c2 1 8 1 10 0" />
      <path d="M11 16 c2 1 8 1 10 0" />
    </svg>
  );
}

export function GuavaIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      {props.title && <title>{props.title}</title>}
      <path d="M6 18 a10 10 0 0 1 20 0" />
      <path d="M6 18 a10 10 0 0 0 20 0" />
      <circle cx="16" cy="18" r="2" />
      <circle cx="11" cy="20" r="0.8" fill="currentColor" />
      <circle cx="14" cy="22" r="0.8" fill="currentColor" />
      <circle cx="18" cy="22" r="0.8" fill="currentColor" />
      <circle cx="21" cy="20" r="0.8" fill="currentColor" />
      <path d="M14 6 c2 -1 4 -1 5 0" />
    </svg>
  );
}

export function FlamingoIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      {props.title && <title>{props.title}</title>}
      <path d="M14 28 V20 c0 -3 2 -5 5 -5 h2 c2 0 3 1 3 3 v2 c0 2 -1 3 -3 3 h-3" />
      <path d="M14 28 H8" />
      <path d="M22 15 c0 -2 1 -4 4 -4" />
      <path d="M22 13 l1 -1 M24 12 l-1 -1" />
    </svg>
  );
}

export function ArrowSquiggleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      {props.title && <title>{props.title}</title>}
      <path d="M4 24 c4 -6 8 6 12 0 s8 -6 12 0" />
      <path d="M26 20 l4 4 l-4 4" />
    </svg>
  );
}
