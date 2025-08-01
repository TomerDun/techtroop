// Simulated inventory database
const inventory = {
  'laptop': { price: 999, stock: 5 },
  'mouse': { price: 25, stock: 10 },
  'keyboard': { price: 75, stock: 0 }, // Out of stock
  'monitor': { price: 299, stock: 3 }
};

function checkInventory(items) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (const item of items) {
                if (inventory[item].stock < 1) {
                    reject(item);
                    break;
                }
            }            
            resolve(items);
        }, 500)
    })
  // TODO: Return a promise that:
  // 1. Waits 500ms (simulating database check)
  // 2. Checks if all items are in stock
  // 3. Resolves with items if all available
  // 4. Rejects with specific item that's out of stock
}

function calculateTotal(items) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = items.reduce((curr, next) => curr + inventory[next].price * 1.08, 0);
            resolve(data);
        }, 200)
    })
  // TODO: Return a promise that:
  // 1. Waits 200ms
  // 2. Calculates total price including 8% tax
  // 3. Resolves with { subtotal, tax, total }
}

function processPayment(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve({transactionId: 1, amount: amount, status: 'success'});
            }
            else reject('Payment failed');
        }, 1500)
    })
  // TODO: Return a promise that:
  // 1. Waits 1500ms (simulating payment processing)
  // 2. 90% success rate
  // 3. Resolves with { transactionId, amount, status: 'success' }
  // 4. Rejects with payment failure error
}

function updateInventory(items) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (const item of items) {                
                inventory[item].stock -= 1
            }
            resolve(inventory);
        }, 300)
    })
  // TODO: Return a promise that:
  // 1. Waits 300ms
  // 2. Reduces stock for each item
  // 3. Resolves with updated inventory status
}

// TODO: Create a complete checkout function that:
// 1. Takes an array of item names
// 2. Chains all the above functions
// 3. Returns a promise with the final order result
// 4. Handles all possible errors appropriately

function checkout(itemNames) {
  // TODO: Implement the complete checkout flow
  return new Promise((resolve, reject) => {
    const results = [];
    checkInventory(itemNames)
    .then(() => calculateTotal(itemNames))
    .then(data => processPayment(data))
    .then(() => updateInventory(itemNames))    
    .then(data => resolve(data))
    .catch(err => reject(new Error(err)));
  })
}

// Test cases:
checkout(['laptop', 'mouse'])           // Should succeed
  .then(result => console.log('Order success:', result))
  .catch(error => console.log('Order failed:', error.message));

checkout(['laptop', 'keyboard'])        // Should fail - keyboard out of stock
  .then(result => console.log('Order success:', result))
  .catch(error => console.log('Order failed:', error.message));

checkout(['monitor', 'mouse', 'laptop']) // Might fail at payment (10% chance)
  .then(result => console.log('Order success:', result))
  .catch(error => console.log('Order failed:', error.message));

