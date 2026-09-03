import { getRoot } from '../controllers/root.js';

export const registerRoot = (app) => {
  app.get('/', getRoot);
};
