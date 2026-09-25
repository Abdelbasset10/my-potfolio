"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

const sections = ["about", "skills", "experience", "projects", "education", "contact"] as const;

type Props = {
  locale: Locale;
  brand: string;
  dict: Pick<Dictionary, "nav" | "theme" | "language">;
};

export function Navbar({ locale, brand, dict }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#top" className="text-base font-semibold tracking-tight">
          {brand}
        </a>

        <nav className="hidden md:block" aria-label={dict.nav.main}>
          <ul className="flex items-center gap-1 text-sm">
            {sections.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="rounded-md px-3 py-2 text-muted transition-colors hover:text-foreground">
                  {dict.nav[id]}
                </a>
              </li>
            ))}
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
        <nav id="mobile-menu" className="border-t border-border/60 md:hidden" aria-label={dict.nav.main}>
          <ul className="container-page flex flex-col py-2">
            {sections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-muted transition-colors hover:text-foreground"
                >
                  {dict.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
