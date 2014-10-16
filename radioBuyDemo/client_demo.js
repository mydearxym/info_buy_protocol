var net = require('net');

var HOST = '127.0.0.1';
var PORT = 5168;

var client = new net.Socket();

client.connect(PORT, HOST, function() {
    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    var devMsg = {
        header : {
            version : "v1.0",
            devID : "devid_demo",
            bodyLength: -1
        }, 

        body: {
            mac : "mac_demo",
            snr: "snr_demo",
            rssi: "rssi_demo",
            corr: "corr_demo"
        }
    }

    devMsg.header.bodyLength = JSON.stringify(devMsg.body).length;
    client.write(JSON.stringify(devMsg));

});

