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

public void setup() {
	size(500,200);
	smooth();
	noStroke();
	frameRate(30);
	ellipseMode(LEFT); // draw the circle on the left.
}

public void draw() {
	background(0);
	fill(0,255,0);

	ellipse(0,0,25,25);
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
