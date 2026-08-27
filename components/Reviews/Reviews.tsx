"use client";

import { REVIEWS } from "@/lib/constants";

export function Reviews() {
  const cards = REVIEWS;
  return (
    <section aria-label="Reviews" className="relative bg-paper border-y border-line py-12 overflow-hidden marquee-paused">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 mb-8 flex items-end justify-between gap-6">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-cream px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-flamingo" />
            <span className="font-mono uppercase tracking-[0.12em] text-[11px] text-ink">THE RECEIPTS</span>
          </span>
          <h2 className="mt-4 font-display font-black text-ink tracking-[-0.03em] leading-[0.9]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.6rem)" }}>
            Five stars, signed and dated.
          </h2>
        </div>
        <span className="hidden md:inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] uppercase text-ink/50">
          <span className="text-butter">★★★★★</span> 4.9 · 2,847
        </span>
      </div>
      <div className="marquee-track-slow flex w-max gap-4 px-4">
        {[...cards, ...cards].map((r, i) => (
          <article
            key={`${r.author}-${i}`}
            aria-hidden={i >= cards.length ? true : undefined}
            className="shrink-0 w-[300px] md:w-[360px] bg-white border border-line rounded-[20px] p-5 shadow-soft flex flex-col"
          >
            <div className="flex items-center gap-1 text-butter text-[13px]">★★★★★</div>
            <p className="mt-3 font-body text-ink text-[15px] leading-relaxed">“{r.body}”</p>
            <p className="mt-4 font-mono uppercase tracking-[0.1em] text-[11px] text-ink/60">
              — {r.author}, <span className="text-ink/40">{r.city}</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
