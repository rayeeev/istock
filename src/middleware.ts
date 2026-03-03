import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["ru", "en", "kk"];
const defaultLocale = "ru";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check if there is any supported locale in the pathname
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    // Redirect if there is no locale
    const locale = defaultLocale;
    request.nextUrl.pathname = `/${locale}${pathname}`;
    // e.g. incoming request is /products
    // The new URL is now /en/products
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        // Skip internal paths (_next), static files (anything with a dot), and api routes
        '/((?!_next|favicon.ico|images|api|.*\\..*).*)',
    ],
};
