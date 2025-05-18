import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import config from './config';
import { routes } from './routers/router';

const app: Application = express();
const PORT = config.port;

// Middlewares
app.use(cors());
app.use(express.json());

// Initial route
routes.forEach(({ path, router }) => {
  app.use(path, router);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
