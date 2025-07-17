import BSNode from "./bst.js";

const bsTree = new BSNode();

const vals = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"];

for (let val of vals) {
    bsTree.insertNode(val);
}

console.log(bsTree);

    
console.log(bsTree.findCommonParent("B", "I")) //should return "H"
console.log(bsTree.findCommonParent("B", "G")) //should return "E"
console.log(bsTree.findCommonParent("B", "L")) //should return "J"
console.log(bsTree.findCommonParent("L", "Y")) //should return "R"
console.log(bsTree.findCommonParent("E", "H")) //should return "J"
console.log(bsTree.findCommonParent("J", "H")) //should return "J"


    

