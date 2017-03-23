// Create a very simple version of event emitter

const Emitter = require('./emitter.js');
const eventConfig = require('./config');
const emtr = new Emitter();

emtr.on(eventConfig.GREET, () => {
    console.log('hello world');
});

emtr.on(eventConfig.GREET, () => {
    console.log('a greeting occurred!');
});

console.log('Check');
emtr.emit(eventConfig.GREET);