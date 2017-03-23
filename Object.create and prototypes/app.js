const person = {
    firstname: '',
    lastname: '',
    greet: function() {
        return this.firstname + ' ' + this.lastname;
    }
}
// Object.create() is an easy and clean way to create a prototype chain of object inheritance
// both john and anna point to the same object person 
const john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';

const anna = Object.create(person);
anna.firstname = 'Anna';
anna.lastname = 'Smiths';

console.log(john.greet());
console.log(anna.greet());

