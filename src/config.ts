import dotenv from 'dotenv';

dotenv.config();

interface Config {
  port: number;
  databaseUrl: string;
  jwtSecret: string;
  jwtExpiration: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 5000,
  databaseUrl: process.env.DATABASE_URL ? process.env.DATABASE_URL : '',
  jwtSecret: process.env.JWT_SECRET ? process.env.JWT_SECRET : 'defaultSecret',
  jwtExpiration: process.env.JWT_EXPIRES_IN ? process.env.JWT_EXPIRES_IN : '1h',
};

export default config;
