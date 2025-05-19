import { locales, Locale } from './index';
import type { MessageKey } from './types';

export function getMessage(key: MessageKey, lang: Locale = 'en'): string {
  const keys = key.split('.');
  let message: any = locales[lang];

  for (const k of keys) {
    if (message && typeof message === 'object') {
      message = message[k];
    } else {
      return key; // fallback: return key if not found
    }
  }

  return typeof message === 'string' ? message : key;
}
