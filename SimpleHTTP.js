var http = require('http');
var fs = require('fs');

var port = 8001;
var localhost = '127.0.0.1';

var server = http.createServer(function(request, response){

	fs.exists("index.html", function(err){
		try {
			if(!err){
				response.writeHead(200, {"Content-Type": "text/html"});
				response.write("<!DOCTYPE html>");
				response.write("<html>");
				response.write("<head>");
				response.write("<title>Node Webserver</title>");
				response.write("</head>");
				response.write("<body>");
				response.write("<h1>Welcome to Node Server</h1>");
				response.write("<h2>Proudly running on " + localhost + ":" + port + "</h2>");
				response.write("<p>This site is a mockup for a CodeFellows Challenge</p>");
				response.write("<a href='https://www.codefellows.org/'>Visit CodeFellows</a>");
				response.write("<p></p>")
				response.write("<img src='https://pbs.twimg.com/profile_images/269279233/llama270977_smiling_llama_400x400.jpg'/>");
				response.write("</body>");
				response.write("</html>");
				response.end();
			
			} else {
				response.writeHead(500);
				response.end();
			}
		} catch (err) {
			console.log(err);
		}
	})
})

server.listen(port, localhost);
console.log('Server is running on: ' + localhost + ':' + port);