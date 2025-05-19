import { Request, Response, NextFunction } from 'express';
import { locales } from '../utils';

export function languageDetector(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const supported = Object.keys(locales);
  const header = req.headers['accept-language'];

  let lang = 'en';
  if (typeof header === 'string') {
    const detected = header.split(',')[0].split('-')[0];
    if (supported.includes(detected)) lang = detected;
  }
  // @ts-ignore
  req.language = lang;
  next();
}
