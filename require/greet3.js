function Greetr () {
    this.greeting = "Hello world 3";
    this.greet = () => {
        console.log(this.greeting);
    }
}
//export function constructor itself
module.exports = Greetr;