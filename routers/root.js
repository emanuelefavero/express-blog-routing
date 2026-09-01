import { Router } from 'express';
import { getRoot } from '../controllers/root.js';

export const rootRouter = Router();

rootRouter.get('/', getRoot);
