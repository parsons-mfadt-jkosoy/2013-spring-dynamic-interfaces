var http = require("http");
var fs = require('fs'); // filesystem.
var path = require('path'); // used for traversing your OS.
var url = require('url');

// add to your hearts' content.
var mimeTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css"
};

// jk: more advanced: https://npmjs.org/package/mime
http.createServer(function(req,res) {
	var fileToLoad;

	// you could also convert a url to a filename like so if you wanted
	if(req.url == "/easter-egg") {
		fileToLoad = "./lotsOfMoneyInTheBananaStand.html";
	}
	else if(req.url == "/") {
		fileToLoad = "./index.html";
	}
	else {
		fileToLoad = "." + url.parse(req.url).pathname;
	}

	var fileBytes;
	var httpStatusCode = 200;

	// check to make sure a file exists...
	fs.exists(fileToLoad,function(doesItExist) {

		// if it doesn't exist lets make sure we load error404.html
		if(!doesItExist) {
			httpStatusCode = 404;
			fileToLoad = "error404.html";
		}

		fileBytes = fs.readFileSync(fileToLoad);
		var mimeType = mimeTypes[path.extname(fileToLoad).split(".")[1]]; // complicated, eh?

		res.writeHead(httpStatusCode,{'Content-type':mimeType});
		res.end(fileBytes);
	});
}).listen(8080,'127.0.0.1');