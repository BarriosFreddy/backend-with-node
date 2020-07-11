// Wildcard

// %s
// %d
// %j JSON

console.log("Name: %s, age: %d", 'Freddy', 26);
console.info('informative');
console.warn('warning!');
console.assert('7' == 7);
console.assert('7' === 7);
//console.trace('Welcome');


const util = require('util');

const debuglog = util.debuglog('dev');

debuglog('It is part of dev');
