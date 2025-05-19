import { en } from './locales/en';
import { pt } from './locales/pt';

export const locales = {
  en,
  pt,
};

export type Locale = keyof typeof locales;
