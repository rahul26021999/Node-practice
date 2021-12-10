const path = require('path');
const m = require('./module/mymodule.js');


// Global variables
// console.log(__dirname);

// return the current file directory path
// console.log(__filename);

// return the parent file path
// console.log(process.cwd());

// return the file name only 
const base = path.basename(__filename);
console.log(base);

//return the extension of file only
const extname = path.extname(__filename);
console.log(extname);

// return the component of the file 
const parse = path.parse(__filename);
console.log(parse);

// Join 2 path as per the OS
const joinpath = path.join('module', 'mode.js');
console.log(joinpath);