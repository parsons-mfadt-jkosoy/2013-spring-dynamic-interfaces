var http = require("http");
var url = require("url");

http.createServer(function(req,res) {
	var parsedUrl = url.parse(req.url);
	console.log(parsedUrl);



	console.log("Requested " + req.url);


}).listen(8080,"127.0.0.1");