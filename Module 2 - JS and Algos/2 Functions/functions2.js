// Ex1

const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!"
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub"
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power"
  }
]



const capitalize = function(str) {
    let capitalizedStr = ""
    capitalizedStr += str[0].toUpperCase()      // first letter, capitalized
    capitalizedStr += str.slice(1)              // rest of the string
    return capitalizedStr
}

function getAge(age) {
    let output = `a ${age} years old`;
    if (age < 21) output = 'an Underage';
    else if (age > 55) output = 'a 55+ years old';
    return output;
}

function getProf(prof) {
    let output = '';
    const profArr = prof.split(' ')
    for (word of profArr) {
        output += word;
        output += ' '
    }
    return output;
}

function getLocation(person) {
    return `${capitalize(person.city)}, ${capitalize(person.country)}`;
}


const getSummary = function(person){
  let summary = ""
  summary += capitalize(person.name)
  summary += ` is ${getAge(person.age)} `
  summary += getProf(person.profession);
  summary += `from ${getLocation(person)}. `
  summary += `${capitalize(person.name)} loves to say "${capitalize(person.catchphrase)}"`
  return summary
}

for (person of people_info) {
    console.log(getSummary(person));
}