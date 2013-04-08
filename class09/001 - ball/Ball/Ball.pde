void setup() {
	size(500,200);
	smooth();
	noStroke();
	frameRate(30);
	ellipseMode(LEFT); // draw the circle on the left.
}

void draw() {
	background(0);
	fill(0,255,0);

	ellipse(0,0,25,25);
}