// access functions from different js files 
const english = require('./english');
const spanish = require('./spanish');

// export these files
module.exports = {
    english: english,
    spanish: spanish
}