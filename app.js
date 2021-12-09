const http = require('http');

const port = 5050;

const dbConnection = true;

if (!dbConnection) {
    process.exit(0);
    //0 Exit peacefully 
    //1 Error 
}
const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.end(
                `<html>
                    <head><title>First Node application</title></head>
                    <body><h1>Hello rahul this side.</h1></body>
                </html>`
            );
            break;
        case '/admin':
            res.end("Welcome to the admin page");
            break;
        case '/user':
            res.end("Welcome to the user page");
            break;
        default:
            res.end("404 Not found");
            break;
    }

});

server.listen(port, () => {
    console.log(`server is now listening on port ${port}`);
});