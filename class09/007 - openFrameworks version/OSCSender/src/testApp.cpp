#include "testApp.h"

//--------------------------------------------------------------
void testApp::setup(){
    ofSetFrameRate(30);
    ofEnableSmoothing();
    ofSetWindowShape(500, 200);
    
    x = 0;
    y = 0;
    
    xSpeed = 6;
    ySpeed = 6;
    
    ballWidth = 25;
    ballHeight = 25;
    
    realWidth = ofGetWindowWidth()*2;
    
    oscSender.setup("127.0.0.1", 30001);
}

//--------------------------------------------------------------
void testApp::update(){
    x = x+xSpeed;
    y = y+ySpeed;

    if(y+ballHeight>ofGetWindowHeight()) ySpeed = ySpeed * -1;
    else if(y < 0) ySpeed = ySpeed * -1;

    if(x>realWidth) x = x-realWidth;
    else if(x+ballWidth < 0) x = x+realWidth;
    
    ofxOscMessage message;
    message.setAddress("/update");
    message.addIntArg(x);
    message.addIntArg(y);
    
    oscSender.sendMessage(message);
}

//--------------------------------------------------------------
void testApp::draw(){
    ofClear(0);
    ofSetColor(0, 255, 0);
    
    ofEllipse(x, y, ballWidth, ballHeight);
}

//--------------------------------------------------------------
void testApp::keyPressed(int key){
    xSpeed = xSpeed * -1;
}

//--------------------------------------------------------------
void testApp::keyReleased(int key){

}

//--------------------------------------------------------------
void testApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void testApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void testApp::mousePressed(int x, int y, int button){

}

//--------------------------------------------------------------
void testApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void testApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void testApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void testApp::dragEvent(ofDragInfo dragInfo){ 

}