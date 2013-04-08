int x;
int y;
int xSpeed;
int ySpeed;

int ballWidth;
int ballHeight;

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

	ballWidth = 25;
	ballHeight = 25;
}

void draw() {
	background(0);
	fill(0,255,0);

	x += xSpeed;
	y += ySpeed;

	if(x > width) x -= width;
	else if(x+ballWidth < 0) x += width;

	if(y+ballHeight > height) ySpeed *= -1;
	else if(y < 0) ySpeed *= -1;

	ellipse(x,y,ballWidth,ballHeight);
}

void keyPressed() {
	xSpeed *= -1;
}