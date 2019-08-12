const chalk = require('chalk');
const getNotes = require('./notes.js');

const msg = getNotes();

console.log(msg);

const invertedSuccess = chalk.green.bold.inverse;
console.log(invertedSuccess('Success!'));
