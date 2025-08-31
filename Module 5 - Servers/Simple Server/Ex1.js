const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    if (req.method === 'GET') {
        if (req.url === '/') {
            res.write('Welcome to my website');
        }
        else if (req.url === '/about') {
            res.write('About page');
        }
        else if (req.url === '/contact') {
            res.write('Contact Page');
        }
        else {
            res.statusCode = 400;
            res.write('Not Found');
        }
    }
    else {
        res.write('Not Found');
        res.statusCode(404);
    }

    res.end();
})

server.listen('8000', () => {
    console.log('server is running on port 8000');
})