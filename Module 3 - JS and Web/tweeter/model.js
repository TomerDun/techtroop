const dummyPosts = [
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

export default class Tweeter {
    constructor() {
        this.posts = dummyPosts;
        this.postIdCounter = 2;
        this.commentIdCounter = 6;
    }

    _getNewPostId() {
        return 'p' + (this.postIdCounter + 1);
    }

    _getNewCommentId() {
        return 'c' + (this.commentIdCounter + 1);
    }

    getPosts() {
        return this.posts;
    }

    addPost(text) {
        const newPost = {
            text,
            id: this._getNewPostId(),
            comments: [],
        }

        this.posts.push(newPost);
    }

    removePost(id) {
        this.posts = this.posts.filter(p => p.id !== id);
    }

    addComment(postId, text) {
        const newComment = { id: this._getNewCommentId(), text };
        for (let i in this.posts) {
            if (this.posts[i].id === postId) {
                this.posts[i].comments.push(newComment);
                return;
            }
        }
    }

    removeComment(postId, commentId) {
        for (let i in this.posts) {
            if (this.posts[i].id === postId) {
                this.posts[i].comments = this.posts[i].comments.filter(c => c.id !== commentId);
            }
        }
    }
}

// Testing
const tweeter = new Tweeter();

// Test adding a post
tweeter.addPost("This is my own post!");
console.log(tweeter.getPosts());
// Should add: {text: "This is my own post!", id: "p3", comments: []}

// Test removing a post
tweeter.removePost("p1");

console.log('---------------');
console.log(tweeter.getPosts());
// Should only have two posts left

// Test adding comments
tweeter.addComment("p3", "Damn straight it is!");
tweeter.addComment("p2", "Second the best!");
console.log('---------------');
console.log(tweeter.getPosts());

// Test removing comments
tweeter.removeComment("p2", "c6");
console.log('---------------');
console.log(tweeter.getPosts());



