import { Router } from 'express';
import { getAllPosts, getSinglePostById } from '../data/posts.js';

export const postsRouter = Router();

postsRouter.get('/', (_, res) => {
  const posts = getAllPosts();
  res.json(posts);
});

postsRouter.get('/:id', (req, res) => {
  const { id } = req.params;

  const post = getSinglePostById(id);
  res.json(post);
});

postsRouter.post('/', (req, res) => {
  res.send('Creazione di un nuovo post');
});

postsRouter.put('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Aggiornamento del post con id: ${id}`);
});

postsRouter.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Eliminazione del post con id: ${id}`);
});
