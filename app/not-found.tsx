/**
 * Кастомная 404 в стиле бренда (ТЗ п.4).
 */
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-svh bg-paper text-ink flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono uppercase tracking-[0.12em] text-[12px] text-ink/70">
          404 · CLOSED WINDOW
        </p>
        <h1
          className="mt-3 font-display font-black tracking-[-0.02em] leading-[0.92]"
          style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
        >
          No <span className="text-flamingo">cafecito</span> here.
        </h1>
        <p className="mt-5 max-w-[42ch] mx-auto font-body text-[17px] text-ink/80">
          The page walked out. Try the menu, or find the window.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="btn-hard inline-flex min-h-[44px] items-center font-mono uppercase tracking-[0.12em] text-sm px-5 py-3 border-2 border-ink shadow-hard bg-paper text-ink"
          >
            Back to the bar
          </Link>
          <Link
            href="#menu"
            className="font-mono uppercase tracking-[0.12em] text-[13px] link-underline"
          >
            See the menu
          </Link>
        </div>
      </div>
    </main>
  );
}
