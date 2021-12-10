const { opendir, stat, open, readFile, writeFile } = require('fs');
const { promisify } = require('util');

// const openDir = promisify(opendir);

// openDir()
//     .then(async(dir) => {
//         for await (let direct of dir) {
//             console.log(direct.name);
//         }
//     })
//     .catch(err => {
//         console.log(err);
//     });


const getstat = promisify(stat);

getstat('./EventEmitter.js')
    .then((stat) => {
        console.log(stat);
    })
    .catch(err => console.log(err));



const read = promisify(readFile);

open('./EventEmitter.js', (err, fd) => {
    if (err) {
        console.log(err);
        return;
    }
    read(fd, 'utf8')
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        });
});

writeFile('./text.txt', "Hello from this file", err => {
    console.log(err);
});