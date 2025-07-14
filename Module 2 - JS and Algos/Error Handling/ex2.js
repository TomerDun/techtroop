const fs = require('fs');

function read(file, cb) {
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            switch (err.code) {
                case 'ENOENT':
                    console.log('File not found');     
                    break;
                case 'EISDIR':
                    console.log('Found directory path instead of file name');     
                default: console.log('Error reading file');
            }                   
        }
        else {
            data;
        }
    })
}

read('ex2.js', data => console.log('data'));