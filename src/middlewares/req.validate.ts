import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { HttpStatus } from '../utils/httpStatus';

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(HttpStatus.BAD_REQUEST).json({ errors: errors.array() });
    return;
  }
  next();
};
