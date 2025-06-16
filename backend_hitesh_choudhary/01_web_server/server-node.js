const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n');
    }
    else if(req.url === '/about'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('About Us\n');
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Page Not Found\n');
    }
}) 

// Note that setting up the server is a two-step process. First, we create the server object using the createServer() method. Second, we call the listen() method on the server object to make it listen on the specified port and hostname.

// The server object listens on the specified port and hostname. When a request is received, the callback function is called with the request and response objects. The request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on. The response object represents the HTTP response that the server sends back to the client.

// However setting up the routes in this way is not scalable. We will see how to set up routes in a more scalable way in the next section using Express.js.

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});