let [, , x, op, y] = process.argv;

// Validation

if (process.argv.length < 5) {
    console.log('Not enough arguments');
}
else {
    x = parseFloat(x);
    y = parseFloat(y);
    let ans;

    if (op === '+') ans = x + y;
    else if (op === '-') ans = x - y;
    else if (op === '*') ans = x * y;
    else if (op === '/') ans = x / y;
    else ans = 'Invalid operation';

    console.log('Answer: ', ans);
}





