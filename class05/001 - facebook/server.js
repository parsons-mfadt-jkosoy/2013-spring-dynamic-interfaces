var http = require("http");
var fs = require('fs');
var path = require('path');
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

server.listen(8080);


var socketServer = io.listen(server);
socketServer.sockets.on('connection',function(socket) {

	socket.on('join room',function(data) {
		socket.join(data.room);
		socket.set('facebookId',data.facebookId); // save the facebook id for later.
		socket.broadcast.to(data.room).emit('user joined',data.facebookId,data.action);

		console.log(data.facebookId + ' has joined ' + data.room);
	});

	socket.on('disconnect',function() {
		socket.get('facebookId',function(error,facebookId) {
			if(!error) {
				socket.broadcast.to(socket.room).emit('user left',facebookId);
			}
		});
	});

});