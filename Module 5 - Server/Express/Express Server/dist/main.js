var lastPrice = null;

const baseUrl = 'http://localhost:8080'

const nameInput = document.getElementById('item-name');
const getPriceButton = document.getElementById('get-price');
const priceDisplay = document.getElementById('price-display');
const moneyDisplay = document.getElementById('money');

// Extension 2
async function priceChecker() {
    const newPrice = await getPrice('chair');
    if (lastPrice === null || lastPrice <= newPrice) {
        console.log('Still waiting for a price drop');
        
    }
    else {
        const res = await fetch(baseUrl + '/buy/' + 'chair');
        const data = await res.json();
        if (data) {
            console.log('Bought a chair for less');            
        }
    }
    lastPrice = newPrice;
    console.log('last price: ', lastPrice);
    
}

function getMoney() {
    return Number(moneyDisplay.innerHTML);
}

async function getPrice(name) {
    const url = baseUrl + '/priceCheck/' + name;
    const res = await fetch(url);
    const data = await res.json();
    return data.price;

}

async function displayPrice() {
    console.log('HERE');

    const price = await getPrice(nameInput.value);
    console.log(price);

    priceDisplay.innerHTML = 'price: ' + price;
}

async function buyItem() {
    const itemName = document.getElementById('buy-input').value;
    const itemDisplay = document.getElementById('buy-display');

    const res = await fetch(baseUrl + '/buy/' + itemName);
    const data = await res.json();
    const item = data.item;

    itemDisplay.innerHTML = `You just bought a ${item.name} For ${item.price}$. We now have ${item.inventory} ${item.name}s left.`

}

async function tryToBuy() {
    const itemName = document.getElementById('buy-input').value;
    const itemDisplay = document.getElementById('buy-display');
    const money = getMoney();
    console.log(money);

    let itemPrice = await getPrice(itemName);
    console.log('itemPrice: ', itemPrice);

    // itemPrice = Number(itemPrice);
    if (itemPrice > money) {
        itemDisplay.innerHTML = 'Get a job, you dont have ' + itemPrice;
    }
    else {
        await buyItem();

        const newMoney = money - itemPrice



        console.log(newMoney);

        moneyDisplay.innerHTML = newMoney;
    }


}

document.addEventListener('DOMContentLoaded', () => {
    console.log('LOADED MAIN');


    getPriceButton.addEventListener('click', displayPrice);
    document.getElementById('buy-button').addEventListener('click', tryToBuy)

    setInterval(priceChecker, 3000)
})