var http = require('http'),
    funkyname = require('funkyname.js');

var name = funkyname.getFunkyName();

var port = process.env.PORT || 8000;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('This instance is called ' + name + '\n');
}).listen(port);

console.log('This instance has been named ' + name);
console.log('Listening on port ' + port)