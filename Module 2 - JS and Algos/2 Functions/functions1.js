// Ex1

function isEven(num) {
    return num % 2 === 0;
}


// Ex2

function printEvens(arr) {
    for (let num of arr) {
        if (isEven(num)) console.log(num);
    }
}


// Ex3

function checkExists(arr, target) {
    for (let num of arr) {
        if (num === target) return true;
    }
    return false
}


// Ex4

const calculator = {
    add: function(a, b) {return a + b},
    subtract: function(a, b) {return a - b},
}


// Ex5

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

function makeRegal(name) {
    return 'His Royal Highness, ' + name;
}
function increaseByNameLength(money, name) {
    return money * name.length;
}


// Ex6
function checkArmstrong(num) {
    const numStr = '' + num;
    let sum = 0;
    for (char of numStr) {
        sum += Math.pow(Number(char), 3);
    }
    return num === sum;
}

function printArmstrongs() {
    let num = 100;
    while (num < 1000) {
        if (checkArmstrong(num)) console.log(num);
        num ++;
    }
}




// Testing
printEvens([1,2,3,4,5]);
console.log(checkExists([1,2,3], 2));
console.log(calculator.add(2,3));
turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"
printArmstrongs();




