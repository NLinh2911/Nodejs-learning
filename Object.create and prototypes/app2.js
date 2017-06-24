// JS .call and .apply
// powerful to borrow methods

const main_obj = {
    name: 'John',
    greet: function (){
        console.log(`Hello ${this.name}`);
    }
}

// points to the main obj
main_obj.greet();

// .call() and .apply() points to the object passed to it
// that passed obj overwrites 'this' in the main obj
main_obj.greet.call({name: 'Jack'});
main_obj.greet.apply({name: 'David'});
// differences between .call and .apply are in the way they handle parameters
// if greet() has several params, with call(), they are passed in directly as params of call()
// e.g. obj.greet.call({...}, param1, param2);
// with apply(), an array of params is passed in
// e.g. obj.greet.apply({...}, [param1, param2])