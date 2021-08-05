const http = require('http');
const fs = require('fs');
const url = require('url');


// 1
let server1 = http.createServer(handleRequest1);

function handleRequest1(req, res) {
//   console.log(req, res);
}

server1.listen(5000, 'localhost', () => {
  console.log('Server listning to port 5000!');
});


// 2
let server2 = http.createServer(handleRequest1);

function handleRequest1(req, res) {
       res.write('My first server in NodeJS!');
       res.end();
}

server2.listen(5100, 'localhost', () => {
  console.log('Server listning to port 5100!');
});

// 3
let server3 = http.createServer(handleRequest1);

function handleRequest1(req, res) {
      console.log(req.headers);
}

server3.listen(5555, 'localhost', () => {
  console.log('Server listning to port 5555!');
});