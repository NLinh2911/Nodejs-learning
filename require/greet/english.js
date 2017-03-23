//use data from json
const greetings = require('./greetings.json');

const english = () => {
    console.log(greetings.en);
}
 
module.exports = english;