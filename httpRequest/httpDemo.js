const http = require('http');


const server = http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.write('response');
        res.end();
    }
});

server.listen('8080');

console.log('listening to port 8080....');