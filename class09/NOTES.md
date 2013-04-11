Class 9 Notes
================

4/8/2013
-----------

####Introduction to OSC

This week we talked a lot about the magic behind creating realtime connected applications. For our class purposes we used [Open Sound Control](http://en.wikipedia.org/wiki/Open_Sound_Control) (abbreviated to OSC) to send messages between two native applications, even if they weren't written in the same language or on the same platform.

OSC is great because it has a fairly simple format. One application works as a server (aka a receiver) and another as a client (aka a sender).

Messages basically look like web addresses with simple data structures (string, integers, floats, booleans, etc) attached. For example: "/foo/bar" could be one message.

We started the class off by doing a number of examples in Processing. As time went on we also added in openFrameworks to show two ways of handling OSC and even had the Processing sketches talk to the openFrameworks apps. This class' example folders build one section at a time, starting with drawing a simple ball that ultimately bounces across a screen.

As a final "magical" demo we bounced that ball around [almost] every computer in the room.
