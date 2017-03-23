const greeting = 'Hello world 4';

const greet = () => {
    console.log(greeting);
}

//greeting is not accessed outside the module
//only export and reveal the function we want
//Revealing module pattern: only expose the property and method we want via an returned object
module.exports = {
    greet: greet
}