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

function generateNewId(items) {      
   const keys = Object.keys(items).map(key => Number(key));            
   const maxId = Math.max(...keys);            
   return maxId + 1;
}

module.exports = {formatPosts, generateNewId}