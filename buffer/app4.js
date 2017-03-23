const http = require('http');
const fs = require('fs');

const myReadableStream = fs.createReadStream(__dirname + '/greet.txt', 'utf8');
const myWritableStream = fs.createWriteStream(__dirname + '/write.txt');
myReadableStream.on('data', (chunk) => {
    console.log('New Chunk Received!');
    //console.log(chunk);
    myWritableStream.write(chunk);
});
