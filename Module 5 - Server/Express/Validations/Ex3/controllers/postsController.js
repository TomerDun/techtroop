import { posts } from "../models/postsModel.js";

export function addPost(req, res) {
    const newPost = {...req.body};
    newPost.id = posts.length + 1;
    posts.push(newPost);
    res.status(201).json(newPost);
}