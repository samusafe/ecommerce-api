import { locales } from './utils';

interface Config {
  port: number;
  databaseUrl: string;
  jwtSecret: string;
  jwtExpiration: string;
  allowedOrigins: string[];

  availableLanguages: string[];
  defaultLanguage: string;
}

const config: Config = {
  port: Number(process.env.BACKEND_PORT) || 5000,
  databaseUrl: process.env.DATABASE_URL ? process.env.DATABASE_URL : '',
  jwtSecret: process.env.JWT_SECRET ? process.env.JWT_SECRET : 'defaultSecret',
  jwtExpiration: process.env.JWT_EXPIRES_IN ? process.env.JWT_EXPIRES_IN : '1h',
  allowedOrigins: process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(',')
    : ['http://localhost:3000'],

  availableLanguages: Object.keys(locales),
  defaultLanguage: Object.keys(locales)[0],
};

export default config;
