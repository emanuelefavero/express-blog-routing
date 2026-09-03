import {
  getAllPosts,
  getPostsByTag,
  getSinglePostById,
  searchPosts,
  sortPostsById,
  sortPostsByTitle,
} from '../data/posts.js';
import { validatePostId, validatePostQuery } from '../validation/posts.js';

export const getPosts = (req, res) => {
  const { tag, search, sortBy, order } = req.query;

  const validationError = validatePostQuery({ tag, search, sortBy, order });
  if (validationError)
    return res.status(400).json({ message: validationError });

  let posts = getAllPosts();

  if (tag) posts = getPostsByTag(tag, posts);
  if (search) posts = searchPosts(search, posts);
  if (sortBy === 'id') posts = sortPostsById(order, posts);
  if (sortBy === 'title') posts = sortPostsByTitle(order, posts);

  return res.json(posts);
};

export const getPostById = (req, res) => {
  const id = Number(req.params.id);

  const idValidationError = validatePostId(id);
  if (idValidationError)
    return res.status(400).json({ message: idValidationError });

  const post = getSinglePostById(id);

  if (!post) return res.status(404).json({ message: 'Post non trovato' });

  return res.json(post);
};

export const createPost = (req, res) => {
  res.send('TODO: Creazione di un nuovo post');
};

export const updatePost = (req, res) => {
  const { id } = req.params;
  res.send(`TODO: Aggiornamento del post con id: ${id}`);
};

export const deletePost = (req, res) => {
  const { id } = req.params;
  res.send(`TODO: Eliminazione del post con id: ${id}`);
};
