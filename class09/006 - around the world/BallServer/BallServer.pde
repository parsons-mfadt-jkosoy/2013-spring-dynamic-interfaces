import oscP5.*;
import netP5.*;

int x = 0;
int y = 0;

int xSpeed =20;
int ySpeed = 20;

int ballWidth = 25;
int ballHeight = 25;

int realWidth;

OscP5 myOscP5;
NetAddressList myList;

void setup() {
  size(500,200);
  smooth();
  noStroke();
  frameRate(5);
  ellipseMode(LEFT);

  myOscP5 = new OscP5(this,30000);
  myList = new NetAddressList();
  myList.add("169.254.165.49",30001);
  myList.add("169.254.13.82",30001);
  myList.add("169.254.222.113",30001);
  myList.add("169.254.33.19",30001);
  myList.add("169.254.135.230",30001);
  myList.add("169.254.124.49",30001);
  myList.add("169.254.185.146",30001);
  myList.add("169.254.200.91",30001);
  myList.add("169.254.8.125",30001);
  myList.add("169.254.8.125",30001);
  myList.add("169.254.112.20",30001);
  myList.add("169.254.144.18",30001);
  myList.add("169.254.118.76",30001);
  myList.add("169.254.119.126",30001);

  realWidth = myList.size()*width;
  
  for(int i=0;i<myList.size();i++) {
    NetAddress slave = myList.get(i);
    OscMessage message = new OscMessage("/position");
    message.add(i+1);

    myOscP5.send(message,slave);
  }
}

void draw() {
  x = xSpeed + x;
  y = ySpeed + y;
  
  if(y+ballHeight>height) ySpeed = ySpeed * -1;
  else if(y < 0) ySpeed *= -1;
  
  if(x>realWidth) x = x-realWidth;
  else if(x+ballWidth < 0) x = x+realWidth;
  
  background(0);
  fill(0,255,0);
  ellipse(x,y,ballWidth,ballHeight);
  
  OscMessage message = new OscMessage("/update");
  message.add(x);
  message.add(y);  
  
  myOscP5.send(message,myList);
}

void keyPressed() {
  xSpeed = xSpeed * -1;
}
