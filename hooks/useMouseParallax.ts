/**
 * useMouseParallax — rAF + lerp 0.08, ±10px (ТЗ п.6.4).
 * Авто-отключение: touch, reduced-motion, мобильный viewport.
 */
"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "./useReducedMotion";

interface Options {
  /** Амплитуда в px (default 10). */
  amplitude?: number;
}

export function useMouseParallax<T extends HTMLElement = HTMLElement>(options: Options = {}) {
  const ref = useRef<T | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    if (typeof window === "undefined") return;
    if (!ref.current) return;

    const isTouch =
      "ontouchstart" in window ||
      (typeof navigator !== "undefined" && navigator.maxTouchPoints > 0);
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (isTouch || isMobile) return;

    const node = ref.current;
    const amp = options.amplitude ?? 10;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      // -1..+1
      targetX = ((e.clientX / w) - 0.5) * 2 * amp;
      targetY = ((e.clientY / h) - 0.5) * 2 * amp;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      node.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      node.style.transform = "";
    };
  }, [reduced, options.amplitude]);

  return ref;
}
