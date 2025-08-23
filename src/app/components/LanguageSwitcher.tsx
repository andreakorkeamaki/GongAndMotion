'use client';

import { usePathname, useRouter } from 'next/navigation';
import { locales, localeNames, localeFlags, type Locale } from '@/i18n/config';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split('/')[1] as Locale;

  const switchLanguage = (newLocale: Locale) => {
    // Replace the current locale in the pathname with the new one
    const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <div className="flex items-center gap-2">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLanguage(locale)}
          className={`flex items-center gap-1 px-3 py-1 rounded-md text-sm transition-colors ${
            currentLocale === locale
              ? 'bg-primary text-white'
              : 'hover:bg-gray-100 text-gray-700'
          }`}
          aria-label={`Switch to ${localeNames[locale]}`}
        >
          <span>{localeFlags[locale]}</span>
          <span>{locale.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
}
