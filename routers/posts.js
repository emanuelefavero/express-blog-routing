import { Router } from 'express';
import {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  updatePost,
} from '../controllers/posts.js';

export const postsRouter = Router();

postsRouter.get('/', getPosts);
postsRouter.get('/:id', getPostById);
postsRouter.post('/', createPost);
postsRouter.put('/:id', updatePost);
postsRouter.delete('/:id', deletePost);
