export class Game {
    constructor() {
        this.frogs = []; // frog: {id:num, x:num, y:num}
        this.currentId = 0;
    }

    addFrog() {
        const newFrog = {id: this._generateId()};
        this.frogs.push(newFrog);
    }

    _generateId() {
        this.currentId ++;
        return this.currentId;
    }    
}