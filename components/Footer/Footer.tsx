import { FOOTER, VISIT } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative bg-cream border-t border-line overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_900px_500px_at_15%_0%,oklch(0.84_0.125_78/0.07),transparent_55%),radial-gradient(ellipse_700px_400px_at_88%_100%,oklch(0.32_0.055_195/0.06),transparent_60%)]" />
        <div className="absolute top-0 inset-x-0 h-px bg-line" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-5 md:px-8 pt-12 pb-8">
        <p
          aria-hidden
          className="font-display font-black tracking-[-0.05em] leading-[0.85] select-none text-center"
          style={{
            fontSize: "clamp(4.2rem, 15vw, 12.5rem)",
            color: "transparent",
            WebkitTextStroke: "1.25px oklch(0.195 0.025 35 / 0.14)",
          }}
        >
          ANTILLA
        </p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-line pt-8">
          <div>
            <p className="font-mono uppercase tracking-[0.12em] text-[11px] text-ink/50">Navigate</p>
            <ul className="mt-3 space-y-1.5 font-body text-[15px]">
              <li><a href="#menu" className="text-ink/75 hover:text-flamingo transition-colors">Menu</a></li>
              <li><a href="#story" className="text-ink/75 hover:text-flamingo transition-colors">Story</a></li>
              <li><a href="#gallery" className="text-ink/75 hover:text-flamingo transition-colors">Gallery</a></li>
              <li><a href="#visit" className="text-ink/75 hover:text-flamingo transition-colors">Visit</a></li>
            </ul>
          </div>

          <div>
            <p className="font-mono uppercase tracking-[0.12em] text-[11px] text-ink/50">Follow</p>
            <ul className="mt-3 space-y-1.5 font-body text-[14px]">
              {FOOTER.socials.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-ink/75 hover:text-teal transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono uppercase tracking-[0.12em] text-[11px] text-ink/50">Hours</p>
            <ul className="mt-3 space-y-1 font-mono text-[12px]">
              {VISIT.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-2 text-ink/60">
                  <span>{h.days}</span>
                  <span className="text-ink font-bold">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono uppercase tracking-[0.12em] text-[11px] text-ink/50">Visit</p>
            <p className="mt-3 font-body text-[14px] leading-relaxed text-ink/75">
              {VISIT.address}<br />
              <a href={VISIT.phoneHref} className="text-ink font-medium underline decoration-butter decoration-2 underline-offset-4 hover:text-teal transition-colors">{VISIT.phone}</a>
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-teal text-paper px-3 py-1.5 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-seafoam animate-pulse" />
              <span className="font-mono uppercase tracking-[0.08em] text-[11px]">Open today 7 — 22</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 justify-between border-t border-line pt-6">
          <p className="font-mono text-[12px] tracking-[0.04em] text-ink/55">
            {FOOTER.tagline} · <span className="text-ink/75">{FOOTER.copy}</span>
          </p>
          <span className="inline-flex items-center rounded-full bg-ink text-paper px-4 py-2 font-mono uppercase tracking-[0.1em] text-[11px] font-bold rotate-[-1deg] shadow-sm">
            {FOOTER.sticker}
          </span>
        </div>
      </div>
    </footer>
  );
}
