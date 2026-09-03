import { getPostsLength } from './posts.js';

const TOTAL_POSTS = getPostsLength();

export const apiEndpoints = {
  posts: {
    totalCount: TOTAL_POSTS,
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
