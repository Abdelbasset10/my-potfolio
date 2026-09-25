"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

const sections = ["about", "skills", "experience", "projects", "education", "contact"] as const;
type SectionId = (typeof sections)[number];

type Props = {
  locale: Locale;
  brand: string;
  dict: Pick<Dictionary, "nav" | "theme" | "language">;
};

export function Navbar({ locale, brand, dict }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<SectionId | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section crossing the upper part of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId);
        }
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    const top = document.getElementById("top");
    const clearOnHero = new IntersectionObserver(([entry]) => entry.isIntersecting && setActive(null), {
      rootMargin: "-35% 0px -60% 0px",
    });
    if (top) clearOnHero.observe(top);
    return () => {
      observer.disconnect();
      clearOnHero.disconnect();
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md transition-[border-color,box-shadow] duration-300 ${
        scrolled ? "border-border/60 shadow-sm shadow-black/5" : "border-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#top" className="text-base font-semibold tracking-tight transition-colors hover:text-accent">
          {brand}
        </a>

        <nav className="hidden md:block" aria-label={dict.nav.main}>
          <ul className="flex items-center gap-1 text-sm">
            {sections.map((id) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative rounded-full px-3 py-2 transition-colors duration-200 hover:bg-foreground/5 hover:text-foreground ${
                      isActive ? "text-foreground" : "text-muted"
                    }`}
                  >
                    {dict.nav[id]}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent transition-[opacity,translate,scale,rotate] duration-300 ${
                        isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher current={locale} label={dict.language.label} />
          <ThemeToggle labels={dict.theme} />
          <button
            type="button"
            className="icon-button md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" className="animate-menu-in border-t border-border/60 md:hidden" aria-label={dict.nav.main}>
          <ul className="container-page flex flex-col py-2">
            {sections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-2 py-3 transition-colors hover:bg-foreground/5 hover:text-foreground ${
                    active === id ? "text-foreground" : "text-muted"
                  }`}
                >
                  {dict.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Reading progress */}
      <div aria-hidden="true" className="scroll-progress absolute inset-x-0 -bottom-px h-0.5 bg-accent" />
    </header>
  );
}
