import AutoCompleteTrie from "./autoCompleteTrie"


function validateWord(word) {    
    if (!word) throw new Error('Cannot add empty word');
    if(!/^[a-zA-Z]+$/.test(word)){
        throw new Error("Invalid Word")
    }
    return true;    
}

const dict = new AutoCompleteTrie();

export function handleAdd(word) {
    try {
        validateWord(word)        
    } catch (err) {
        return err
    }
    dict.addWord(word);
    return true;
}