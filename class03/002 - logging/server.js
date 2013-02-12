var http = require("http");

http.createServer(function(req,res) {
//	console.log("Two plus two is equal to " + (2+2));
//	console.log("----------------------------------------");
	console.log(req.url); // look out, lots of data!
	console.log("----------------------------------------");

	res.writeHead(200,{'Content-type':'text/plain'});
	res.end('You did it!');
}).listen(8080,'127.0.0.1');