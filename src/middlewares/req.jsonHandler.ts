import { Request, Response, NextFunction } from 'express';
import { HttpStatus } from '../utils/httpStatus';
import { error } from '../utils/apiResponse';
import { Locale } from '../utils';

export function jsonErrorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (err instanceof SyntaxError && 'body' in err) {
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json(error('REQUEST.INVALID_JSON', req.language as Locale));
  }

  next(err);
}
