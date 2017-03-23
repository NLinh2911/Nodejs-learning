// ES6 Classes
// New way to create function constructor
'use strict';
// JS classes are just syntatic sugar for function constructors
// it is different to class in many other programming languages
class SamePerson {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    // any method put in the class are automatically made .prototype
    greet() {
        console.log(`Hello ${this.firstname} ${this.lastname}`);
    }
}
// Use the old way function constructor to see more what is going on with prototype chain and inheritance
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function () {
    console.log(`Hello ${this.firstname} ${this.lastname}`);
}

const john = new Person('John', 'Smiths');
const jack = new SamePerson('Jack', 'Daniel');
john.greet();   
jack.greet();

//check 
console.log(john.__proto__);
console.log(jack.__proto__);