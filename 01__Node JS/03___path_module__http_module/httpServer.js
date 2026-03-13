// http module provides the low-level interface for transferring data
// enables the creation of web servers 
// and the ability to make HTTP requests to other servers

// Server Creation: provides the http.createServer() method to create an http server instance
// that listens for incoming requests on a specified port and host

// Request and Response Handling: it offers req and res objects within the request listener callback function
// req object: instance of http.IncomingMessage, req.url(access req url), req.method, req.headers
// res object: instance of http.ServerResponse. used to build and send res 
// using methods like res.writeHead(), res.setHeader(), res.write(), res.end()

// Client Requests: Make http req to external APIs or servers using http.request() or simplified http.get() method

// Streaming Support: request and response treated as streams, allowing efficient handling of large data payloads

// Headers and Status Codes: provide methods like res.writeHead() and res.setHeader() to manage HTTP headers
// and res.statusCode for code status (like 200 OK, 404 Not Found)

import { log } from 'node:console';
import http from 'node:http'

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res)=>{
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');

res.end("Hello World\n");

})

server.listen(port, hostname, ()=>{
    log(`Server ruuning at http://${hostname}:${port}/`)
})