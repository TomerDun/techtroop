// Starter code structure:
async function getUserWithPosts(userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userData = await res.json();    
    if (!userData.id) {
        return 'No user found'
    }
    
    const postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const postsData = await postsRes.json();

    return {...userData, posts: [...postsData]};
  // Your implementation here
  // 1. Fetch user from: https://jsonplaceholder.typicode.com/users/${userId}
  // 2. Fetch posts from: https://jsonplaceholder.typicode.com/posts?userId=${userId}
  // 3. Return combined data
}

getUserWithPosts(7).then(console.log);

