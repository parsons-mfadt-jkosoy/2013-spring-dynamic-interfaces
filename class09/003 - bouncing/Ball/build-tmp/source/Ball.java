import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class Ball extends PApplet {

int x;
int y;
int xSpeed;
int ySpeed;

int ballWidth;
int ballHeight;

public void setup() {
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

public void draw() {
	background(0);
	fill(0,255,0);

	x += xSpeed;
	y += ySpeed;

	if(x > width) x -= width;

	if(y+ballHeight > height) ySpeed *= -1;
	else if(y < 0) ySpeed *= -1;

	ellipse(x,y,ballWidth,ballHeight);
}
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "Ball" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
