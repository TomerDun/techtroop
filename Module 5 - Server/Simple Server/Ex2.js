const http = require('http');

const users = [
    {
        userName: 'tomer',
        gender: 'M'
    },
    {
        userName: 'itai',
        gender: 'M'
    },
    {
        userName: 'Yoni',
        gender: 'F'
    },
]

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");    

    if (req.url.includes('/api/users/')) {        
        if (req.method === 'GET') {
            const urlSplit = req.url.split('/')
            const id = urlSplit[urlSplit.length - 1];
            console.log(id);
            
            if (id < 0 || id >= urlSplit.length) {
                res.write('No user found')
                res.statusCode = 400;
            }
            else {
                res.write(JSON.stringify(users[id]));
            }
        }        
    }
    else if (req.url === '/api/users') {
        if (req.method === 'GET') {
            res.write(JSON.stringify(users));
        }
    }

    res.end();
})

server.listen('8000', () => {
    console.log('server is running on port 8000');
})