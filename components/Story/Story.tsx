"use client";

import Image from "next/image";
import { STORY, STORY_PHOTOS } from "@/lib/constants";
import { useParallax } from "@/hooks/useParallax";
import { useReveal } from "@/hooks/useReveal";

function PhotoCard({ src, alt, caption, speed, rotate }: (typeof STORY_PHOTOS)[number]) {
  const ref = useParallax<HTMLDivElement>(speed);
  const inner = useReveal<HTMLDivElement>(0.08);
  return (
    <div ref={ref} className="relative will-change-transform" style={{ transform: "none" }}>
      <div ref={inner} className={`relative bg-white p-2.5 pb-10 rounded-[16px] border border-line shadow-soft ${rotate} reveal overflow-hidden`}>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[12px]">
          <Image src={src} alt={alt} fill sizes="(max-width: 768px) 90vw, 40vw" className="object-cover" />
        </div>
        <p className="absolute left-2 right-2 bottom-3 text-center font-mono uppercase tracking-[0.08em] text-[11px] text-ink/70">
          {caption}
        </p>
      </div>
    </div>
  );
}

export function Story() {
  return (
    <section id="story" aria-labelledby="story-h2" className="relative bg-paper py-16 md:py-24 border-t border-line overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_400px_at_8%_12%,oklch(0.84_0.125_78/0.06),transparent_60%)]" />
      </div>
      <div className="relative max-w-[1280px] mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-24">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-cream px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-flamingo" />
              <span className="font-mono uppercase tracking-[0.12em] text-[11px] text-ink">{STORY.overline}</span>
            </span>
            <h2 id="story-h2" className="mt-4 font-display font-black text-ink tracking-[-0.03em] leading-[0.92]" style={{ fontSize: "clamp(2.4rem, 5vw, 4.6rem)" }}>
              {STORY.h2}
            </h2>
            <div className="mt-8 space-y-7">
              {STORY.chapters.map((c, i) => (
                <div key={c.title} className="relative pl-5 border-l border-line">
                  <span className="absolute left-[-5px] top-1 h-2 w-2 rounded-full bg-flamingo" />
                  <h3 className="font-mono uppercase tracking-[0.12em] text-[11px] text-ink/55">{c.title}</h3>
                  <p className="mt-2 font-body text-ink text-[17px] leading-relaxed">{c.body}</p>
                  {i < STORY.chapters.length - 1 && (
                    <p className="mt-3 font-hand text-teal text-[18px] leading-none select-none" aria-hidden>
                      — more below
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink text-paper px-4 py-2 font-mono uppercase tracking-[0.1em] text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-butter" /> Est. 2023 · Calle Ocho
            </div>
          </div>
        </div>

        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {STORY_PHOTOS.map((p) => (
            <PhotoCard key={p.src} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
