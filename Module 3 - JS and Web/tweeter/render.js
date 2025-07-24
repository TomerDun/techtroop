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
            postDiv.appendChild(postDeleteButton);
            
            // comments
            const commentsContaier = document.createElement('div');
            commentsContaier.className = 'comments-container';
            postDiv.appendChild(commentsContaier);
            this._renderComments(commentsContaier, post);
            postDiv.appendChild(commentsContaier);

            postsDiv.appendChild(postDiv);
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