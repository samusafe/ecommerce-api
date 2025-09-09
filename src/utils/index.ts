import en from './locales/en.json';
import pt from './locales/pt.json';

export const locales = {
  en,
  pt,
};

export type Locale = keyof typeof locales;
