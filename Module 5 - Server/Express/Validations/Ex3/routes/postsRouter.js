import express from 'express';
import { posts } from '../models/postsModel.js';

export const postsRouter = express.Router();

postsRouter.get('/', (req, res) => {
    res.json(posts);
})