export default class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
    }



    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        }
        else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        }
        else if (newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        }
        else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        }
        else {
            this.rightChild = new BSNode(newVal)
        }
    }

    findNode(val) {
        if (this.value === val) return true;
        else if (this.value > val && this.leftChild) return this.leftChild.findNode(val);
        else if (this.value < val && this.rightChild) return this.rightChild.findNode(val);
        else {
            return false;
        }
    }

    findCommonParent(val1, val2) {
        let bigVal = (val1 > val2) ? val1 : val2;
        let smallVal = (val1 < val2) ? val1 : val2;
        

        if (this.value > smallVal && this.value < bigVal) return this.value;

        // check direct child
        if (this.leftChild.value === val1 || this.leftChild.value === val2 || this.rightChild.value === val1 || this.rightChild.value === val2) return this.value;

        else if (this.value > bigVal) return this.leftChild.findCommonParent(val1, val2);
        else return this.rightChild.findCommonParent(val1, val2);

    }

    removeNode(parent, val) {
        // Find Node        
        
        // Recursive case
        if (val > this.value) return this.rightChild.removeNode(this, val);
        else if (val < this.value) return this.leftChild.removeNode(this, val);

        // Found node
        console.log(`this: ${this.value}; parent: ${parent.value}`);

        const isLeft = this.value < parent.value; // help for readability
        const isParent = (parent.value === val); // value is same as the original root

        // No children
        if (!this.leftChild && !this.rightChild) {
            if (isParent) {
                parent = null;
                return parent;
            }

            isLeft ? parent.leftChild = null : parent.rightChild = null;
            return this;
        }
        // One child
        if (!this.leftChild || !this.rightChild) {            
            let childToAdd = this.leftChild || this.rightChild;

            if (isParent) {
                parent = childToAdd;
                return parent;
            }

            isLeft ? parent.leftChild = childToAdd : parent.rightChild = childToAdd;
            return this;
        }
        else { // Two children
            let childToAdd = this.leftChild.findMax();

            if (isParent) {
                childToAdd.rightChild = parent.rightChild;
                parent = childToAdd;
                return parent;
            }
            isLeft ? parent.leftChild = childToAdd : parent.rightChild = childToAdd;
        }
        return this
    }

    findMax() {
        return this.rightChild ? this.rightChild.findMax() : this;
    }

}
