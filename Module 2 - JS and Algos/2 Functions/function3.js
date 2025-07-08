const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"', "?", "!", ";"]
const wordCounts = {}

let fstory = story.toLocaleLowerCase();
for (const char of specialChars) {
    fstory = fstory.replaceAll(char, '');
}

const words = fstory.split(' ');
for (const word of words) {
    wordCounts[word] = (word in wordCounts) ? wordCounts[word] + 1 : 1;
}

console.log(wordCounts);



