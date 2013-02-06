// require("library"). built in nodejs method to load something in.
var http = require("http");

// req is the HTTP request, aka data the client/browser sent.
// res is the HTTP response, aka what we're going to send back.
var server = http.createServer(function(req,res) {
	// writeHead accepts two arguments:
	// 1. the HTTP status code. 200 means all good.
	//		you've seen some others like Error 404 before, I'm sure.
	//		http://en.wikipedia.org/wiki/List_of_HTTP_status_codes
	// 2. additional headers in an object.
	//		headers explain to the client what kind of data it's getting back.
	//		Content-type here means we're sending back text.
	//		Bet you can look up other headers yourself. Think you could switch it to HTML?

	console.log(req);
	res.writeHead(200,{'Content-type':'text/plain'});

	// end says we're done here and prints out bytes. boom.
	res.end('You did it!');
});

// port, IP address. 80 is the default port for web browsers. 127.0.0.1 is our own IP.
// if you change the port from 80 you'll need to go to 127.0.0.1:port in your browser.
server.listen(8080,'127.0.0.1'); // http://www.thinkgeek.com/product/6806/