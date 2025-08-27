import express from 'express';
import { postsRouter } from './routes/postsRouter.js';

const app = express();

app.use(express.json());
app.use('/posts' ,postsRouter)

app.listen(8080, () => {
    console.log('server listening on port 8080...');
    
})