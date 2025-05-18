import { Router } from 'express';
import * as AuthController from '../../controllers/auth.controller';
import {
  loginValidator,
  registerValidator,
} from '../../validators/auth.validator';
import { validateRequest } from '../../middlewares/validateRequest';

const router = Router();

router.post('/login', loginValidator, validateRequest, AuthController.login);

router.post(
  '/register',
  registerValidator,
  validateRequest,
  AuthController.register,
);

export default router;
