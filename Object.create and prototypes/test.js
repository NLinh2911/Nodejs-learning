function Car(name, brand) {
  this.name = name
  this.brand = brand
}
var innova = new Car('Toyota Innova', 'Toyota')
console.log(innova);

Car.prototype.run = function () {
  console.log(this.name + ' is running !!!');
}
var modelS = new Car('Tesla Model S', 'Model S')
console.log(modelS);
innova.run();
modelS.run();
console.log(innova.__proto__);
console.log(innova.__proto__ === modelS.__proto__);
console.log(modelS.hasOwnProperty('run'));
console.log(modelS.toString());
