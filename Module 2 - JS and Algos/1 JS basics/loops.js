// Ex1

const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for (let i in names) {
    const person = {
        name: names[i],
        age: ages[i]
    }
    people.push(person)
}

console.log('People: ', people);


// Ex2

for (i in people) { // Loop over keys of people
    const person = people[i]
    console.log(`${person.name} is ${person.age} years old.`);    
}

// Ex3
let posts = [
  {id: 1, text: "Love this product"},
  {id: 2, text: "This is the worst. DON'T BUY!"},
  {id: 3, text: "So glad I found this. Bought four already!"}
]

let removeIndex;

for (i in posts) {
    if (posts[i].id === 2) {
        removeIndex = i;
    }
}

posts.splice(removeIndex, 1);

console.log('Posts: ', posts);


// Ex4
posts = [
  {
    id: 1, 
    text: "Love this product",
    comments: []
  },
  { 
    id: 2, 
    text: "This is the worst. DON'T BUY!", 
    comments: [
                {id: 1, text: "Idiot has no idea"}, 
                {id: 2, text:"Fool!"}, 
                {id: 3, text: "I agree!"}
              ]
   },
   {
    id: 3, 
    text: "So glad I found this. Bought four already!",
    comments: []
   }
]

let postIndex;

for (let i in posts) {
    if (posts[i].id === 2) {
        postIndex = i;
        break;
    }
}

for (let i in posts[postIndex].comments) {
    if (posts[postIndex].comments.id === 3) {
        removeIndex = i;
        break
    }
}

posts[postIndex].comments.splice(removeIndex, 1);
console.log(posts);


// Ex5

const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
}

for (let key of Object.keys(dictionary)) {
    console.log(`Words that begin with ${key}:`);
    for (let word of dictionary[key]) {console.log(word)};    
}