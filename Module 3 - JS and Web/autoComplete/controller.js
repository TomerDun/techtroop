import AutoCompleteTrie from "./autoCompleteTrie.js"


function validateWord(word) {    
    if (!word) throw new Error('Cannot add empty word');
    if(!/^[a-zA-Z]+$/.test(word)){
        throw new Error("Invalid Word")
    }
    if (dict.findWord(word)) throw new Error('Word already exists in dictionary')
    return true;    
}

const dict = new AutoCompleteTrie();

// TODO: Check if word already exists
export function handleAdd(word) {
    try {
        validateWord(word)        
    } catch (err) {
        return err.message
    }
    dict.addWord(word);
    return true;
}

export function handleSuggest(word) {
    try {
        validateWord(word)
        return dict.predictWords(word);
    } catch {
        return false;
    }
    
}