import express from 'express';
import { postsRouter } from './routes/postsRouter.js';
import { errorHandler } from './middleware/errorHandler.js';
import { reqLogger, resFormatter } from './middleware/generalFormatter.js';
import rateLimit from 'express-rate-limit'

const app = express();

const rateLimiter = rateLimit({
    windowMs: 1000 * 60,
    max: 2,
    message: 'Rate limit passed.'

})

app.use(express.json());
app.use(rateLimiter);
app.use(reqLogger);
// app.use(resFormatter)

app.use('/posts' ,postsRouter);

app.get('/', (req, res) => {
    res.send('Server runnign fine!')
})


app.use(errorHandler);

app.listen(8080, () => {
    console.log('server listening on port 8080...');
    
})

