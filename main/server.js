﻿var camp = require('../lib/Camp_Preparation');
var http = require('http');

var port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Camp is ' + camp.awesome() + '\nversion: ' + camp.VERSION);
}).listen(port);
