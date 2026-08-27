"use client";

import { useEffect, useRef, useState } from "react";
import { MENU, MENU_TABS, MENU_FOOTNOTE, type MenuTab } from "@/lib/constants";

export function Menu() {
  const [active, setActive] = useState<MenuTab>(MENU_TABS[0]);
  const listRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, idx: number) => {
    const last = MENU_TABS.length - 1;
    let next = idx;
    if (e.key === "ArrowRight") next = idx === last ? 0 : idx + 1;
    else if (e.key === "ArrowLeft") next = idx === 0 ? last : idx - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    const btn = listRef.current?.querySelectorAll<HTMLButtonElement>("[role='tab']")[next];
    btn?.focus();
    setActive(MENU_TABS[next]);
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => entry.isIntersecting && setVisible(true), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine || !photoRef.current) return;
    const node = photoRef.current;
    let x = 0, y = 0, tx = 0, ty = 0, raf = 0;
    let lastSrc = "";
    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    const onOver = (e: Event) => {
      const row = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-photo]");
      if (row) {
        const src = row.getAttribute("data-photo") ?? "";
        if (src && src !== lastSrc) {
          node.innerHTML = `<img src="${src}" alt="" class="w-[160px] h-[160px] object-cover rounded-2xl border border-white/60 shadow-[0_20px_40px_-16px_rgba(35,24,15,0.35)] rotate-[1.2deg]" />`;
          lastSrc = src;
        }
        node.style.opacity = "1";
      } else node.style.opacity = "0";
    };
    const tick = () => {
      x += (tx - x) * 0.16;
      y += (ty - y) * 0.16;
      if (lastSrc) node.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0) translate(-50%,-60%)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="menu"
      aria-labelledby="menu-h2"
      className="relative bg-paper border-t border-line overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_700px_400px_at_12%_0%,rgba(242,179,61,0.09),transparent_60%),radial-gradient(ellipse_800px_500px_at_88%_18%,rgba(191,221,226,0.32),transparent_65%)]" />
        <div className="absolute top-0 inset-x-0 h-px bg-ink/5" />
      </div>

      <div className="relative max-w-[1100px] mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-cream px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-flamingo" />
            <span className="font-mono uppercase tracking-[0.14em] text-[11px] text-ink">THE MENU · LETTER-BOARD</span>
            <span className="hidden sm:inline-flex ml-2 rounded-full bg-ink text-paper px-2 py-0.5 font-mono text-[10px] tracking-[0.1em] uppercase">Updated daily</span>
          </div>

          <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
            <h2
              id="menu-h2"
              className="font-display font-black text-ink tracking-[-0.03em] leading-[0.9]"
              style={{ fontSize: "clamp(2.6rem, 6vw, 4.8rem)" }}
            >
              What&apos;s
              <span className="relative inline-block ml-3">
                <span className="relative z-10">pouring</span>
                <span className="absolute inset-x-0 bottom-1 h-[0.32em] bg-butter/70 -rotate-[0.6deg]" aria-hidden />
              </span>
              <br />
              <span className="font-hand font-normal text-flamingo tracking-normal text-[1.05em] -rotate-1 inline-block">today.</span>
            </h2>
            <p className="max-w-[34ch] text-[15px] leading-relaxed text-ink/65 hidden md:block">
              Cuban sugar, specialty beans. Ventanita classics on the left, new rituals on the right. All pulled to order.
            </p>
          </div>
        </div>

        <div
          ref={listRef}
          role="tablist"
          aria-label="Menu categories"
          className={`mt-8 inline-flex p-1.5 rounded-full bg-ink/5 border border-ink/10 backdrop-blur gap-1 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {MENU_TABS.map((tab, i) => {
            const isActive = tab === active;
            return (
              <button
                key={tab}
                type="button"
                role="tab"
                id={`tab-${tab}`}
                aria-selected={isActive}
                aria-controls={`panel-${tab}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActive(tab)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={
                  "relative rounded-full px-5 h-10 font-mono uppercase tracking-[0.12em] text-[12px] transition-all duration-300 " +
                  (isActive
                    ? "bg-ink text-paper shadow-[0_6px_20px_-12px_rgba(35,24,15,0.6)] scale-[1.02]"
                    : "text-ink/60 hover:text-ink hover:bg-paper")
                }
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full transition-colors ${isActive ? "bg-flamingo" : "bg-ink/15"}`} />
                  {tab}
                </span>
              </button>
            );
          })}
        </div>

        {MENU_TABS.map((tab) => (
          <div
            key={tab}
            id={`panel-${tab}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab}`}
            hidden={tab !== active}
            className="mt-8"
          >
            <div className="rounded-[24px] bg-cream border border-line overflow-hidden shadow-soft">
              <div className="hidden md:grid grid-cols-[56px_1fr_110px] gap-0 px-6 py-3 bg-ink/[0.04] border-b border-line font-mono uppercase tracking-[0.12em] text-[10px] text-ink/50">
                <span>#</span>
                <span>Drink</span>
                <span className="text-right">Price</span>
              </div>
              <ul className="divide-y divide-line">
                {MENU[tab].map((row, idx) => (
                  <li
                    key={row.name}
                    data-photo={row.hover}
                    style={{ animationDelay: `${idx * 70}ms` }}
                    className="group relative grid grid-cols-[1fr_auto] md:grid-cols-[56px_1fr_110px] items-center gap-3 px-5 md:px-6 py-5 hover:bg-white/60 transition-colors duration-300 animate-[revealUp_600ms_cubic-bezier(.2,.8,.2,1)_both]"
                  >
                    <span className="hidden md:block font-mono text-[12px] tracking-[0.1em] text-ink/30 group-hover:text-ink/60 transition-colors">
                      0{idx + 1}
                    </span>

                    <div className="min-w-0">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <p className="font-display font-bold text-ink text-[18px] md:text-[20px] leading-none tracking-[-0.01em] group-hover:tracking-[-0.015em] transition-all">
                          {row.name}
                        </p>
                        {idx === 0 && (
                          <span className="inline-flex items-center rounded-full bg-flamingo text-paper px-2 py-0.5 font-mono text-[10px] tracking-[0.08em] uppercase">
                            House
                          </span>
                        )}
                      </div>
                      <p className="mt-1 font-body text-[14px] md:text-[15px] leading-snug text-ink/60">{row.desc}</p>
                    </div>

                    <div className="text-right">
                      <span className="inline-flex items-baseline gap-0.5 font-mono font-bold text-ink">
                        <span className="text-[11px] text-ink/40">$</span>
                        <span className="text-[20px] tracking-[-0.02em]">{row.price.toFixed(2)}</span>
                      </span>
                      <div className="hidden md:block font-mono text-[10px] tracking-[0.08em] uppercase text-ink/40">incl. espuma</div>
                    </div>

                    <span className="pointer-events-none absolute left-6 right-6 bottom-0 h-px bg-gradient-to-r from-transparent via-ink/0 to-transparent group-hover:via-butter/40 transition-all duration-500" aria-hidden />
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center justify-between gap-3 px-5 md:px-6 py-4 bg-paper border-t border-ink/10">
                <p className="font-mono uppercase tracking-[0.1em] text-[11px] text-ink/60 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
                  {MENU_FOOTNOTE}
                </p>
                <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-ink/40">
                  {MENU[tab].length} items · {tab.toLowerCase()}
                </span>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Oat milk +$0.50",
            "Extra espuma — free",
            "Colada serves 4",
          ].map((chip) => (
            <span key={chip} className="inline-flex items-center rounded-full bg-white border border-ink/10 px-3 py-1.5 font-mono text-[11px] tracking-[0.06em] text-ink/70">
              {chip}
            </span>
          ))}
        </div>
      </div>

      <div
        ref={photoRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-30 opacity-0 transition-opacity duration-200"
        style={{ transform: "translate3d(-9999px,-9999px,0) translate(-50%,-50%)" }}
      />

      <style>{`@keyframes revealUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </section>
  );
}
