"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeCookie, localeNames, locales, type Locale } from "@/i18n/config";

type Props = { current: Locale; label: string };

function rememberLocale(locale: Locale) {
  document.cookie = `${localeCookie}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

export function LanguageSwitcher({ current, label }: Props) {
  const pathname = usePathname();
  const rest = pathname.split("/").slice(2).join("/");

  return (
    <nav aria-label={label} className="flex items-center rounded-full border border-border p-0.5 text-xs font-medium">
      {locales.map((locale) => {
        const active = locale === current;
        return (
          <Link
            key={locale}
            href={`/${locale}${rest ? `/${rest}` : ""}`}
            hrefLang={locale}
            lang={locale}
            onClick={() => rememberLocale(locale)}
            aria-current={active ? "true" : undefined}
            title={localeNames[locale]}
            className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
              active ? "bg-foreground text-background" : "text-muted hover:text-foreground"
            }`}
          >
            {locale}
          </Link>
        );
      })}
    </nav>
  );
}
