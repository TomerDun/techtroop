const { updatePosts, loadComments } = require('../models/postsModel.js')
const { formatPosts } = require('../utils/postUtils.js')

async function fetchPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Error fetching posts, code: ', res.status)
    }

    const data = await res.json();
    const newPosts = formatPosts(data);

    updatePosts(newPosts);
    console.log('--fetched posts and updated the model!');
}

async function fetchComments() {
    const url = 'https://jsonplaceholder.typicode.com/comments'
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Error fetching comments, code: ', res.status)
    }

    const data = await res.json();
    loadComments(data);

    
    console.log('--fetched and loaded comments');
}

module.exports = { fetchPosts, fetchComments };