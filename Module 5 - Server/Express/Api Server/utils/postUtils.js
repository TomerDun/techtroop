function formatPosts(posts) {
   const output = {};
   for (const post of posts)  {
    const postId = post.id;
    const newPost = {...post};
    delete newPost.id;
    output[postId] = newPost;    
   }

   return output;
}

module.exports = {formatPosts}