var http = require('http'),
    funkyname = require('funkyname.js');

var name = funkyname.getFunkyName();
var port = process.env.PORT || 8000;

http.createServer(function (req, res) {
    console.log('url', req.url);
    var content = 'This instance is called ' + name + '\n';
    if (req.url == '/loaderio-87da3f91b6285d498fb44dbf02d42d4f/') {
        content = 'loaderio-87da3f91b6285d498fb44dbf02d42d4f';
    }
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(content);
}).listen(port);

console.log('This instance has been named ' + name);
console.log('Listening on port ' + port)