import { handleAdd } from "./controller";

const addWordButton = document.querySelector('#add-word');
const newWordInput = document.querySelector('#new-word-input')


// Event listeners
addWordButton.addEventListener('click', e => {
    const newWord = newWordInput.value;
    const output = handleAdd(word);
    if (output) {
        displayWordSucces(newWord);
    }
    else {
        displayWordError(output);
    }
})

// Utility functions
function displayWordSucces(word)  {
    console.log('success: ', word);    
}

function displayWordError(err) {
    console.log('add word error: ', err);
    
}


