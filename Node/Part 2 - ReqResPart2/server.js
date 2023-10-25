const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');

    let path = './'
    if (req.url == '/') {
        path += 'index.html';
        res.statusCode = 200;
    }
    else if (req.url == '/about') {
        path += 'about.html';
        res.statusCode = 200;
    }
    else if(req.url == '/about-me') {
        // Redirecting
        res.statusCode = 301;
        res.setHeader('Location', '/about');
        res.end();
    } else {
        path += '404.html';
        res.statusCode = 404;
    }

    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    })


})

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})