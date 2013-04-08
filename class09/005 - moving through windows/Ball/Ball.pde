import oscP5.*;
import netP5.*;

int x;
int y;
int xSpeed;
int ySpeed;

int ballWidth;
int ballHeight;

OscP5 oscP5;
NetAddress remoteLocation;

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

	oscP5 = new OscP5(this,30000); // listen on port 30000.
	remoteLocation = new NetAddress("127.0.0.1",30001); // connect to our own computer on port 30001
}

void draw() {
	background(0);
	fill(0,255,0);

	x += xSpeed;
	y += ySpeed;

	// note that the width is multiplied by 2 now to account for two screens.
	if(x > width*2) x -= width*2;
	else if(x+ballWidth < 0) x += width*2;

	if(y+ballHeight > height) ySpeed *= -1;
	else if(y < 0) ySpeed *= -1;

	ellipse(x,y,ballWidth,ballHeight);

	OscMessage message = new OscMessage("/update"); // send an update message.
	message.add(x); // pass along the X position.
	message.add(y); // and the Y position.
	oscP5.send(message, remoteLocation);  // send the message
}

void keyPressed() {
	xSpeed *= -1;
}