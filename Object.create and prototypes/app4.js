// Inheriting
// Ensure all new obj created has access to all properties
const util = require('util');
function Person() {
    // directly attach properties to obj
    this.firstname = 'Jack';
    this.lastname = 'Daniel';
}
// .prototype -> available to all objs created from this func constructor
Person.prototype.greet = function () {
    console.log(`Hello ${this.firstname} ${this.lastname}`);
}

function Policeman() {
    // w/o Person.call(this) -> directly attached properties of Person are not accessible
    // Person.call(this) -> the empty obj 'this' firstly borrows all properties and methods of Person()
    // run through Person() -> 'this' obj now has 2 properties firstname and lastname
    Person.call(this);
    // now 'this' obj w/ 2 properties is attached another 'badge' property
    this.badge = '012345';
}

util.inherits(Policeman, Person);
const officer = new Policeman();
// w/o Person.call(this) -> return 'Hello undefined undefined' 
officer.greet();