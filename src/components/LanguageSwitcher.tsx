"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { locales, type Locale } from "@/lib/i18n";

function replaceLocale(pathname: string, nextLocale: Locale) {
    const segs = pathname.split("/");
    if (locales.includes(segs[1] as Locale)) {
        segs[1] = nextLocale;
    } else {
        segs.splice(1, 0, nextLocale);
    }
    return segs.join("/") || "/";
}

export default function LanguageSwitcher() {
    const pathname = usePathname() || "/";
    return (
        <div className="flex items-center gap-2">
            <Link href={replaceLocale(pathname, "vi")} className="btn btn-sm btn-white">VI</Link>
            <Link href={replaceLocale(pathname, "en")} className="btn btn-sm btn-white">EN</Link>
        </div>
    );
}
