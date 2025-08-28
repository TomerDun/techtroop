import express from 'express';
import { posts } from '../models/postsModel.js';
import { postValidation } from '../middleware/postValidator.js';
import { addPost } from '../controllers/postsController.js';

export const postsRouter = express.Router();

postsRouter.get('/', (req, res) => {
    res.json(posts);
})

postsRouter.post('/', postValidation, addPost)