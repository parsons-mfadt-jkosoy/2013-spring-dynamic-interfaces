int x;
int y;
int xSpeed;
int ySpeed;

void setup() {
	size(500,200);
	smooth();
	noStroke();
	frameRate(30);
	ellipseMode(LEFT); // draw the circle on the left.

	x = 0;
	y = 0;

	xSpeed = 3;
	ySpeed = 3;
}

void draw() {
	background(0);
	fill(0,255,0);

	x += xSpeed;
	y += ySpeed;

	ellipse(x,y,25,25);
}