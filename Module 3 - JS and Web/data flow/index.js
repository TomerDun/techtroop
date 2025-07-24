// Model - data storage
let posts = [] // {name, content}


// Controller

function renderPosts() {
    const postsDiv = document.querySelector('#posts');
    postsDiv.innerHTML = '';
    for (const post of posts) {
        const div = document.createElement('div');
        div.className = 'post';
        const nameSpan = document.createElement('span');
        nameSpan.textContent = post.name;
        nameSpan.className = 'post-name';
        const contentSpan = document.createElement('span');
        contentSpan.textContent = post.content;
        div.appendChild(nameSpan);
        div.appendChild(contentSpan);

        div.addEventListener('click', e => {
            removePost(post.content);
            renderPosts();
        })

        postsDiv.appendChild(div);        
    }
}

function addPost(name, content) {
    posts.push({name, content});
    renderPosts();
}

function removePost(postContent) {
    const newPosts = posts.filter(p => p.content !== postContent);
    posts = [...newPosts];
}

// Event handlers
const addButton = document.querySelector('#submit');
addButton.addEventListener('click', () => {
    const name = document.querySelector('#name-input').value;
    const content = document.querySelector('#content-input').value;
    addPost(name, content);
})