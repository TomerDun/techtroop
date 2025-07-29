const baseUrl = 'https://jsonplaceholder.typicode.com'

async function dash() {
    const [users, posts, comments] = await Promise.all(
        [
            fetch(baseUrl + '/users').then(data => data.json()),
            fetch(baseUrl + '/posts').then(data => data.json()),
            fetch(baseUrl + '/comments').then(data => data.json()),
        ]
    )

    const summary = {
        totalUsers: users.length,
        totalPosts: posts.length,
        totalComments: comments.length,
        avgPostsPerUser: posts.length / users.length,
        avgCommentsPerPost: comments.length / posts.length
    }

     const postsById = getPostsById(posts);
     console.log('-----------postsBtId');
     console.log(postsById);
     
     
     let sortedUserIds = Object.keys(postsById) // all the user ids
     sortedUserIds.sort((curr, next) => postsById[next].length - postsById[curr].length);     

     console.log('sortedPosts-------');
     console.log(sortedUserIds);     
     

     const topUsers = [];
     for (let i = 0; i < 3; i++) {
        const newTopUser = {
            name: users[sortedUserIds[i]].name,
            postCount: postsById[sortedUserIds[i]].length,
            commentCount: getUserCommentCount(postsById[sortedUserIds[i]], comments),
        }
        topUsers.push(newTopUser)
     }

     return {summary: summary, topUsers: topUsers}
}

function getPostsById(posts) {
    const ids = {}
    for (let post of posts) {
        if (post.userId in ids) ids[post.userId].push(post.id);
        else ids[post.userId] = [post.id];
    }    
    return ids;
}

function getUserCommentCount(postIds, comments) {    
    console.log('POSTIDs: ', postIds)
    console.log('TYPE', typeof postIds[9])
    const filteredComments = comments.filter(comment => postIds.includes(comment.postId));
    return filteredComments.length;
}

dash().then(console.log);


