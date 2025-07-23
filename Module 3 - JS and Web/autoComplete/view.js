import { handleAdd } from "./controller.js";

let wordsCounter = 0;

const addWordButton = document.querySelector('#add-word');
const newWordInput = document.querySelector('#new-word-input')


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

// Utility functions
function displayWordSucces(word)  {
    console.log('success: ', word);    
}

function displayWordError(err) {
    console.log('add word error: ', err);
    
}

function updateCounter() {
    document.querySelector('#counter').innerHTML = wordsCounter;
}


