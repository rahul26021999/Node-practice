const mymodule = require('./myModules'); // Include index.js in the myModules folder
const express = require('express');

const res = mymodule.sum(5, 4);
const res1 = mymodule.subtract(5, 4);
console.log(res, res1);