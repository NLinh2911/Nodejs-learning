// CALLBACK
const greet = (callback) => {
    console.log('hello');
    let data = {
        name: 'Jack'
    }
    callback(data);
}

greet((data)=>{
    console.log('the callback was invoked!');
    console.log(data);
});

const cb = (data) => {
    console.log('this is a callback function');
    console.log(data);
}

greet(cb);