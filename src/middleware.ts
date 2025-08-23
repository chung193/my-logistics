import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "./lib/i18n";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Bỏ qua file tĩnh & _next
    if (
        PUBLIC_FILE.test(pathname) ||
        pathname.startsWith("/_next") ||
        pathname.startsWith("/assets") ||
        pathname === "/favicon.ico"
    ) {
        return NextResponse.next();
    }

    // Nếu đã có prefix locale thì cho qua
    if (locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) {
        return NextResponse.next();
    }

    // Redirect vào locale mặc định
    const url = req.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|assets).*)"]
};
