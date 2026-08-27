"use client";

import { useEffect, useState, useCallback } from "react";
import { Stamp } from "../ui/Stamp";

const NAV = [
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "Story" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
] as const;

function smoothScrollTo(href: string) {
  const id = href.replace(/^#/, "");
  const el = id ? document.getElementById(id) : null;
  if (!el) {
    if (href === "#top") window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const headerOffset = 76;
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top, behavior: "smooth" });
  history.replaceState(null, "", href);
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setOpen(false);
      setTimeout(() => smoothScrollTo(href), 80);
    },
    []
  );

  return (
    <>
      <header
        className={
          "fixed top-0 inset-x-0 z-50 transition-all duration-300 " + (scrolled ? "py-3" : "py-4")
        }
      >
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
          <div
            className={
              "flex items-center gap-2 rounded-full border px-2 pr-3 py-1.5 transition-all " +
              (scrolled
                ? "bg-paper/90 backdrop-blur-xl border-ink/10 shadow-[0_8px_32px_-12px_rgba(35,24,15,0.2)]"
                : "bg-paper border-ink/10 shadow-sm")
            }
          >
            <a
              href="#top"
              onClick={(e) => handleNav(e, "#top")}
              className="flex items-center gap-3 no-underline"
              aria-label="Café Antilla — home"
            >
              <Stamp size={36} />
              <span className="hidden sm:inline-flex items-center rounded-full bg-flamingo text-paper font-mono text-[10px] tracking-[0.08em] uppercase px-2 py-0.5">
                Calle Ocho
              </span>
            </a>
            <nav aria-label="Primary" className="hidden lg:flex items-center gap-1 ml-3 pl-3 border-l border-ink/10">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={(e) => handleNav(e, n.href)}
                  className="rounded-full px-3 py-1.5 font-mono uppercase tracking-[0.1em] text-[12px] text-ink/70 hover:text-ink hover:bg-ink/5 transition-colors"
                >
                  {n.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#visit"
              onClick={(e) => handleNav(e, "#visit")}
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-ink text-paper px-5 h-10 font-mono uppercase tracking-[0.12em] text-[12px] hover:bg-ink/90 transition-colors"
            >
              Order ahead
            </a>
            <a
              href="tel:+13055550187"
              className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full bg-paper border border-ink/10 text-ink hover:bg-cream transition-colors"
              aria-label="Call"
            >
              ✆
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full bg-paper border border-ink/10 text-ink shadow-sm"
            >
              <svg
                width="18"
                height="14"
                viewBox="0 0 22 14"
                aria-hidden
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {open ? (
                  <>
                    <path d="M3 3 L19 11" />
                    <path d="M19 3 L3 11" />
                  </>
                ) : (
                  <>
                    <path d="M2 3 H20" />
                    <path d="M2 7 H20" />
                    <path d="M2 11 H20" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 z-40 lg:hidden bg-paper"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <div className="pt-[88px] px-6 pb-10 flex flex-col gap-1">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={(e) => handleNav(e, n.href)}
              className="font-display font-black text-[42px] leading-none tracking-[-0.03em] text-ink py-3 border-b border-line no-underline flex items-center justify-between"
            >
              {n.label} <span className="text-ink/20 text-[22px]">→</span>
            </a>
          ))}
          <div className="mt-6 flex gap-3">
            <a
              href="#visit"
              onClick={(e) => handleNav(e, "#visit")}
              className="flex-1 inline-flex justify-center rounded-full bg-ink text-paper px-6 h-12 items-center font-mono uppercase tracking-[0.12em] text-[13px]"
            >
              Order ahead
            </a>
            <a
              href="tel:+13055550187"
              className="inline-flex items-center justify-center rounded-full border border-ink/15 px-6 h-12 font-mono uppercase tracking-[0.1em] text-[12px]"
            >
              Call
            </a>
          </div>
          <div className="mt-8 rounded-2xl bg-cream border border-ink/10 p-4 flex gap-4 items-center">
            <img src="/images/hero-bg.jpg" alt="" className="h-16 w-16 rounded-xl object-cover" />
            <div>
              <div className="font-display font-bold text-ink leading-none">Café Antilla</div>
              <div className="font-mono text-[12px] text-ink/60">1512 SW 8th St · Open till 10pm</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
