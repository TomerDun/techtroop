const express = require('express');
const {get, logPosts, getPosts} = require('../models/postsModel');
const { editComment, addPost, deletePost } = require('../controllers/postsController');

const postsRouter = express.Router();

postsRouter.get('/', (req, res) => {
    const posts = getPosts();
    res.status(200).send(posts);            
})

postsRouter.post('/', (req, res) => {
    addPost(req.body);
    res.status(201).send({msg: 'Added post'})
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

postsRouter.delete('/:postId', (req, res) => {
    if (deletePost(req.params.postId)) {
        res.status(204).send('Post Deleted')
    } else {
        res.status(400).send('Could not find post')
    }
    
})

postsRouter.get('/:postId/comments', (req, res) => {
    const postId = req.params.postId;
    const posts = getPosts();
    if (!posts[postId]) {
        res.status(400).json({error: 'Post not found'});
    }
    else {
        res.status(200).send(posts[postId].comments);
    }
})

postsRouter.put('/:postId/:commentId', (req, res) => {        
    const newComment = editComment(req.params.postId, req.params.commentId, req.body);
    if (!newComment) {
        console.log('--no new comment');
        
        res.status(400).json({erro: 'Could not edit comment'});
    }
    else {
        console.log('--new comment: ', newComment);
        res.status(201).send(newComment);
    }
})

module.exports = {postsRouter};