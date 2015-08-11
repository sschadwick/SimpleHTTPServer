var http = require('http'); //load http and fs modules for node
var fs = require('fs');

var port = 1234; //if , port is likely already in use
var localhost = '127.0.0.1';

var server = http.createServer(function(request, response){
	var url = request.url;

	// root web request will redirect to /public/index.html
	if (url == '/') {
		fs.readFile('./public/index.html', function(err, data) {
			response.writeHead(200, {"Content-Type": "text/html"});
			response.end(data);
		})
	} else {
		fs.readFile('./public' + url, function(err, data) {

			// 404 error code
			if(err){ //if requested url is not present
				console.log(404 + ':' + url); //log 404 url
				response.writeHead(404);
				response.end("Sorry, that file does not exist");
				return;
			} else {

				// present the requested file
				response.writeHead(200, {"Content-Type": "text/html"});
				response.end(data);
			}
		})
	}
})

server.listen(port, localhost); //server listener
console.log('Server is running on: ' + localhost + ':' + port);
