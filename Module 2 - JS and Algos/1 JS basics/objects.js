// Ex1

const p1 = {
    name: 'nurit',
    city: 'haifa',
    age: 60,
}
const p2 = {
    name: 'moshe',
    city: 'haifa',
    age: 23,
}

if (p1.city === p2.city) {
    console.log(`${p1.name} wanted to date ${p2.name}`);
}
else {
    console.log(`${p1.name} wanted to date ${p2.name}, but couldn't`);
}

// Ex2

const library = {
    books: [
        { title: 'harry potter', author: 'Nurit' },
        { title: 'Love of nurit', author: 'Moshe' },
        { title: 'Love in haifa', author: 'Nurit' },
        { title: 'moving to tel aviv', author: 'Moshe' },
        { title: 'Alone in haifa', author: 'Nurit' },
    ]
};
console.log(library);

// Ex3

const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
}

let resName = 'Tedd';

resName = resName.toLowerCase();

if (resName in reservations) {
    if (reservations[resName].claimed) {
        console.log('Sorry but the reservation is already claimed');
    }
    else {
        console.log('Welcomde, ', resName);
    }
}
else {
    console.log('There is no reservation under that name');
    reservations[resName] = {claimed: true};
    console.log('Created reservation for ', resName);    
}


// Ex4

const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true, // choose one
    fridge: {
        price: 500,
        works: false, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "radish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

const food = kitchen.fridge.items[1]
let expieryDate = date - food.expiryDate

let output = `${kitchen.owner}'s ${food.name} expired ${expieryDate} days ago.`

if (kitchen.hasOven) {
    if (kitchen.fridge.works) output += ` Weird, considering her fridge works. Luckily, she has an oven to cook the ${food.name} in.`
    else output += ` Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the ${food.name} in. And she'll have to pay ${kitchen.fridge.price / 2} to fix the fridge.`
}
else {
    if (kitchen.fridge.works) {
        output += ` Weird, considering her fridge works. Too bad she doesn't have an oven to cook the ${food.name} in.`
    }
    else {
        output += ` Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the ${food.name} in. And she'll have to pay ${kitchen.fridge.price / 2} to fix the fridge.`
    }
}

console.log(output);


