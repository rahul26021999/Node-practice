const { readFile } = require('fs');
const { promisify } = require('util');


// Read file and using callback to print the data of the file

readFile('./callback.js', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});


// Read a file using proisify the callback function

const read = promisify(readFile);

read('./callback.js', 'utf8')
    .then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })