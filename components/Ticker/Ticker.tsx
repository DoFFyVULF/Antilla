"use client";

import { TICKER_ITEMS } from "@/lib/constants";

export function Ticker() {
  return (
    <div className="relative bg-cream border-y border-line overflow-hidden marquee-paused" aria-label="Menu highlights" role="marquee">
      <div className="marquee-track flex w-max items-center py-3 md:py-3.5">
        {[0, 1].map((dup) => (
          <div key={dup} aria-hidden={dup === 1} className="flex items-center shrink-0">
            {TICKER_ITEMS.map((item, i) => (
              <span key={`${item}-${i}-${dup}`} className="inline-flex items-center">
                <span className="font-display font-black tracking-[-0.02em] text-[18px] md:text-[20px] text-ink px-1">{item}</span>
                <span className="mx-4 md:mx-6 inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-flamingo" />
                  <span className="hidden sm:inline h-px w-6 bg-line" />
                </span>
              </span>
            ))}
          </div>
        ))}
        <span className="sr-only">{TICKER_ITEMS.join(", ")}.</span>
      </div>
    </div>
  );
}
