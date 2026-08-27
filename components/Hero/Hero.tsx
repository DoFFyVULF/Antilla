"use client";

import Image from "next/image";
import { HERO } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Hero"
      className="relative bg-paper overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_900px_600px_at_18%_8%,rgba(242,179,61,0.14),transparent_60%),radial-gradient(ellipse_700px_500px_at_92%_22%,rgba(191,221,226,0.5),transparent_60%),radial-gradient(ellipse_800px_600px_at_50%_100%,rgba(232,93,69,0.06),transparent_65%)]" />
        <div className="absolute top-0 inset-x-0 h-[1px] bg-line" />
        <div className="absolute left-[6%] top-[14%] hidden lg:block h-[1px] w-[18%] bg-ink/10" />
        <div className="absolute right-[8%] bottom-[18%] hidden lg:block h-[1px] w-[14%] bg-ink/10" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-5 md:px-8 pt-[86px] pb-10 md:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start lg:items-center">
          <div className="lg:col-span-7 pt-6 md:pt-10">
            <div className="inline-flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-flamingo animate-pulse" aria-hidden />
                <span className="font-mono uppercase tracking-[0.14em] text-[11px] text-ink">
                  {HERO.overline}
                </span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-ink/60">
                <span className="h-px w-6 bg-ink/15" /> Open today 7:00 — 22:00
              </span>
            </div>

            <h1
              className="mt-6 font-display font-black tracking-[-0.04em] leading-[0.88] text-ink"
              style={{ fontSize: "clamp(2.9rem, 7.2vw, 5.9rem)", fontVariationSettings: "'opsz' 144" }}
            >
              <span className="block font-hand font-normal text-flamingo tracking-normal leading-none -rotate-[1.2deg] text-[28px] md:text-[32px] mb-2">
                Little Havana&apos;s window
              </span>
              MIAMI RUNS
              <br />
              <span className="inline-flex items-baseline gap-3">
                ON <span className="text-flamingo">CAFECITO</span>
                <span className="hidden sm:inline-block h-[0.18em] w-[0.9em] rounded-full bg-flamingo translate-y-[-0.08em]" aria-hidden />
              </span>
              <span className="text-flamingo">.</span>
            </h1>

            <p className="mt-5 max-w-[44ch] text-[17px] md:text-[18px] leading-relaxed text-ink/75">
              {HERO.sub}{" "}
              <span className="text-ink font-medium underline decoration-butter decoration-4 underline-offset-2">
                Ventanita culture
              </span>{" "}
              meets specialty precision.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink text-paper px-7 h-[48px] font-mono uppercase tracking-[0.12em] text-[13px] hover:bg-ink/90 transition-colors"
              >
                {HERO.ctaPrimary}
                <span aria-hidden className="text-[16px] leading-none">→</span>
              </a>
              <a
                href="#visit"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-paper px-6 h-[48px] font-mono uppercase tracking-[0.12em] text-[13px] text-ink hover:border-ink/30 hover:bg-cream transition-colors"
              >
                {HERO.ctaSecondary}
              </a>
              <span className="hidden md:inline-flex items-center gap-2 pl-2 font-mono text-[11px] tracking-[0.12em] uppercase text-ink/50">
                <span className="h-px w-8 bg-ink/15" /> No reservation needed
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 md:gap-7 border-t border-line pt-6">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img src="/images/story-woman.jpg" alt="" className="h-8 w-8 rounded-full object-cover border-2 border-paper" />
                  <img src="/images/story-barista.jpg" alt="" className="h-8 w-8 rounded-full object-cover border-2 border-paper" />
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-butter border-2 border-paper font-mono text-[11px] font-bold text-ink">
                    +2k
                  </span>
                </div>
                <div className="leading-tight">
                  <div className="flex items-center gap-1 text-[13px] font-bold text-ink">
                    <span aria-hidden className="text-butter">★★★★★</span> 4.9/5
                  </div>
                  <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-ink/60">2,847 reviews</div>
                </div>
              </div>
              <div className="hidden sm:block h-10 w-px bg-line" aria-hidden />
              <div className="flex items-center gap-3 text-sm leading-tight">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal text-paper text-[13px]">◈</span>
                <div>
                  <div className="font-medium text-ink">1512 SW 8th St</div>
                  <div className="font-mono text-[12px] tracking-[0.06em] uppercase text-ink/60">Calle Ocho · ventanita</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[520px] lg:ml-auto">
              <div className="relative rounded-[28px] md:rounded-[32px] overflow-hidden border border-ink/10 bg-cream shadow-[0_20px_60px_-24px_rgba(35,24,15,0.35),0_8px_20px_-12px_rgba(35,24,15,0.2)]">
                <div className="relative aspect-[4/5] md:aspect-[4/4.9]">
                  <Image
                    src="/images/hero-bg.jpg"
                    alt="Pastel Art-Deco Miami building with palm, Cuban palette"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-ink/0 to-paper/0" aria-hidden />
                  <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-paper/90 backdrop-blur px-3 py-1.5 border border-ink/10 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-teal" />
                    <span className="font-mono uppercase tracking-[0.12em] text-[11px] text-ink">Specialty · single origin</span>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-4 md:p-5">
                    <div className="rounded-2xl bg-paper/95 backdrop-blur border border-ink/10 p-4 flex items-center justify-between gap-4 shadow-sm">
                      <div>
                        <div className="font-mono uppercase tracking-[0.12em] text-[10px] text-ink/60">Today&apos;s colada</div>
                        <div className="font-display font-bold text-[18px] leading-none text-ink">Cafecito + 4 thimbles</div>
                        <div className="font-mono text-[12px] text-ink/60">$5.50 · sharing ritual</div>
                      </div>
                      <div className="h-12 w-12 rounded-full bg-flamingo text-paper grid place-items-center font-display font-black text-[18px] leading-none">
                        4×
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-2 md:-left-6 top-[14%] rounded-2xl bg-paper border border-ink/10 px-3 py-3 shadow-[0_12px_32px_-16px_rgba(35,24,15,0.3)] rotate-[-1.2deg] hidden sm:flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-butter grid place-items-center text-ink font-display font-black">E</div>
                <div className="pr-1 leading-tight">
                  <div className="font-mono uppercase tracking-[0.1em] text-[10px] text-ink/60">Espuma</div>
                  <div className="font-display font-bold text-[14px] leading-none text-ink">whipped 18 seconds</div>
                  <div className="font-hand text-[14px] leading-none text-flamingo">pale & sweet</div>
                </div>
              </div>

              <div className="absolute -right-2 md:-right-4 bottom-[18%] rounded-2xl bg-teal text-paper px-4 py-3 shadow-[0_12px_32px_-16px_rgba(15,76,74,0.5)] rotate-[1.4deg] hidden sm:block">
                <div className="font-mono uppercase tracking-[0.14em] text-[10px] text-paper/80">No decaf. Ever.</div>
                <div className="font-display font-black text-[18px] leading-none">EST. 2023</div>
                <div className="font-mono text-[11px] text-paper/80">Calle Ocho, Miami</div>
              </div>

              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2 rounded-full bg-ink text-paper px-4 py-2 shadow-lg">
                <span className="h-2 w-2 rounded-full bg-seafoam animate-pulse" />
                <span className="font-mono uppercase tracking-[0.12em] text-[11px] whitespace-nowrap">Window open · 7am — 10pm</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 max-w-[520px] mx-auto lg:ml-auto">
              {[
                { k: "4.9", l: "Google rating" },
                { k: "8 mi", l: "Roasted nearby" },
                { k: "0 hurry", l: "Zero rush" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl bg-cream border border-ink/10 px-3 py-3 text-center">
                  <div className="font-display font-black text-[18px] leading-none text-ink">{s.k}</div>
                  <div className="font-mono uppercase tracking-[0.08em] text-[10px] text-ink/60 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-px bg-line" aria-hidden />
    </section>
  );
}
