/**
 * ScallopedDivider — фестончатый разделитель (ТЗ п.5.8, п.10).
 * - height 18px, не масштабируется по Y.
 * - цвет заливки передаётся через currentColor / Tailwind-класс.
 */
interface ScallopedDividerProps {
  /** Куда смотрят зубцы: "down" — секция обрывается вниз; "up" — вверх. */
  dir?: "down" | "up";
  className?: string;
  /** Фон: paper/seafoam/teal/etc. По умолчанию — paper. */
  fillClass?: string;
}

export function ScallopedDivider({ dir = "down", className = "", fillClass = "bg-paper" }: ScallopedDividerProps) {
  return (
    <div
      aria-hidden
      className={`relative w-full h-[18px] ${fillClass} ${dir === "down" ? "border-scalloped-down" : "border-scalloped-up"} ${className}`}
    />
  );
}
