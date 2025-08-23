import 'server-only';
import type { Locale } from './config';

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  sv: () => import('./dictionaries/sv.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries.en();
};
