const net = require('net');
const ip = "::1", port = 20001;

const server = net.createServer(socket => {
    socket.pipe(socket);

    socket.on('data', data => {
        console.log(`Data received from client : ${data.toString()}`);
    });

    socket.on('close', data => {
        console.log(`client closed: ${data.toString()}`);
    });
});

server.on('listening', () => {
    console.log(`Server run ${ip}:${port}`);
});

server.on('error', err => {
    console.log(`Error: ${err}`);
    server.close();
});

server.listen(port, ip);

/*
 *  And connect with a tcp client from the command line using netcat, the *nix 
 *  utility for reading and writing across tcp/udp network connections.  I've only 
 *  used it for debugging myself.
 * 
 *  Test with netcat TCP Client.
 *   $ nc ::1 1337
 * 
 *  You should see.
 *   > Echo server
 */
