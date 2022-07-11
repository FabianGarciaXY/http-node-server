// Http and server Port
const http = require('http');
const fs = require('fs/promises');
const port = 3000;


// Function to read HTML files and serve them
const serveContent = async (file, encoding, req, res) => {
    const content = await fs.readFile(file, encoding);
    res.statusCode = 200
    res.end(content);
};


// Request Callback
const request = (req, res) => {
    // Headers
    res.setHeader('Content-Type', 'text/html');

    // Paths
    switch (req.url) {

        case '/':
            serveContent('./index.html', 'utf8', req, res);
            break;
        
        case '/index':
            serveContent('./index.html', 'utf8', req, res);
            break;    

        case '/about':
            serveContent('./about.html', 'utf8', req, res);
            break;

        case '/contact':
            serveContent('./contact_me.html', 'utf8', req, res)
            break;

        default:
            serveContent('./404.html', 'utf8', req, res);
            break;
    }
};


// Creating server
const server = http.createServer(request);

// Starting server
server.listen(port, () => console.log('Server running on port ', port));