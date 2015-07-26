var http = require('http'); //load http and fs modules for node
var fs = require('fs');

var port = 1234; //if err thrown, port is likely already in use
var localhost = '127.0.0.1';

var server = http.createServer(function(request, response){
	//create server using http module

	fs.exists("index.html", function(err){ //file system module
		try {
			if(!err){ //if no error
				response.writeHead(200, {"Content-Type": "text/html"});
				response.write("<!DOCTYPE html>");
				response.write("<html>");
				response.write("<head>");
				response.write("<title>Node Webserver</title>");
				response.write("</head>");
				response.write("<body>");
				response.write("<h1>Welcome to Node Server</h1>");
				response.write("<h2>Proudly running on " + localhost + ":" + port + "</h2>");
				response.write("<p>This site is a mockup for the Javascript Development Accelerator Challenge</p>");
				response.write("<a href='https://www.codefellows.org/'>Visit CodeFellows</a>");
				response.write("<p></p>");
				response.write("<img src='https://pbs.twimg.com/profile_images/269279233/llama270977_smiling_llama_400x400.jpg'/>");
				response.write("</body>");
				response.write("</html>");
				response.end();

			} else { //if error
				response.writeHead(500); //generic server error
				response.end();
			}
		} catch (err) {
			console.log(err); //log error thrown
		}
	})
})

server.listen(port, localhost); //server listener
console.log('Server is running on: ' + localhost + ':' + port);
