// Ex1
let meatArr = ["beef","chicken"]
let vegetableArr = ["rabbit","carrots","potatoes","lettuce"]

meatArr = [...meatArr, vegetableArr[0]];
vegetableArr.shift();

console.log(meatArr);
console.log(vegetableArr);

// Ex2
var firstPiece = { id: 101, name: 'Ofri' }

var seoncdPiece = { country: 'Israel'}

let full = {...firstPiece, ...seoncdPiece}
console.log(full);

