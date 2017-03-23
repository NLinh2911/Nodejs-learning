// Inherting from Event Emitter
'use strict';

const EventEmitter = require('events');
const util = require('util');
// write func constructor using class syntax
class SameGreetr extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello world';
    }
    greet(data) {
        console.log(`${this.greeting}: ${data}`);
        this.emit('greet', data);
    }
} 

const greeter1 = new SameGreetr();
greeter1.on('greet', function (data) {
    console.log('Someone greeted: ' + data);
});

greeter1.greet('Jack');

// original function constructor
function Greetr() {
    // make sure that any obj created from this function constructor has everything from event emitter
    // similar to super constructors in some other languages
    EventEmitter.call(this);
    this.greeting = 'Hello world';
}
// prototype chain allows to create new objects that has all prototypes of other previous objects
// any objects created by Greetr will have access to all methods and properties in EventEmitter
util.inherits(Greetr, EventEmitter);

// add my own methods and prototypes
Greetr.prototype.greet = function (data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
}

let greeter2 = new Greetr();
greeter2.on('greet', function (data) {
    console.log('Someone greeted: ' + data);
});

greeter2.greet('Alex');