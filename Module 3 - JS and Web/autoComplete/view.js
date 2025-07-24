import { handleAdd, handleSuggest } from "./controller.js";

let wordsCounter = 0;

const addWordButton = document.querySelector('#add-word');
const newWordInput = document.querySelector('#new-word-input');
const wordSuggestInput = document.querySelector('#word-suggest');
const suggestionsList = document.querySelector('#suggestions-list');

console.log(wordSuggestInput);



// Event listeners
addWordButton.addEventListener('click', e => {
    const newWord = newWordInput.value;
    const output = handleAdd(newWord);
    if (output === true) {
        displayWordSuccess(newWord);
        wordsCounter++;
    }
    else {
        displayWordError(output);
    }
    updateCounter();
})

wordSuggestInput.addEventListener('input', (e) => {    
    const word = e.target.value;
    if (word) {
        const suggestions = handleSuggest(word);
        displaySuggestions(suggestions);
    }
    else {
        suggestionsList.style.display = 'none';
    }
})



// Utility functions
function displayWordSuccess(word)  {
    console.log('success on ', word);
    
    const infoRow = document.querySelector('#info-row');
    infoRow.classList.remove('error');
    infoRow.textContent = `✔ Added ${word} to dictionary`;
    infoRow.style.display = 'block';

    setTimeout(() => {
        infoRow.style.display = 'none';
    }, 2000)
}

function displayWordError(err) {
    console.log('add word error: ', err);

    const infoRow = document.querySelector('#info-row');
    infoRow.textContent = `Error: ${err}`;
    infoRow.style.display = 'block';

    infoRow.classList.add('error');

    setTimeout(() => {
        infoRow.style.display = 'none';
        infoRow.classList.remove('error');
    }, 2000)
    
}

function displaySuggestions(words) {
    if (words.length) {
        refreshSuggestionsList(words);
        suggestionsList.style.display = 'block';
    }
    else {
        
    }
}

function refreshSuggestionsList(suggestions) {
    suggestionsList.innerHTML = '';
    for (const word of suggestions) {
        const li = document.createElement('li');
        li.textContent = word;
        suggestionsList.appendChild(li);
    }
}

function updateCounter() {
    document.querySelector('#counter').innerHTML = wordsCounter;
}


