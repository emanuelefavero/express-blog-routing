import {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  updatePost,
} from '../controllers/posts.js';

export const registerPosts = (app) => {
  app.route('/posts').get(getPosts).post(createPost);
  app.route('/posts/:id').get(getPostById).put(updatePost).delete(deletePost);
};
