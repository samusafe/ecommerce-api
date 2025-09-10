export default () => ({
  port: process.env.PORT,
  database: {
    url: process.env.DATABASE_URL,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'defaultSecret',
    expiresIn: process.env.JWT_EXPIRES_IN || '60m',
  },
  cors: {
    allowedOrigins: process.env.ALLOWED_ORIGINS
      ? process.env.ALLOWED_ORIGINS.split(',')
      : ['http://localhost:3000'],
  },
  i18n: {
    defaultLanguage: 'en',
  },
  authDto: {
    defaultRole: 'user',
    minPasswordLength: 6,
  },
});
