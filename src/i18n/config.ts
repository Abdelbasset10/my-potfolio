export const locales = ["en", "fr", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
export const localeCookie = "NEXT_LOCALE";

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  ar: "العربية",
};

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const getDirection = (locale: Locale) => (locale === "ar" ? "rtl" : "ltr");
