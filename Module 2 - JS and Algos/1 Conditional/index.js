// Ex1
let age = 28;
console.log(age > 18);

// Ex2
let score = 85;
let grade = 0;
if (score > 90) grade = 'A';
else if (score < 90) grade = 'B';
else if (score < 80) grade = 'C';
else if (score < 70) grade = 'D';
else if (score < 60) grade = 'F';
console.log(grade);

// Ex3
const temp = 20;
const weather = 'sunny';
let answer = '';
if (weather === 'sunny') {
    if (temp > 25) answer = 'Go to the beach';
    else if (temp > 15) answer = 'Go for a walk';
    else answer = 'Stay inside and read';
}
else if (weather === 'cloudy') {
    if (temp > 21) answer = 'Go hiking';
    else answer = 'Visit a museum';
}
else {
    answer = 'Watch a movie indoors';
}
console.log(answer);


// Ex4
const nameLength = 6;
const passLength = 7;
const userAge = 15;
let canCreateAccount = false;
if (nameLength >= 5 && passLength >= 8 && userAge >= 13) canCreateAccount = true;
console.log('Can create account: ', canCreateAccount);


// Ex5
const customerType = 'premium';
const amount = 150;
const day = 6;
let discount = 0;

if (customerType === 'VIP') discount = 20;
else if (customerType === 'premium') {
    if (day === 6 || day === 0) discount = 15;
    else discount = 10;
}
else { //Regular customer
    if (amount > 100) discount = 10;
    else if (amount > 50) discount = 5;
}

console.log('Discount: ', discount);


// Ex6
let year = 2024;
let leapYear = false;

if (year % 4 === 0) {
    if (year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0)) leapYear = true;
}

console.log('Leap Year: ', leapYear);





