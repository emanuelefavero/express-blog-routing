import path from 'node:path';
import express from 'express';
import { postsRouter } from './routers/posts.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.static(path.join(import.meta.dirname, 'public')));

app.get('/', (_, res) => res.json({ message: 'Visita /posts' }));

app.use('/posts', postsRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
