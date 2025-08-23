export const defaultLocale = 'en' as const;
export const locales = ['en', 'sv'] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  sv: 'Svenska',
};

export const localeFlags: Record<Locale, string> = {
  en: '🇬🇧',
  sv: '🇸🇪',
};
