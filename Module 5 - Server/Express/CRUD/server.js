import express from 'express';

const app = express();

app.use(express.json());

app.get('/sanity', (req, res) => {
    res.send('Server is running!')
})

app.listen(8080, (req, res) => {
    console.log('Server is running on port 8080');
})