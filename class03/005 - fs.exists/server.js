var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function(req,res) {
	var parsedUrl = url.parse(req.url);
	console.log(parsedUrl);
	console.log("Requested " + req.url);

	var httpStatusCode = 200;

	fs.exists(parsedUrl.pathname,function(doesItExist) {

		if(doesItExist == false) {
			httpStatusCode = 404;
		}

		console.log("Does the file exist? :: " + doesItExist);
		
		console.log("HTTP Status Code :: " + httpStatusCode);


	});

}).listen(8080,"127.0.0.1");