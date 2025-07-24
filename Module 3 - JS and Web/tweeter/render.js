import { handleAddComment, handleDeleteComment, handleDeletePost } from "./main.js";
import Tweeter from "./model.js";

export class Renderer {
    constructor() {}

    render(posts) {
        const postsDiv = document.querySelector('#posts-container');
        postsDiv.innerHTML = '';

        for (const post of posts) {
            // container
            const postDiv = document.createElement('div');
            postDiv.className = 'post-container';
            postDiv.setAttribute('data-id', post.id);

            // content
            const postContent = document.createElement('p');
            postContent.className = 'post-content';
            postContent.innerText = post.text;
            postDiv.appendChild(postContent);

            // Delete button
            const postDeleteButton = document.createElement('button');
            postDeleteButton.className = 'post-delete-button';
            postDeleteButton.setAttribute('data-id', post.id);
            postDeleteButton.innerText = 'Delete'; 

            postDeleteButton.addEventListener('click', (e) => {
                handleDeletePost(post.id);
            })
            postDiv.appendChild(postDeleteButton);
            
            
            // comments
            const commentsContaier = document.createElement('div');
            commentsContaier.className = 'comments-container';
            postDiv.appendChild(commentsContaier);
            this._renderComments(commentsContaier, post);
            postDiv.appendChild(commentsContaier);

            postsDiv.appendChild(postDiv);

            // Add comment
            const addCommentRow = document.createElement('div');
            addCommentRow.className = 'add-comment-row';
            postDiv.appendChild(addCommentRow);

            const addCommentInput = document.createElement('input');
            addCommentInput.placeholder = 'Write you comment';
            addCommentInput.className = 'add-comment-input';
            addCommentRow.appendChild(addCommentInput);
            
            const addCommentButton = document.createElement('button');
            addCommentButton.className = 'add-comment';
            addCommentButton.innerText = 'Comment';
            addCommentButton.addEventListener('click', e => handleAddComment(post.id, addCommentInput.value));
            addCommentRow.appendChild(addCommentButton);
        }
    }

    _renderComments(container, post) {
        for (const comment of post.comments) {
            const commentRow = document.createElement('div');
            commentRow.className = 'comment-row';

            // Delete button
            const deleteButton = document.createElement('button');
            deleteButton.className = 'comment-delete-button';
            deleteButton.innerText = '🔥'
            deleteButton.setAttribute('data-id', comment.id);

            deleteButton.addEventListener('click', e => handleDeleteComment(post.id, comment.id));
            commentRow.appendChild(deleteButton);

            // Comment content
            const commentContent = document.createElement('p');
            commentContent.className = 'comment-content';
            commentContent.innerText = comment.text;
            commentRow.appendChild(commentContent);

            container.appendChild(commentRow);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const t = new Tweeter();
    const r = new Renderer();
    r.render(t.getPosts());
})