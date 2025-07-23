import { handleAdd, handleSuggest } from "./controller.js";

let wordsCounter = 0;

const addWordButton = document.querySelector('#add-word');
const newWordInput = document.querySelector('#new-word-input');
const wordSuggestInput = document.querySelector('#word-suggest');


// Event listeners
addWordButton.addEventListener('click', e => {
    const newWord = newWordInput.value;
    const output = handleAdd(newWord);
    if (output === true) {
        displayWordSucces(newWord);
        wordsCounter++;
    }
    else {
        displayWordError(output);
    }
    updateCounter();
})

wordSuggestInput.addEventListener('input ', e => {    
    const word = e.target.value;
    const suggestions = handleSuggest(word);
    if (suggestions !== false) displaySuggestions(suggestions);
    
})



// Utility functions
function displayWordSucces(word)  {
    console.log('success: ', word);    
}

function displayWordError(err) {
    console.log('add word error: ', err);
    
}

function displaySuggestions(words) {
    console.log(words);    
}

function updateCounter() {
    document.querySelector('#counter').innerHTML = wordsCounter;
}


