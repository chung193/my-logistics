import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import { locales } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default function LocaleLayout({
    children,
    params
}: { children: ReactNode; params: { locale: Locale } }) {
    const { locale } = params;
    if (!locales.includes(locale)) notFound();
    // Không render <html> ở đây (html đã ở app/layout.tsx)
    return <>{children}</>;
}
