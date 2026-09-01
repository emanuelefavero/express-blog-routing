import path from 'node:path';
import express from 'express';
import { postsRouter } from './routers/posts.js';

const PORT = process.env.PORT ?? 3000;

const app = express();

app.use(express.static(path.join(import.meta.dirname, 'public')));

app.get('/', (_, res) => res.json({ message: 'Visita /posts' }));

app.use('/posts', postsRouter);

app.use((_, res) => res.status(404).json({ message: 'Not Found' })); // 404

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
