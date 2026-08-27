/**
 * useReducedMotion — matchMedia "(prefers-reduced-motion: reduce)" (ТЗ п.6.6).
 * Возвращает true, если пользователь просит уменьшить движение.
 * Безопасный SSR: на сервере отдаём false, после mount — реальное значение.
 */
"use client";

import { useEffect, useState } from "react";

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}
