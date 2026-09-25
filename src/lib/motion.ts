import type { CSSProperties } from "react";

/** Inline style that staggers `data-reveal` / `animate-fade-up` elements by index. */
export const stagger = (index: number, step = 70, base = 0): CSSProperties =>
  ({ "--delay": `${base + index * step}ms` }) as CSSProperties;
