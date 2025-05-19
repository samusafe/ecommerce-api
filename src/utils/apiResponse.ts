import { getMessage } from './messages';
import type { Locale } from './index';
import type { MessageKey } from './types';

type APIResponse<T = unknown> = {
  success: boolean;
  message: string;
  data?: T;
};

export function success<T = unknown>(
  key: MessageKey,
  lang: Locale = 'en',
  data?: T,
): APIResponse<T> {
  return {
    success: true,
    message: getMessage(key, lang),
    data,
  };
}

export function error(
  key: MessageKey | string,
  lang: Locale = 'en',
): APIResponse<null> {
  return {
    success: false,
    message: getMessage(key as MessageKey, lang),
    data: null,
  };
}
