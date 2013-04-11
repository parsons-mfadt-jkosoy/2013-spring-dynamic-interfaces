import oscP5.*;
import netP5.*;

int x = 0;
int y = 0;

int ballWidth = 25;
int ballHeight = 25;

int myIndex = 0;

OscP5 myOscP5;
NetAddress myRemoteLocation;

void setup() {
  size(500,200);
  smooth();
  noStroke();
  frameRate(30);
  ellipseMode(LEFT);
  
  myOscP5 = new OscP5(this,30001);
  myRemoteLocation = new NetAddress("127.0.0.1",30000);
}

void draw() {
  background(0);
  fill(0,255,0);
  
  pushMatrix(); {
    translate(-width*myIndex,0);
    ellipse(x,y,ballWidth,ballHeight);
  } popMatrix();
}

void oscEvent(OscMessage message) {
  if(message.checkAddrPattern("/update") == true) {
    x = message.get(0).intValue();
    y = message.get(1).intValue();
  }
  else if(message.checkAddrPattern("/position") == true) {
    myIndex = message.get(0).intValue();
  }
}
