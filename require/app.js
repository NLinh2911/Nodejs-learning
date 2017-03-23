/**
 * Understand how to require multiples js files, and export as one object with multiple functions to use in app.js
 */

//require greet 
const greet = require('./greet');

//run function from greet
greet.english();
greet.spanish();

// Export by attaching the method to module.exports
const greet1 = require('./greet1').greet;
greet1();
// Export by creating a new object of function constructor 
const greet2 = require('./greet2');
greet2.greet();
greet2.greeting = "Change greet2";
// if we change greeting property -> it affects later require as well
// require store cache of required modules
// point to cached modules if required previously
const greet2b = require ('./greet2');
greet2b.greet(); // return "Change greet2"

// Export function constructor itself
const greet3 = require ('./greet3');
// create a new object of greet3
const greet3Instance = new greet3();
greet3Instance.greet();

//Revealing module pattern
const greet4 = require('./greet4');
greet4.greet();