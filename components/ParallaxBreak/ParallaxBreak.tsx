"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useParallax } from "@/hooks/useParallax";

interface ParallaxBreakProps {
  image: string;
  alt: string;
  text: string;
  cite?: string;
  outline?: boolean;
}

export function ParallaxBreak({ image, alt, text, cite, outline = false }: ParallaxBreakProps) {
  const wrapRef = useParallax<HTMLDivElement>(0.18, { distance: 40 });
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (outline) {
    return (
      <section ref={sectionRef} aria-label="Antilla brand" className="relative overflow-hidden bg-ink">
        <div ref={wrapRef} className="absolute inset-0 will-change-transform" style={{ transform: "none" }}>
          <Image src={image} alt={alt} fill sizes="100vw" className="object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/20 to-ink/80" aria-hidden />
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_50%_50%,white_1px,transparent_1.5px)] bg-[length:14px_14px]" aria-hidden />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-8 py-16 md:py-20 min-h-[72svh] md:min-h-[78svh] flex flex-col">
          <div className="flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-paper/10 backdrop-blur border border-white/15 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-butter animate-pulse" />
              <span className="font-mono uppercase tracking-[0.14em] text-[11px] text-paper/90">Calle Ocho · Since 2023</span>
            </span>
            <span className="hidden md:inline-flex font-mono uppercase tracking-[0.12em] text-[11px] text-paper/60">25°46′32″N 80°12′30″W</span>
          </div>

          <div className="mt-auto">
            <div className="overflow-hidden">
              <p
                className={`font-display font-black tracking-[-0.05em] leading-[0.82] transition-all duration-[1200ms] ease-[cubic-bezier(.2,.8,.2,1)] ${visible ? "translate-y-0 opacity-100" : "translate-y-[55%] opacity-0"}`}
                style={{
                  fontSize: "clamp(4.5rem, 19vw, 17rem)",
                  color: "transparent",
                  WebkitTextStroke: "1.4px rgba(244,236,221,0.92)",
                  textShadow: "0 18px 60px rgba(0,0,0,0.35)",
                }}
              >
                ANTILLA
              </p>
            </div>

            <div className={`mt-6 flex flex-wrap items-end justify-between gap-6 border-t border-white/15 pt-6 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <div className="flex gap-8">
                <div>
                  <div className="font-display font-black text-paper text-[28px] leading-none">4.9</div>
                  <div className="font-mono uppercase tracking-[0.1em] text-[10px] text-paper/60">Google · 2,847 reviews</div>
                </div>
                <div className="hidden sm:block h-10 w-px bg-white/15" aria-hidden />
                <div>
                  <div className="font-mono uppercase tracking-[0.1em] text-[11px] text-paper/80">Open today</div>
                  <div className="font-display font-bold text-paper leading-none">7:00 — 22:00</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="hidden sm:inline font-hand text-[18px] text-paper/90 rotate-[-1deg]">see you at the window →</span>
                <a href="#visit" onClick={(e) => { e.preventDefault(); document.getElementById("visit")?.scrollIntoView({ behavior: "smooth", block: "start" }); }} className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-5 h-11 font-mono uppercase tracking-[0.12em] text-[12px] hover:bg-cream transition-colors">
                  Find the window
                  <span aria-hidden>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} aria-label={cite ?? "Quote"} className="relative overflow-hidden bg-cream border-y border-ink/10">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_900px_500px_at_10%_0%,rgba(242,179,61,0.12),transparent_60%),radial-gradient(ellipse_700px_500px_at_90%_100%,rgba(15,76,74,0.06),transparent_60%)]" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        <div className="lg:col-span-7">
          <div className={`inline-flex items-center gap-2 rounded-full border border-ink/10 bg-paper px-3 py-1.5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-ink text-paper font-display font-black text-[12px]">“</span>
            <span className="font-mono uppercase tracking-[0.12em] text-[11px] text-ink">Words from the kitchen</span>
          </div>

          <blockquote
            className={`mt-6 font-display font-black tracking-[-0.03em] leading-[0.92] text-ink transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ fontSize: "clamp(2.2rem, 5.2vw, 4.6rem)" }}
          >
            <span className="text-flamingo">Sugar</span> is a{" "}
            <span className="relative inline-block">
              <span className="relative z-10">spice,</span>
              <span className="absolute left-0 right-0 bottom-[0.12em] h-[0.28em] bg-butter/55 -rotate-[0.7deg]" aria-hidden />
            </span>
            <br />
            not a sin.
          </blockquote>

          <div className={`mt-8 flex items-center gap-4 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <img src="/images/story-barista.jpg" alt="" className="h-12 w-12 rounded-full object-cover border-2 border-paper shadow-sm" />
            <div>
              <div className="font-mono uppercase tracking-[0.12em] text-[12px] text-ink font-bold">— ABUELA ROSA</div>
              <div className="font-mono uppercase tracking-[0.08em] text-[11px] text-ink/60">Head of espuma · Antilla</div>
            </div>
            <span className="ml-2 hidden sm:inline-flex items-center rounded-full bg-flamingo text-paper px-3 py-1 font-mono text-[11px] tracking-[0.08em] uppercase">Since 1968</span>
          </div>

          <div className={`mt-8 flex flex-wrap gap-2 transition-all duration-700 delay-300 ${visible ? "opacity-100" : "opacity-0"}`}>
            <span className="inline-flex items-center rounded-full border border-ink/10 bg-paper px-3 py-1.5 font-mono text-[11px] tracking-[0.06em] text-ink/70">Demerara only</span>
            <span className="inline-flex items-center rounded-full border border-ink/10 bg-paper px-3 py-1.5 font-mono text-[11px] tracking-[0.06em] text-ink/70">Whipped by hand</span>
            <span className="inline-flex items-center rounded-full bg-ink text-paper px-3 py-1.5 font-mono text-[11px] tracking-[0.08em] uppercase">Taste →</span>
          </div>
        </div>

        <div className={`lg:col-span-5 transition-all duration-[900ms] delay-200 ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.98]"}`}>
          <div className="relative mx-auto max-w-[480px]">
            <div className="relative rounded-[28px] overflow-hidden border border-ink/10 bg-paper shadow-[0_24px_64px_-20px_rgba(35,24,15,0.35)] rotate-[0.6deg]">
              <div className="relative aspect-[4/3.2]">
                <Image src={image} alt={alt} fill sizes="(max-width:1024px) 100vw, 480px" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" aria-hidden />
                <div className="absolute top-4 left-4 rounded-full bg-paper/90 backdrop-blur px-3 py-1.5 border border-ink/10 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-flamingo animate-pulse" />
                  <span className="font-mono uppercase tracking-[0.1em] text-[11px] text-ink">Moka · 7:04am</span>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <div className="rounded-2xl bg-paper/95 backdrop-blur border border-ink/10 p-4 flex items-center justify-between gap-4">
                    <div>
                      <div className="font-mono uppercase tracking-[0.1em] text-[10px] text-ink/60">The ritual</div>
                      <div className="font-display font-bold text-ink leading-none">Espuma first, questions later</div>
                    </div>
                    <span className="h-10 w-10 grid place-items-center rounded-full bg-butter text-ink font-display font-black">↗</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-3 -bottom-4 hidden sm:flex items-center gap-2 rounded-2xl bg-teal text-paper px-4 py-3 shadow-lg rotate-[1.2deg]">
              <span className="text-[20px]">◈</span>
              <div className="leading-tight">
                <div className="font-mono uppercase tracking-[0.1em] text-[10px] text-paper/80">Temperature</div>
                <div className="font-display font-black leading-none">94°C · perfect</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
