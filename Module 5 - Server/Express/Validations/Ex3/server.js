import express from 'express';
import { postsRouter } from './routes/postsRouter.js';
import { errorHandler } from './middleware/errorHandler.js';
import { reqLogger } from './middleware/generalFormatter.js';

const app = express();

app.use(express.json());
app.use(reqLogger);
app.use('/posts' ,postsRouter);

app.get('/', (req, res) => {
    res.send('Server runnign fine!')
})


app.use(errorHandler);

app.listen(8080, () => {
    console.log('server listening on port 8080...');
    
})

