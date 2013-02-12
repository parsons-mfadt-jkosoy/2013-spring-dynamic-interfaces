var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function(req,res) {
	var myObject = { foo:"bar" };
	console.log(myObject["foo"]);

	var index = "foo";
	myObject.foo // bar 
	myObject[index] // bar


}).listen(8080,"127.0.0.1");