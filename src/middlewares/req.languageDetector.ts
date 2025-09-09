import { Request, Response, NextFunction } from 'express';
import { locales } from '../utils';
import config from '../config';

export function languageDetector(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const supported = Object.keys(locales);
  const header = req.headers['accept-language'];

  let lang = config.defaultLanguage;
  if (typeof header === 'string') {
    const detected = header.split(',')[0].split('-')[0];
    if (supported.includes(detected)) lang = detected;
  }
  req.language = lang;
  next();
}
