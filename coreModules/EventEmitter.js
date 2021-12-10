const { EventEmitter } = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('greeting', (name) => {
    console.log(`Hello ${name}`);
});

myEmitter.on('greeting', () => {
    console.log(`Hello Again`);
});

myEmitter.emit('greeting', 'Rahul');


const http = require('http');
const server = http.createServer();


server.on('listening', () => {
    setImmediate(() => {
        console.log(`Server is listening now`);
    });
});

server.on('listening', () => {
    console.log(`Server is listening now again`);
});

server.listen(3000);