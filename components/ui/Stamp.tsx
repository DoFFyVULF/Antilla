interface StampProps {
  size?: number;
  className?: string;
  withWordmark?: boolean;
  label?: string;
}

function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <rect width="36" height="36" rx="11" fill="var(--color-ink)" />
      <text
        x="18"
        y="23.5"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontWeight="900"
        fontSize="20"
        letterSpacing="-0.5"
        fill="white"
      >
        A
      </text>
      <path d="M10 26.5 H26" stroke="white" strokeWidth="1.4" strokeLinecap="round" opacity="0.95" />
      <circle cx="18" cy="26.5" r="2.4" fill="var(--color-flamingo)" stroke="white" strokeWidth="1.2" />
      <path d="M13.5 9.5 Q18 7.2 22.5 9.5" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}

export function Stamp({ size = 36, className = "", withWordmark = false, label = "Café Antilla" }: StampProps) {
  if (withWordmark) {
    return (
      <span className={`inline-flex items-center gap-2.5 ${className}`} role="img" aria-label={label}>
        <LogoMark size={size} />
        <span className="flex flex-col leading-none">
          <span className="font-mono uppercase tracking-[0.16em] text-[9px] text-ink/60 leading-none">Café</span>
          <span className="font-display font-black tracking-[-0.03em] text-ink leading-none" style={{ fontSize: size * 0.5 }}>
            ANTILLA
          </span>
        </span>
        <span className="sr-only">{label}</span>
      </span>
    );
  }
  return (
    <span className={`inline-flex ${className}`} role="img" aria-label={label}>
      <LogoMark size={size} />
      <span className="sr-only">{label}</span>
    </span>
  );
}

export function Logo({ size = 36, className = "" }: { size?: number; className?: string }) {
  return <Stamp size={size} withWordmark className={className} />;
}
