import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import { locales } from "@/lib/i18n";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
export default function LocaleLayout({
    children,
    params
}: { children: ReactNode; params: { locale: Locale } }) {
    const { locale } = params;
    if (!locales.includes(locale)) notFound();

    // THÊM mọi thứ anh muốn bọc cho nhánh locale ở đây
    return (
        <section data-locale={locale}>
            <Header params={{
                locale: locale
            }} />
            {children}
            <BackToTop />
            <Footer params={{
                locale: locale
            }} />
        </section>
    );
}
