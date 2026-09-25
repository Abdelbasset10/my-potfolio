import type { Locale } from "@/i18n/config";
import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";
import type { Resume, YearMonth } from "./types";

const resumes: Record<Locale, Resume> = { en, fr, ar };

export const getResume = (locale: Locale) => resumes[locale];

// Latin digits in Arabic too, as is usual in Algeria.
const intlLocale: Record<Locale, string> = { en: "en-US", fr: "fr-FR", ar: "ar-DZ-u-nu-latn" };

export function formatMonth(value: YearMonth, locale: Locale) {
  const [year, month] = value.split("-").map(Number);
  return new Intl.DateTimeFormat(intlLocale[locale], { month: "short", year: "numeric", timeZone: "UTC" }).format(
    new Date(Date.UTC(year, month - 1, 1)),
  );
}

export * from "./shared";
export type * from "./types";
