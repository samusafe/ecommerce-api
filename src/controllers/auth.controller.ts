import { Request, Response } from 'express';
import * as AuthService from '../services/auth.service';

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const token = await AuthService.login(username, password);
    res.json({ token });
  } catch (err: any) {
    res.status(401).json({ error: err.message });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    await AuthService.register(username, password);
    res.status(201).json({ message: 'User registered' });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
