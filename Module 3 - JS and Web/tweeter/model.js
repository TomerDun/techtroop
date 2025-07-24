let posts = [
    {
        text: "First post!",
        id: "p1",
        comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" }
        ]
    },
    {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
            { id: "c4", text: "Don't worry second poster, you'll be first one day." },
            { id: "c5", text: "Yeah, believe in yourself!" },
            { id: "c6", text: "Haha second place what a joke." }
        ]
    }
]

let postIdCounter = 2;
let commentIdCounter = 6;

function getNewPostId() {
    return 'p' + postIdCounter
}

function getNewCommentId() {
    return 'c' + commentIdCounter;
}

export function getPosts() {
    return posts;
}

export function addPost(text) {
    const newPost = {
        text,
        id : getNewPostId(),
        comments: [],
    }
}

export function removePost(id) {
    posts = posts.filter(p => p.id !== id);    
}

export function addComment(postId, text) {
    const newComment = {id: getNewCommentId(), text};
    for (let i in posts) {
        if (posts[i].id === postId) {
            posts[i].comments.push(newComment);
            return i;
        }
    }
}

export function removeComment(postId, commentId) {
    for (let i in posts) {
        if (posts[i].id === postId) {
            posts[i].comments = posts[i].comments.filter(c => c.id !== commentId);
        }
    }
}
