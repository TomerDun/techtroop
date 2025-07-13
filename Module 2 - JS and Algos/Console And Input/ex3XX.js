const readLine = require('readline')

const p = {};

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Name: ', name => {
    p['Name'] = name;
    rl.question('Email: ', email => {
        p['Email'] = email
        rl.question('Age: ', age => {
            p['Age'] = age;
            rl.question('Favorite Color: ', color => {
                p['Favorite Color'] = color;
                // Print out
                console.log('Registration summary:');
                
                for (key in p) {
                    console.log(`${key}: ${p[key]}`);                    
                }
                
                rl.close()
            })
        })
        // rl.close()
    })
})
// rl.close()  




