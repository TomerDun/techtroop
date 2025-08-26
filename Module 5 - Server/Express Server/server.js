const path = require('path');
const express = require('express');

const app = express();
const port = 8080;

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.use(express.static(path.join(__dirname, 'dist')));

function getItemPrice(name) {
    const queryItem = store.filter(item => item.name === name);            
    if (!queryItem.length) return null;

    return queryItem[0].price
}

function buyItem(name) {
    let queryItem = store.filter(item => item.name === name);            
    if (!queryItem.length) return null;
    queryItem[0].inventory -= 1;
    return queryItem[0];    
}

function doSale() {
    for (const item of store) {
        if (item.inventory > 10) {
            item.price /= 2
        }
    }
}

app.listen(port, () => {
    console.log('Server is running on port ', port);

    app.get('/priceCheck/:name', (req, res) => {        
        const price = getItemPrice(req.params.name);
        if (!price) {
            res.status(401).json({'error': 'No item found'});        
        } else {
            res.status(200).json({price});
        }
    }) 

    app.get('/buy/:name', (req, res) => {        
        const item = buyItem(req.params.name);
        if (!item) {
            res.status(401).json({'error': 'No item found'});        
        } else {
            res.status(200).json({item});
        }
    }) 

    app.get('/sale', (req, res) => {
        if (req.query.admin) {
            if (req.query.admin === 'true') {
                doSale();
                res.send(store);
            }
        }
        else {
            res.send('You are not the boss of me, you cant do a sale')
        }
    }) 
})