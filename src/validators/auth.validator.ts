import { body } from 'express-validator';

export const loginValidator = [
  body('username').notEmpty().withMessage('Username is required'),
  body('password')
    .isLength({ min: 4 })
    .withMessage('Password must be at least 4 characters long'),
];

export const registerValidator = [
  body('username').notEmpty().withMessage('Username is required'),
  body('password')
    .isLength({ min: 4 })
    .withMessage('Password must be at least 4 characters long'),
];
