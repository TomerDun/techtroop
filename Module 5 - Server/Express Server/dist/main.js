const baseUrl = 'http://localhost:8080'

const nameInput = document.getElementById('item-name');
const getPriceButton = document.getElementById('get-price');
const priceDisplay = document.getElementById('price-display');

async function getPrice(name) {
    const url = baseUrl + '/priceCheck?name=' + name;
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

document.addEventListener('DOMContentLoaded', () => {




    console.log('LOADED MAIN');

    getPriceButton.addEventListener('click', displayPrice);
    document.getElementById('buy-button').addEventListener('click', buyItem)
})