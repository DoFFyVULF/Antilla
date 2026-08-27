"use client";

import { useState } from "react";
import { NEWSLETTER } from "@/lib/constants";

type State = "idle" | "submitting" | "success" | "error";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) { setState("error"); return; }
    setState("submitting");
    console.log("newsletter signup", { email });
    setTimeout(() => setState("success"), 600);
  };
  return (
    <section aria-labelledby="newsletter-h2" className="relative bg-teal text-paper py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_500px_at_15%_20%,white/0.08,transparent_55%),radial-gradient(ellipse_700px_400px_at_85%_80%,oklch(0.84_0.125_78/0.14),transparent_60%)]" />
        <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      </div>
      <div className="relative max-w-[720px] mx-auto px-5 md:px-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1.5 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-butter animate-pulse" />
          <span className="font-mono uppercase tracking-[0.12em] text-[11px] text-paper">{NEWSLETTER.overline}</span>
        </span>
        <h2 id="newsletter-h2" className="mt-4 font-display font-black tracking-[-0.03em] leading-[0.92]" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}>
          {NEWSLETTER.h2}
        </h2>
        <p className="mt-3 font-body text-[15px] text-paper/75">Get the colada list. New beans, domino nights, no spam.</p>

        {state !== "success" ? (
          <form onSubmit={onSubmit} className="mt-8 mx-auto max-w-[520px] flex flex-col sm:flex-row gap-3" noValidate>
            <label htmlFor="newsletter-email" className="sr-only">Your email</label>
            <input
              id="newsletter-email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@cafecito.club"
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (state === "error") setState("idle"); }}
              aria-invalid={state === "error"}
              aria-describedby={state === "error" ? "newsletter-err" : undefined}
              className="flex-1 h-12 rounded-full bg-white text-ink placeholder:text-ink/40 px-5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-butter/40"
            />
            <button type="submit" disabled={state === "submitting"} className="h-12 rounded-full bg-ink text-paper px-7 font-mono uppercase tracking-[0.1em] text-[12px] hover:bg-ink/90 transition-colors disabled:opacity-60 shrink-0">
              {state === "submitting" ? "Pouring…" : NEWSLETTER.cta}
            </button>
          </form>
        ) : (
          <p className="stamp-in mt-8 inline-flex items-center gap-2 rounded-full bg-paper text-ink px-6 py-3 font-mono uppercase tracking-[0.1em] text-[13px] font-bold shadow-soft" role="status" aria-live="polite">
            <span className="h-2 w-2 rounded-full bg-teal" /> {NEWSLETTER.success}
          </p>
        )}
        {state === "error" && (
          <p id="newsletter-err" className="mt-3 font-mono text-[12px] text-butter">That email looks off — give it another go.</p>
        )}
        <p className="mt-4 font-mono text-[11px] tracking-[0.06em] text-paper/50">Unsubscribe anytime. We hate spam more than decaf.</p>
      </div>
    </section>
  );
}
