import Tweeter from "./model.js";
import { Renderer } from "./render.js";

const renderer = new Renderer()
const tweeter = new Tweeter();

document.addEventListener('DOMContentLoaded', () => {    
    document.querySelector('#add-post').addEventListener('click', handleAddPost)

    renderer.render(tweeter.getPosts());
})

export function handleDeletePost(id) {        
    console.log('Deleted Post');    
    tweeter.removePost(id);
    renderer.render(tweeter.getPosts());
}

function handleAddPost() {
    const postInput = document.querySelector('#new-post-input');
    tweeter.addPost(postInput.value);
    postInput.value = null;
    renderer.render(tweeter.getPosts());

}

export function handleDeleteComment(postId, commentId) {
    console.log('Deleted comment');
    
    tweeter.removeComment(postId, commentId);
    renderer.render(tweeter.getPosts());
}

export function handleAddComment(postId, text) {
    tweeter.addComment(postId, text);
    renderer.render(tweeter.getPosts());
}