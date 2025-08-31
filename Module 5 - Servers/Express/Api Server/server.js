const express = require('express');
const { fetchPosts, fetchComments } = require('./controllers/postsController.js');
const { postsRouter } = require('./routes/postsRouter.js');
const app = express();
const PORT = 8080;


app.use(express.json());
app.use('/posts', postsRouter);


// app.get('/', (req, res) => {
//     res.status(200).send('Server running')
// })


app.listen(PORT, () => {
    console.log('Server running on port ', PORT);
    
    init();

})

async function init() {
    await fetchPosts();
    fetchComments();
}