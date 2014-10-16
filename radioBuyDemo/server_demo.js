
// tcp server 

var net = require('net');
var HOST = '127.0.0.1';
var PORT = 5168;


var server = net.createServer(function(socket) {
    console.log("client: " , socket.remoteAddress+ ":" + socket.remotePort);
        
    socket.on('data', function(devMsg){

        console.log(">>>>>>>>>>>>>>>");
        console.log("header : "+ JSON.parse(devMsg).header.version);
        console.log("header : "+ JSON.parse(devMsg).header.devID);
        console.log("header : "+ JSON.parse(devMsg).header.bodyLength);
        
        console.log("body : "+ JSON.parse(devMsg).body.mac);
        console.log("body : "+ JSON.parse(devMsg).body.snr);
        console.log("body : "+ JSON.parse(devMsg).body.rssi);
        console.log("body : "+ JSON.parse(devMsg).body.corr);
        console.log("server get body len="+JSON.stringify(JSON.parse(devMsg).body).length);
        console.log("<<<<<<<<<<<<<<<");
        // socket.write(data);
        // client_pool[JSON.parse(data).devID].write(data);
    })
});

server.listen(PORT, HOST);
console.log("server listening at " + PORT);

// tcp server end


