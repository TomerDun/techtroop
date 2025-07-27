function checkLuckyNumber(num) {
  // TODO: Create and return a promise that:
  // 1. Waits 800ms (use setTimeout)
  // 2. Resolves with "Lucky!" if number is divisible by 7
  // 3. Resolves with "Not lucky" for other positive numbers
  // 4. Rejects with Error("Invalid number") if number is negative or zero
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (num % 7 === 0) resolve('Lucky');
        else if (num > 0) resolve('Not Lucky');
        else reject('Invalid number');
    }, 800)
  })
}

checkLuckyNumber(7).then(data => console.log(data));
checkLuckyNumber(8).then(data => console.log(data));
checkLuckyNumber(0).then(data => console.log(data));


