// setInterval is a function that calls infinitely:

x = 0;

function update() {
	x+=1;
	console.log(x);
}

setInterval(update,1000/30); // 1000/30 means try to update 30 times a second.