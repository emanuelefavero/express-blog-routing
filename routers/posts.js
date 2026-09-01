import { Router } from 'express';

export const postsRouter = Router();

postsRouter.get('/', (_, res) => {
  res.send('Lista dei posts');
});

postsRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Dettaglio del post con id: ${id}`);
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
