import type { Locale } from './config';

// Client-side dictionary loader (no server-only import)
export const getClientDictionary = async (locale: Locale) => {
  try {
    if (locale === 'sv') {
      const dict = await import('./dictionaries/sv.json');
      return dict.default;
    } else {
      const dict = await import('./dictionaries/en.json');
      return dict.default;
    }
  } catch {
    console.warn('Failed to load dictionary, falling back to English');
    const dict = await import('./dictionaries/en.json');
    return dict.default;
  }
};
