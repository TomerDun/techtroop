const promptSync = require('prompt-sync');

const prompt = promptSync();
let input = 0;

let menu = '1) Check Balance, 2) Deposit, 3) Withdraw, 4) Exit: '
let options = ['1', '2', '3', '4'];
let balance = 100;
let amount;

function validateInputAmount(amount) {
    if (!(typeof amount === 'number')) {
        console.log('Invalid input amount, place type a valid number');
        return false;
    }
    else if (amount < 1) {
        console.log('Please enter a valid Positive number');
        return false;
    }
    else return true;
}

while (input !== '4') {
    input = prompt(menu);
    if (input === '1') console.log('Balance: ', balance);
    else if (input === '2') {
        amount = prompt('Deposit amount: ')
        amount = parseFloat(amount);
        if (validateInputAmount(amount)) {
            balance += amount
            console.log('Deposit Complete');
        }
    }
    else if (input === '3') {
        amount = prompt('Withraw amount: ')
        amount = parseFloat(amount);
        if (validateInputAmount(amount)) {
            if (balance >= amount) {
                balance -= amount
                console.log('Withrawl Complete');
            }
            else {
                console.log('Insufficient funds');
                
            }
        }
    }
    else if (input === '4') break;
    else console.log('Invalid Input!');
}