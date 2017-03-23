function Greetr () {
    this.greeting = "Hello world";
    this.greet = () => {
        console.log(this.greeting);
    }
}
//export by creating a new object of function constructor
module.exports = new Greetr();