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

app.delete('/word', (req, res) => {
    const word = req.query.word;
    if (word in wordCounter) {
        delete wordCounter[word];
        res.status(203).send({msg: 'Word Deleted'});
    }
    else {
        res.status(400).send({msg: 'Word not found'});
    }
})

app.post('/sentence', (req, res) => {
    let newWords = 0;
    let oldWords = 0;

    const words = req.body.sentence.split(' ');
    for (const word of words) {
        if (word in wordCounter) {
            oldWords ++;
            wordCounter[word] ++;
        }
        else {
            newWords ++;
            wordCounter[word] = 1;
        }
    }

    const output = {
        text: `Added ${newWords} New words and updated ${oldWords} Existing words`,
        currentCount: -1
    }

    res.status(201).json(output);
})

app.listen(8080, (req, res) => {
    console.log('Server is running on port 8080');
})

