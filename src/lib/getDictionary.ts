import "server-only";
import type { Locale } from "./i18n";

export async function getDictionary(locale: Locale) {
    switch (locale) {
        case "en":
            return (await import("../dictionaries/en.json")).default;
        case "vi":
        default:
            return (await import("../dictionaries/vi.json")).default;
    }
}
