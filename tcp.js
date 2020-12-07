const net = require('net');
const server = net.createServer( socket =>{
    socket.write('Hello');
    socket.on('data' , data =>{
        console.log(data.toString());
    })
})
server.listen(8080);


// after that you start the debug ( F5 )
// then you go to your terminal and write 
// 'telnet 127.0.0.1 8080'
// and it will connect 