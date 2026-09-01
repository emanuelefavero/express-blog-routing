import path from 'node:path';
import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.static(path.join(import.meta.dirname, 'public')));

app.get('/', (_, res) => res.json({ message: 'Hi' }));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
