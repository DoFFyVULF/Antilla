"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { GALLERY } from "@/lib/constants";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ROTATIONS = ["rotate-sticker-1", "rotate-sticker-neg4", "rotate-sticker-2", "rotate-sticker"] as const;

export function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 767px)").matches) return;
    if (!trackRef.current || !sectionRef.current) return;
    let killed = false;
    let st: { kill: () => void } | null = null;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (killed || !trackRef.current || !sectionRef.current) return;
      gsap.registerPlugin(ScrollTrigger);
      const track = trackRef.current!;
      const section = sectionRef.current!;
      const distance = () => track.scrollWidth - window.innerWidth + 64;
      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 0.5,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
      st = tween.scrollTrigger as unknown as { kill: () => void };
    })();
    return () => {
      killed = true;
      st?.kill();
    };
  }, [reduced]);

  return (
    <section id="gallery" ref={sectionRef} aria-labelledby="gallery-h2" className="relative bg-sand border-y border-line overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 pt-12 pb-6 flex items-end justify-between gap-6">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-cream px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            <span className="font-mono uppercase tracking-[0.12em] text-[11px] text-ink">POSTCARDS</span>
          </span>
          <h2 id="gallery-h2" className="mt-4 font-display font-black text-ink tracking-[-0.03em] leading-[0.9]" style={{ fontSize: "clamp(2.2rem, 5vw, 4.2rem)" }}>
            Aisle of evidence.
          </h2>
        </div>
        <p className="hidden md:block max-w-[32ch] font-body text-[14px] leading-relaxed text-ink/60">Film grain, neon, pastel tiles. No filters — just Little Havana light.</p>
      </div>

      <div ref={trackRef} className="hidden md:flex gap-6 lg:gap-7 pl-8 pr-20 pb-12 will-change-transform" style={{ width: "max-content" }}>
        {GALLERY.map((g, i) => (
          <figure
            key={g.src + i}
            className={`relative bg-white p-2.5 pb-10 rounded-[16px] border border-line shadow-soft shrink-0 transition-transform duration-300 ${ROTATIONS[i % ROTATIONS.length]} hover:rotate-0 hover:scale-[1.02] hover:z-10`}
            style={{ width: "min(34vw, 380px)" }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[12px]">
              <Image src={g.src} alt={g.alt} fill sizes="34vw" className="object-cover" loading="lazy" />
            </div>
            <figcaption className="absolute left-2 right-2 bottom-3 text-center font-mono uppercase tracking-[0.08em] text-[11px] text-ink/60">«{g.caption}»</figcaption>
          </figure>
        ))}
      </div>

      <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar px-5 pb-8">
        {GALLERY.map((g, i) => (
          <figure key={g.src + i} className={`snap-center shrink-0 relative bg-white p-2.5 pb-10 rounded-[16px] border border-line shadow-soft ${ROTATIONS[i % ROTATIONS.length]}`} style={{ width: "74vw" }}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[12px]">
              <Image src={g.src} alt={g.alt} fill sizes="74vw" className="object-cover" loading="lazy" />
            </div>
            <figcaption className="mt-2 text-center font-mono uppercase tracking-[0.08em] text-[11px] text-ink/60">«{g.caption}»</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
