const expres = require('express');
const {get, logPosts, getPosts} = require('../models/postsModel');

const postsRouter = expres.Router();

postsRouter.get('/', (req, res) => {
    const posts = getPosts();
    res.status(200).send(posts);
    
    
    res.status(200).send(postsObj);
})

postsRouter.get('/:postId', (req, res) => {
    const postId = req.params.postId;
    const posts = getPosts();
    if (!posts[postId]) {
        res.status(400).json({error: 'Post not found'});
    }
    else {
        res.status(200).send(posts[postId]);
    }
})

module.exports = {postsRouter};