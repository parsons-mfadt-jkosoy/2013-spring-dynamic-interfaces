var http = require("http");
var fs = require('fs'); // filesystem.
var path = require('path'); // used for traversing your OS.
var url = require('url');
var io = require("socket.io");

var mimeTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css"
};

var webroot = "./www";

// this is the same basic webserver as before. just a couple of small adjustments now that we're experts. can you find them?
var server = http.createServer(function(req,res) {
	var fileToLoad;

	fileToLoad = webroot + url.parse(req.url).pathname;

	// check if we're a directory...
	stats = fs.lstatSync(fileToLoad);
	if(stats.isDirectory()) {
		fileToLoad = fileToLoad + "index.html";
	}

	var fileBytes;
	var httpStatusCode = 200;

	// check to make sure a file exists...
	fs.exists(fileToLoad,function(doesItExist) {

		// if it doesn't exist lets make sure we load error404.html
		if(!doesItExist) {
			httpStatusCode = 404;
			fileToLoad = webroot + "/error404.html";
		}

		fileBytes = fs.readFileSync(fileToLoad);
		var mimeType = mimeTypes[path.extname(fileToLoad).split(".")[1]]; // complicated, eh?

		res.writeHead(httpStatusCode,{'Content-type':mimeType});
		res.end(fileBytes);
	});
})

server.listen(8080,'127.0.0.1');

// now let's set up our web socket
var socketServer = io.listen(server);
// on takes two arguments:
// 1. the event to listen for. just a string.
//		"connection" is a built in event for when a client connects.
// 2. a function to handle what happens when that event gets sent up to the server.
socketServer.sockets.on('connection',function(socket) {
	// emit takes two arguments:
	// 1. the "event", which is just an arbitrary string. whatever you want to call it so its not confused with other events.
	// 2. the data for that event.
	// this goes back to the client!
	socket.emit('moop bloop bloopers',{facebook:'your facebook id could go here!',orSomethingElse:['could','go','here']});

	socket.emit('thomas');
});