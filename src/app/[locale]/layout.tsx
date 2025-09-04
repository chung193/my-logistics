import type { ReactNode } from "react";
import LayoutProps from "next";
import { notFound } from "next/navigation";
import { locales } from "@/lib/i18n"; // e.g. ['vi','en'] as const
import type { Locale } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

function isLocale(x: string): x is Locale {
    return (locales as readonly string[]).includes(x);
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
    const { locale } = await params; // <- BẮT BUỘC await
    if (!isLocale(locale)) notFound();

    return (
        <section data-locale={locale}>
            <Header params={{ locale }} />
            {children}
            <BackToTop />
            <Footer params={{ locale }} />
        </section>
    );
}

// (không bắt buộc, nhưng nên có nếu build static)
export function generateStaticParams() {
    return (locales as readonly string[]).map((l) => ({ locale: l }));
}
