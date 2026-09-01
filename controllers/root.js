import { apiEndpoints } from '../data/root.js';

export const getRoot = (req, res) => {
  res.json({
    message: 'Welcome to the Express Blog API',
    apiEndpoints,
  });
};
