// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello NodeApp!! \n");
});

// listen on localhost:8080
server.listen(8080);
console.log("Server listening on port 8080 :  http://107.20.75.18:8080/");
