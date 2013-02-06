// move across the screen.

var box = document.getElementById("box");

x = 0;

function update() {
	x+=1;
	box.style.marginLeft = x + "px";
}

setInterval(update,1000/30); // 1000/30 means try to update 30 times a second.