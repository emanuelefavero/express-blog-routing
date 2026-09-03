import { Post } from './posts.js';

export const apiEndpoints = {
  posts: {
    totalCount: Post.count(),
    endpoints: [
      {
        method: 'GET',
        path: '/posts',
        description: 'Recupera tutti i post',
      },
      {
        method: 'GET',
        path: '/posts/:id',
        description: 'Recupera un singolo post',
      },
      {
        method: 'POST',
        path: '/posts',
        description: 'Crea un nuovo post',
      },
      {
        method: 'PUT',
        path: '/posts/:id',
        description: 'Aggiorna un post',
      },
      {
        method: 'DELETE',
        path: '/posts/:id',
        description: 'Elimina un post',
      },
    ],
  },
};
