import { VISIT } from "@/lib/constants";

export function Visit() {
  return (
    <section id="visit" aria-labelledby="visit-h2" className="relative bg-paper border-t border-line overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_500px_at_8%_10%,oklch(0.84_0.125_78/0.07),transparent_60%),radial-gradient(ellipse_700px_400px_at_92%_30%,oklch(0.898_0.032_205/0.28),transparent_65%)]" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-cream px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
            <span className="font-mono uppercase tracking-[0.14em] text-[11px] text-ink">FIND THE WINDOW</span>
          </span>
          <span className="font-mono uppercase tracking-[0.1em] text-[11px] text-ink/50 hidden sm:inline">Little Havana · Miami</span>
          <span className="ml-auto hidden md:inline-flex items-center gap-2 rounded-full bg-teal text-paper px-3 py-1.5 font-mono text-[11px] tracking-[0.08em] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-seafoam animate-pulse" /> Window open
          </span>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          <div className="lg:col-span-7">
            <h2 id="visit-h2" className="font-display font-black text-ink tracking-[-0.03em] leading-[0.9]" style={{ fontSize: "clamp(2.4rem, 5.2vw, 4.6rem)" }}>
              1512 SW 8th St.
              <span className="block font-hand font-normal text-flamingo text-[0.42em] tracking-normal -rotate-1 mt-1">Calle Ocho — ventanita on the sidewalk</span>
            </h2>

            <div className="mt-6 rounded-[24px] overflow-hidden border border-line bg-white shadow-card">
              <div className="flex items-center justify-between gap-3 px-4 py-3 bg-sand border-b border-line">
                <div className="flex items-center gap-2">
                  <span className="h-8 w-8 grid place-items-center rounded-full bg-ink text-paper text-[13px]">⌖</span>
                  <div className="leading-tight">
                    <div className="font-mono uppercase tracking-[0.08em] text-[11px] text-ink">Café Antilla · Map</div>
                    <div className="font-mono text-[11px] text-ink/60">1512 SW 8th St, Miami, FL 33135</div>
                  </div>
                </div>
                <a href={VISIT.mapsUrl} target="_blank" rel="noopener" className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-ink text-paper px-3 py-1.5 font-mono uppercase tracking-[0.1em] text-[11px] hover:bg-ink/90 transition-colors">
                  Open in Maps ↗
                </a>
              </div>

              <div className="relative aspect-[4/3] bg-mist overflow-hidden">
                <RealisticMap />
                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_oklch(0.195_0.025_35/0.06)]" aria-hidden />
              </div>

              <div className="grid grid-cols-3 divide-x divide-line bg-cream border-t border-line">
                {[
                  { label: "Walk-ins", value: "No res." },
                  { label: "Espresso", value: "< 60s" },
                  { label: "Parking", value: "Street" },
                ].map((s) => (
                  <div key={s.label} className="px-4 py-3 text-center">
                    <div className="font-mono uppercase tracking-[0.1em] text-[10px] text-ink/50">{s.label}</div>
                    <div className="font-display font-bold text-[14px] leading-none text-ink mt-1">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <a href={VISIT.mapsUrl} target="_blank" rel="noopener" className="inline-flex items-center justify-center rounded-full bg-ink text-paper px-6 h-11 font-mono uppercase tracking-[0.1em] text-[12px] hover:bg-ink/90 transition-colors">
                Get directions
              </a>
              <a href={VISIT.phoneHref} className="inline-flex items-center justify-center rounded-full bg-cream border border-line px-6 h-11 font-mono uppercase tracking-[0.1em] text-[12px] text-ink hover:bg-sand transition-colors">
                {VISIT.phone}
              </a>
              <span className="inline-flex items-center rounded-full bg-butter-soft border border-line px-3 h-11 font-hand text-[16px] text-ink rotate-[-0.6deg]">sundays are for coladas</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[24px] bg-cream border border-line overflow-hidden shadow-soft">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <p className="font-mono uppercase tracking-[0.14em] text-[11px] text-ink/60">HOURS · LETTER-BOARD</p>
                  <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
                </div>

                <ul className="mt-5">
                  {VISIT.hours.map((h) => (
                    <li key={h.days} className="flex items-center justify-between gap-4 py-3.5 border-b border-line last:border-0">
                      <span className="font-mono uppercase tracking-[0.12em] text-[13px] text-ink">{h.days}</span>
                      <span className="inline-flex items-center gap-2">
                        <span className="hidden sm:inline h-px w-8 bg-line" aria-hidden />
                        <span className="font-mono text-[14px] font-bold tracking-[-0.02em] bg-ink text-paper px-3 py-1 rounded-full">{h.time}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center gap-3 rounded-2xl bg-butter-soft border border-line px-4 py-3">
                  <span className="h-8 w-8 grid place-items-center rounded-full bg-butter text-ink shadow-sm">☼</span>
                  <div className="leading-tight">
                    <div className="font-mono uppercase tracking-[0.08em] text-[11px] text-ink/60">Tip</div>
                    <div className="font-hand text-[18px] leading-none text-ink">sundays are for coladas — come early</div>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6">
                <div className="rounded-2xl bg-paper border border-line p-4 flex gap-4 items-center shadow-sm">
                  <div className="h-11 w-11 rounded-xl bg-flamingo text-paper grid place-items-center font-display font-black">A</div>
                  <div className="leading-tight">
                    <div className="font-display font-bold leading-none text-ink">Café Antilla</div>
                    <div className="font-mono text-[12px] text-ink/60">{VISIT.address}</div>
                  </div>
                  <a href={VISIT.mapsUrl} target="_blank" rel="noopener" className="ml-auto h-9 w-9 grid place-items-center rounded-full bg-ink text-paper hover:bg-ink/90 transition-colors">↗</a>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-line bg-teal-soft p-4 flex items-start gap-3">
              <span className="mt-0.5 h-7 w-7 grid place-items-center rounded-full bg-teal text-paper text-[12px]">✦</span>
              <div>
                <div className="font-mono uppercase tracking-[0.1em] text-[11px] text-ink/60">The window stays open</div>
                <div className="font-body text-[14px] leading-snug text-ink">till the last domino falls. Pull up, say hola, grab a thimble.</div>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-paper border border-line p-4 shadow-sm">
                <div className="font-mono uppercase tracking-[0.1em] text-[10px] text-ink/60">Call</div>
                <a href={VISIT.phoneHref} className="font-display font-black text-ink leading-none text-[16px] hover:text-teal transition-colors">{VISIT.phone}</a>
              </div>
              <div className="rounded-2xl bg-mist border border-line p-4">
                <div className="font-mono uppercase tracking-[0.1em] text-[10px] text-ink/60">Find us</div>
                <div className="font-display font-bold text-ink leading-none">Calle Ocho</div>
                <div className="font-mono text-[11px] text-ink/60">Little Havana</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RealisticMap() {
  return (
    <svg viewBox="0 0 800 520" className="w-full h-full" role="img" aria-label="Map to Café Antilla on Calle Ocho">
      <rect width="800" height="520" fill="oklch(0.985 0.009 85)" />

      <g fill="none" stroke="oklch(0.195 0.025 35 / 0.06)" strokeWidth="1">
        <g opacity="0.7">
          <rect x="48" y="48" width="145" height="145" rx="14" />
          <rect x="210" y="48" width="145" height="145" rx="14" />
          <rect x="445" y="48" width="145" height="145" rx="14" />
          <rect x="610" y="48" width="142" height="145" rx="14" />
          <rect x="48" y="325" width="145" height="145" rx="14" />
          <rect x="210" y="325" width="145" height="145" rx="14" />
          <rect x="445" y="325" width="145" height="145" rx="14" />
          <rect x="610" y="325" width="142" height="145" rx="14" />
        </g>
      </g>

      <path d="M0 258 H800" stroke="white" strokeWidth="28" strokeLinecap="round" />
      <path d="M0 258 H800" stroke="oklch(0.195 0.025 35)" strokeWidth="1.25" opacity="0.09" />
      <path d="M0 258 H800" stroke="oklch(0.195 0.025 35 / 0.55)" strokeWidth="1" strokeDasharray="3 12" opacity="0.18" />

      <g stroke="white" strokeWidth="16" strokeLinecap="round">
        <path d="M208 0 V520" />
        <path d="M400 0 V520" />
        <path d="M592 0 V520" />
      </g>
      <g stroke="oklch(0.195 0.025 35 / 0.08)" strokeWidth="1.2">
        <path d="M208 0 V520" />
        <path d="M400 0 V520" />
        <path d="M592 0 V520" />
      </g>

      <g fontFamily="var(--font-mono)" fill="oklch(0.195 0.025 35)">
        <text x="400" y="244" textAnchor="middle" fontSize="10" letterSpacing="2.4" fontWeight="700">CALLE OCHO — SW 8TH ST</text>
        <text x="208" y="510" textAnchor="middle" fontSize="9.5" letterSpacing="1.4" opacity="0.45">13TH AVE</text>
        <text x="400" y="510" textAnchor="middle" fontSize="9.5" letterSpacing="1.4" fontWeight="700" opacity="0.9">12TH AVE</text>
        <text x="592" y="510" textAnchor="middle" fontSize="9.5" letterSpacing="1.4" opacity="0.45">10TH AVE</text>
      </g>

      <g transform="translate(400 258)">
        <circle r="18" fill="oklch(0.635 0.175 28.5)" stroke="white" strokeWidth="3" />
        <circle r="28" fill="none" stroke="oklch(0.635 0.175 28.5)" strokeWidth="1" opacity="0.22" />
        <circle r="38" fill="none" stroke="oklch(0.635 0.175 28.5)" strokeWidth="1" opacity="0.12" strokeDasharray="2 5" />
      </g>

      <g transform="translate(400 298)">
        <path d="M0 -10 L6 0 L-6 0 Z" fill="white" stroke="oklch(0.195 0.025 35 / 0.12)" />
        <rect x="-62" y="0" width="124" height="38" rx="12" fill="white" stroke="oklch(0.195 0.025 35 / 0.12)" />
        <text x="0" y="15" textAnchor="middle" fontFamily="var(--font-display)" fontWeight="900" fontSize="13" fill="oklch(0.195 0.025 35)">ANTILLA</text>
        <text x="0" y="26" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="7.5" letterSpacing="1.5" fill="oklch(0.195 0.025 35 / 0.55)">1512 SW 8TH ST</text>
      </g>

      <g transform="translate(742 36)">
        <rect x="-18" y="-18" width="36" height="36" rx="18" fill="white" stroke="oklch(0.195 0.025 35 / 0.10)" />
        <path d="M0 -9 L2.5 3 L0 0 L-2.5 3 Z" fill="oklch(0.195 0.025 35)" />
        <text x="0" y="16" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="8" letterSpacing="1.6" fill="oklch(0.195 0.025 35)">N</text>
      </g>

      <text x="118" y="92" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="8" letterSpacing="1.2" fill="oklch(0.195 0.025 35 / 0.32)">DOMINO PARK 1 BLOCK</text>
    </svg>
  );
}
