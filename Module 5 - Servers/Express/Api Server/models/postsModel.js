let postsObj = {}

function addCommentsToPost(id, comments) {
    posts[id].comments = comments;
}

function loadComments(comments) {
    for (const comment of comments) {
        if (!postsObj[comment.postId].comments) {
            postsObj[comment.postId].comments = []
        }

        postsObj[comment.postId].comments.push(comment);
    }
}

function updatePosts(newPosts) {
    postsObj = {...newPosts};        
}

function logPosts() {
    console.log(postsObj)
}

function getPosts() {
    return postsObj;
}

module.exports = {getPosts, updatePosts, loadComments, logPosts};