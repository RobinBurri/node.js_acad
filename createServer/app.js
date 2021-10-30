const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const methode = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" methode="POST"><input type="text" name="message"></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && methode === 'POST') {
            fs.writeFileSync('message.txt', 'DUMMY');
            res.statusCode  = 302;
            res.setHeader('Location', '/');
            return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>Hello from my node.js</h1></body>');
    res.write('</html>');
});

server.listen(3000);