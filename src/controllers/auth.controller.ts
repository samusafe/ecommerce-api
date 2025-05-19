import { Request, Response } from 'express';
import * as AuthService from '../services/auth.service';
import { HttpStatus } from '../utils/httpStatus';
import { success } from '../utils/apiResponse';
import { Locale } from '../utils';

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const token = await AuthService.login(username, password);
    res.json({ token });
  } catch (err: any) {
    res.status(HttpStatus.UNAUTHORIZED).json({ error: err.message });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    await AuthService.register(username, password);
    res
      .status(HttpStatus.CREATED)
      .json(success('USER.REGISTER', req.language as Locale, { username }));
  } catch (err: any) {
    res.status(HttpStatus.BAD_REQUEST).json({ error: err.message });
  }
};
