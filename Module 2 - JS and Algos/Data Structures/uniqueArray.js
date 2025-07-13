class uniqueArray {
    constructor() {
        this.items = [];
        this.itemsHistory = {};
    }

    add(item) {
        if (item in this.itemsHistory) return -1;
        this.items.push(item);
        this.itemsHistory[item] = true;
        
    }

    showAll() {
        console.log(this.items);        
    }

    exists(item) {
        return item in this.itemsHistory;
    }

    get(index) {
        return this.items[index];
    }
}