import express from 'express';
import { posts } from '../models/postsModel.js';
import { postValidation } from '../middleware/postValidator.js';
import { addPost } from '../controllers/postsController.js';
import { addComment, getPostComments } from '../controllers/commentsController.js';
import { commentSchema, validateComment } from '../middleware/commentValidator.js';

export const postsRouter = express.Router();

postsRouter.get('/', (req, res) => {
    res.json(posts);
})
postsRouter.post('/', postValidation, addPost)


postsRouter.get('/:postId/comments', getPostComments);
postsRouter.post('/:postId/comments',commentSchema, validateComment, addComment);