import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, hasLocale, localeCookie, locales } from "@/i18n/config";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocalePrefix) return;

  // English by default; only a language the visitor picked before overrides it.
  const saved = request.cookies.get(localeCookie)?.value;
  const locale = saved && hasLocale(saved) ? saved : defaultLocale;

  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Skip Next internals, API routes and files with an extension (favicon, images…).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
