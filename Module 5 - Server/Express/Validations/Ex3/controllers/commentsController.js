import { comments } from "../models/commentsMode.js";
import { posts } from "../models/postsModel.js";

export function getPostComments(req, res) {
    const postComments = comments.filter(c => c.postId == req.params.postId);
    if (!postComments.length) {
        const err = new Error('Could not find post');
        err.status = 400;
        throw err;
    }

    res.status(200).json(postComments);
}

export function addComment(req, res) {
    const findPost = posts.filter(p => p.id == req.params.postId);
    if (!findPost.length) {
        const err = new Error('Could not find post');
        err.status = 400;
        throw err;
    }

    const newComment = { ...req.body };
    newComment.postId = req.params.postId;

    comments.push(newComment);
    res.status(201).json(newComment);
}