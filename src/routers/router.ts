import { Router } from 'express';
import authRoutes from './routes/auth';

interface Route {
  path: string;
  router: Router;
}

export const routes: Route[] = [{ path: '/api/auth', router: authRoutes }];
