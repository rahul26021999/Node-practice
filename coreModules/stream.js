// read stream and write stream example

const { createReadStream, createWriteStream, read } = require('fs');

const readStream = createReadStream('./text.txt');
const writeStream = createWriteStream('./text2.txt');

readStream.pipe(writeStream);

// Example of duplex stream -> can listen from both server and client  (can read and write both)

const { createServer } = require('http');

const server = createServer();
server.listen(3000);
server.on('connection', (socket) => {
    console.log(socket);
});