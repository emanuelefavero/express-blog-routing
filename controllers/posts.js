import {
  getAllPosts,
  getPostsByTag,
  getSinglePostById,
  searchPosts,
  sortPostsById,
  sortPostsByTitle,
} from '../data/posts.js';

export const getPosts = (req, res) => {
  const { tag, search, sortBy, order } = req.query;

  let posts = getAllPosts();

  if (tag) {
    posts = getPostsByTag(tag);
  }

  if (search) {
    posts = searchPosts(search);
  }

  if (sortBy === 'id') {
    posts = sortPostsById(order);
  }

  if (sortBy === 'title') {
    posts = sortPostsByTitle(order);
  }

  if (posts.length === 0) {
    res.status(404).json({ message: 'Nessun post trovato' });
  } else {
    res.json(posts);
  }
};

export const getPostById = (req, res) => {
  const { id } = req.params;
  const post = getSinglePostById(id);

  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: 'Post non trovato' });
  }
};

export const createPost = (req, res) => {
  res.send('Creazione di un nuovo post');
};

export const updatePost = (req, res) => {
  const { id } = req.params;
  res.send(`Aggiornamento del post con id: ${id}`);
};

export const deletePost = (req, res) => {
  const { id } = req.params;
  res.send(`Eliminazione del post con id: ${id}`);
};
