const http = require('http');
const fs = require('fs');
/*
const myReadableStream = fs.createReadStream(__dirname + '/greet.txt', 'utf8');
const myWritableStream = fs.createWriteStream(__dirname + '/write.txt');
// myReadableStream.on('data', (chunk) => {
//     console.log('New Chunk Received!');
//     //console.log(chunk);
//     myWritableStream.write(chunk);
// });

// do exact the same thing with pipe
myReadableStream.pipe(myWritableStream);
*/

const server = http.createServer((req, res) => {
    console.log('request was made:' + req.url);
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // const myReadableStream = fs.createReadStream(__dirname + '/greet.txt', 'utf8');

    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // const myReadableStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    // myReadableStream.pipe(res);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    const myReadableStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    const myObj = {
        name: 'Jack',
        job: 'singer',
        age: 30
    };
    res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('Hey you, listen to port 3000');