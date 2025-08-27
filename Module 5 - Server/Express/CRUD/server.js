import express from 'express';
import { wordCounter } from './models/wordCounter.js';


const app = express();

app.use(express.json());

app.get('/sanity', (req, res) => {
    res.send('Server is running!')
})

app.get('/count', (req, res) => {
    if (req.query.word && req.query.word in wordCounter) {
        res.status(200).json({count: wordCounter[req.query.word]})
    }
    else {
        res.status(400).json({count: 0});
    }
})

app.post('/word', (req, res) => {
    const newWord = req.body.word;
    if (newWord in wordCounter) {
        wordCounter[newWord] ++;
    }
    else {wordCounter[newWord] = 1};

    const output = {
        text: 'added ' + newWord,
        currentCount: wordCounter[newWord],
    }
    res.status(201).json(output);
})

app.listen(8080, (req, res) => {
    console.log('Server is running on port 8080');
})

