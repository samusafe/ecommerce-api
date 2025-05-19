import express, { Application, ErrorRequestHandler } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import config from './config';
import { routes } from './routers/router';
import { languageDetector } from './middlewares/req.languageDetector';
import { jsonErrorHandler } from './middlewares/req.jsonHandler';

const app: Application = express();
const PORT = config.port;

// Middlewares
app.use(
  cors({
    // origin: '*', // Replace with your frontend URL
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);
app.use(helmet());
app.use(
  express.json({
    strict: true,
    type: 'application/json',
    limit: '1mb',
  }),
);

app.use(jsonErrorHandler as ErrorRequestHandler);

app.use(languageDetector);

// Initial route
routes.forEach(({ path, router }) => {
  app.use(path, router);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
