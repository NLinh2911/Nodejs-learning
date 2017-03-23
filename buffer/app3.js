// Files and fs

const fs = require('fs');

const greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);
// fs.readFileSync can be appropriate if you need to read some config files before running your apps

// if you have many users request for data, readFileSync can hold back the appropriate
const greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', (err, data) => {
    console.log(data);
    // data will be buffer if 'utf8' is not specified as a param above
});

//Error-first callback: take error as the first param
// standard way to place our params
// null if no error, otherwise will contain an object defining the error

console.log('Check order');