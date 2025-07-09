const formatter = require('./stringFormatter.js');
const Bank = require('./bank.js');
const SongsManager = require('./songsManager.js');

// Ex1
console.log(formatter.capitalizeFirst("dorothy")); //should return Dorothy)
console.log(formatter.toSkewerCase("blue box")); //should return blue-box


// Ex2
const bank = Bank;

bank.deposit(200);
bank.deposit(250);
bank.showBalance(); //should print 950


// Ex3
const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

console.log(songsManager.getSong("sax")) // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ

