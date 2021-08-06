const http = require('http');
const fs = require('fs');
const url = require('url');


let server = http.createServer(handleRequest);


function hanleRequest(req, res){

}

server.listen(8888, 'localhost', ()=>{
    console.log('Server listning to port 8888!');
})
