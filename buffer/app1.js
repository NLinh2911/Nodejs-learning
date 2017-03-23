// ES6 TYPED ARRAYS
// NEW FEATURES IN ES6
var buffer = new ArrayBuffer(8);
var view = new Int32Array(buffer);

view[0] = 5;
view[1] = 15;

console.log(view);