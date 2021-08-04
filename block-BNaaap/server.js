const http = require('http');

let server = http.createServer(handleRequests);

function handleRequests(req, res) {
  console.log(req.method, req.url);
  console.log(req.headers);
  res.writeHead(201, { 'Content-Type': `text/html` });
  res.end('Welcome');
}

server.listen(4444, 'localhost', () => {
  console.log(`Server hosted on 4444 port!`);
});
