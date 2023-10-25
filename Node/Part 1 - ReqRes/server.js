const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');

    let path = './';
    switch (req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // if(req.url === '/') {
    //     path += 'index.html'
    //     res.statusCode = 200;
    // } else {
    //     path += '404.html'
    //     res.statusCode = 404;
    // }

    // res.write('<h1>Hello World</h1>');

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.statusCode = 200;
            res.end(data)
        }
    })

})

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000')
});