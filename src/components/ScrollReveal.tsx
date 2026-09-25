"use client";

import { useEffect } from "react";

/** Fades in every `[data-reveal]` element the first time it scrolls into view. */
export function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    targets.forEach((el) => observer.observe(el));
    root.classList.add("reveal-ready");

    return () => observer.disconnect();
  }, []);

  return null;
}
