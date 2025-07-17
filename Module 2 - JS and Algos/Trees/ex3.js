import BSNode from "./bst.js";

// const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
// let node = new BSNode();
// numbers.forEach(n => node.insertNode(n));

// // console.log(node);
// // node.removeNode(node, 12)
// // console.log('--AFTER--');
// // console.log(node);

// console.log(node.findMax());


const numbers = [8, 9, 12, 3, 5, 1, 11, 4];

console.log('---9 REMOVE--');

let nodeWithOneChild = new BSNode();
numbers.forEach(n => nodeWithOneChild.insertNode(n));
console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 9)); // will return tree like the first image (the 9 will be deletied) 
    
console.log('---ROOT IS 5--');
let nodeWithTwoChildren = new BSNode();
numbers.forEach(n => nodeWithTwoChildren.insertNode(n));
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8)); // will return tree like the second image (the root will be 5) 




    
// let nodeWithTwoChildren = new BSNode();
// numbers.forEach(n => nodeWithTwoChildren.insertNode(n));
// console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8)); // will return tree like the second image (the root will be 5) 
