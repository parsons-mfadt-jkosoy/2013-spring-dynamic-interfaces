import oscP5.*;
import netP5.*;

int x;
int y;
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
	ballWidth = 25;
	ballHeight = 25;

	oscP5 = new OscP5(this,30001); // listen on port 30001.
	remoteLocation = new NetAddress("127.0.0.1",30000); // connect to our own computer on port 30000
}

void draw() {
	background(0);
	fill(0,255,0);
	
	pushMatrix(); {
		translate(-width,0); // slide the screen left so we can see what's to the right.
		ellipse(x,y,ballWidth,ballHeight);
	} popMatrix();
}

void oscEvent(OscMessage message) {

	if(message.checkAddrPattern("/update") == true) {
		x = message.get(0).intValue(); // the X position was passed first.
		y = message.get(1).intValue(); // the Y position was passed second.
	}
}