import express from 'express';
import { logger } from './middleware/logger.js';
import { addCounter } from './middleware/counter.js';

const app = express();

app.use(logger);
app.use(addCounter);

app.get('/', (req, res) => {
    res.send('Welcome to our server!')
})

app.get('/about', (req, res) => {
    res.send('Requests count: ' + req.counter);
})

app.listen(8080, () => {
    console.log('Server listening on port 8080...');
    
})

