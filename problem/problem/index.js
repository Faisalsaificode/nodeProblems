// Please don't change the pre-written code
// Import the necessary modules here
const http = require('http');
const fs = require('fs');

// Write your code here
const server = http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error loading index.html');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

server.listen(8080);

module.exports = server;
