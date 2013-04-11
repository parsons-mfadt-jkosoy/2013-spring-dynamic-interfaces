#include "testApp.h"

//--------------------------------------------------------------
void testApp::setup(){
    ofSetFrameRate(30);
    ofEnableSmoothing();
    ofSetWindowShape(500, 200);
    
    x = 0;
    y = 0;
    
    ballWidth = 25;
    ballHeight = 25;
    
    oscReceiver.setup(30001);
}

//--------------------------------------------------------------
void testApp::update(){
    while(oscReceiver.hasWaitingMessages()) {
        ofxOscMessage message;
        oscReceiver.getNextMessage(&message);
        
        if(message.getAddress() == "/update") {
            x = message.getArgAsInt32(0);
            y = message.getArgAsInt32(1);
        }
    }
}

//--------------------------------------------------------------
void testApp::draw(){
    ofClear(0);
    ofSetColor(0, 255, 0);
    
    ofPushMatrix(); {
        ofTranslate(-ofGetWindowWidth()*2,0);
        ofEllipse(x, y, ballWidth, ballHeight);
    } ofPopMatrix();
}

//--------------------------------------------------------------
void testApp::keyPressed(int key){
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