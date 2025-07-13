const promptSync = require('prompt-sync');

const prompt = promptSync();

const questions = [
    {question: 'how many days in a week: ', answer: 7},
    {question: 'How many hours in a day: ', answer: 24},
    {question: 'How many minutes in an hours: ', answer: 60},
]
let score = 0;


for (let i = 0; i < questions.length; i++) {
    const input = prompt(questions[i].question);
    if (input == questions[i].answer) score ++;
}

console.log(`Final score: ${score}/${questions.length}`);

