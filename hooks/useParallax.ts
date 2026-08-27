/**
 * useParallax — data-speed → GSAP tween (ТЗ п.5.2, п.6.1, п.6.3, п.6.8, п.6.9).
 * - ref на DOM-узел с data-speed="N" (0.85, 1.1, и т.д.).
 * - При mount импортирует gsap+ScrollTrigger, регистрирует tween, при unmount — kill.
 * - SSR-safe: transform:none начально, GSAP подключается только post-hydration.
 * - При reduced-motion не запускается; mobile (<768) speed=1 (статично).
 */
"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "./useReducedMotion";

type Speed = number;

interface Options {
  /** Если задан — скраббинг по вертикали (для Hero/Story). */
  scrub?: boolean | number;
  /** Доп. амплитуда в px (по умолчанию 100). */
  distance?: number;
}

export function useParallax<T extends HTMLElement>(speed: Speed, options: Options = {}) {
  const ref = useRef<T | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    if (typeof window === "undefined") return;
    if (!ref.current) return;

    let killed = false;
    let scrollTrigger: { kill: () => void } | null = null;
    const node = ref.current;

    (async () => {
      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");
      if (killed || !node) return;
      const gsap = gsapMod.default ?? gsapMod.gsap;
      const ScrollTrigger = stMod.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      const effectiveSpeed = isMobile ? 1 : speed;
      const distance = options.distance ?? 100;
      const yPercent = -(effectiveSpeed - 1) * distance;

      const tween = gsap.to(node, {
        yPercent,
        ease: "none",
        scrollTrigger: {
          trigger: node,
          start: "top bottom",
          end: "bottom top",
          scrub: options.scrub ?? true,
          invalidateOnRefresh: true,
        },
      });
      scrollTrigger = tween.scrollTrigger as unknown as { kill: () => void };
    })();

    return () => {
      killed = true;
      if (scrollTrigger) scrollTrigger.kill();
    };
  }, [speed, reduced, options.distance, options.scrub]);

  return ref;
}
