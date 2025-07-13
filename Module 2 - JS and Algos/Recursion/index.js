// Ex1
function findFactorial(x) {
    if (x <= 1) return x;
    return x * findFactorial(x-1)    
}

// Ex2
function reverseString(str) {
    if (!str) return '';
    return str[str.length - 1] + reverseString(str.slice(0, str.length-1))
}

// Ex3
function swap(arr1, arr2) {
    if (!arr1.length) return;
    arr2.push(arr1.shift());
    swap(arr1, arr2);
}

console.log(findFactorial(5));
console.log(reverseString('big brown dog'));
const a1 = [1,2,3]
const a2 = [];
swap(a1, a2);
console.log(a1);
console.log(a2);


