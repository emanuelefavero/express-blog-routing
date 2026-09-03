import { apiEndpoints } from '../data/root.js';

export const index = (req, res) => {
  res.json({
    message: 'Welcome to the Express Blog API',
    apiEndpoints,
  });
};
