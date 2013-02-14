Class 3 Notes
================

2/11/2013
-----------

### Breaking down the homework.

We went through the bouncing ball excercise step-by-step using CodePen. Here's a [complete one](http://codepen.io/justincharles/pen/70020d33a3e4694989bb8c4eeef9e116) done by Justin that works pretty effectively.

### Connecting the dots.

We broke down the basics of variables, if statements, and functions. As a quick recap:

	var foo = "Hello";

	if(foo == "Hello") {
		// do something
	}
	else if(foo = "Goodbye") {
	}
	else {

	}

And some reminders on AND and OR in if statements. Don't forget the double equal signs, too!

	if(1+1 == 2 && 2+2 == 4) {
		// this could only runs if both statements are true
	}

	if(1+1 == 2 || 2+2 == 4) {
		// runs if either statement is true
	}


Now that we've got that, we could begin to break down what was happening in the NodeJS stuff a little better. Each indibidu

### Node Modules and a more useful HTTP server.

So we know what **require()** does: Loads in a module. We know that all JS is effectively the same either in the browser or on the server. So let's make something more useful.

- The logging example breaks down the console.log statement. On the server side it's going to log in your Terminal window.
- The webserver example is a complete, working webserver. Use it as a reference point for your homework.
- We looked at some additional modules we can load in with **require()**

	var fs = require("fs"); // loads in the file system utility
	var url = require("url"); // loads in the url utility.

#### Additional documentation

- [NodeJS File System Module](http://nodejs.org/api/fs.html)
- [NodeJS URL Module](http://nodejs.org/api/url.html)
- [NodeJS API](http://nodejs.org/api/). See if you can teach yourself some other modules here!

## Homework

1. Rebuild the node webserver and add your bouncing ball experiment from last week to it.
2. Continue thinking about the realtime interactive component.