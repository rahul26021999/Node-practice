const { pbkdf2 } = require('crypto');
const { createServer } = require('http');
const start = Date.now();

const hash = () => {
    pbkdf2('myPass', 'thisIsMySecret', 10000, 1000, 'sha256', () => {
        console.log('hash', Date.now() - start);
    });
};

const list = () => {
    createServer().listen(3000, () => {
        console.log('listening', Date.now() - start);
    });
};

hash();
hash();
hash();
hash();
list();