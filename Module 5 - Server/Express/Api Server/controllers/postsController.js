const { updatePosts, loadComments, getPosts } = require('../models/postsModel.js')
const { formatPosts, generateNewId } = require('../utils/postUtils.js')

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

function editComment(postId, commentId, body) {
    const post = getPosts()[postId]
    if (!post) {
        console.log('could not find post');        
        return null;
    }
    const filteredComments = post.comments.filter(c => c.id == commentId);
    if (!filteredComments.length) {
        console.log('could not find comment');
        return null;
    }
    const comment = filteredComments[0];
            

    if (body.name) {comment.name = body.name};
    if (body.email) {comment.email = body.email};
    if (body.body) {comment.body = body.body};

    console.log('--comment:', comment);
    
    return comment;
}

function addPost(post) {
    // Generate new Id
    const allPosts = getPosts();
    post.comments = [];
    const newId = generateNewId(allPosts);
    allPosts[newId] = post;    
}

function deletePost(postId) {
    // Generate new Id
    const allPosts = getPosts();
    if (postId in allPosts) {
        delete allPosts[postId];
        return true;   
    }
    return false;
     
}


module.exports = { fetchPosts, fetchComments, editComment, addPost, deletePost };