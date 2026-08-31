import { defaultLocale, type Locale } from "./config";
import type { Translations } from "./types";
import en from "./en";
import fr from "./fr";
import de from "./de";

const dictionaries: Record<Locale, Translations> = { en, fr, de };

export function getTranslations(locale: Locale | string): Translations {
  return dictionaries[locale as Locale] ?? dictionaries[defaultLocale];
}

export * from "./config";
export type { Translations, FaqItem, BenefitItem } from "./types";
