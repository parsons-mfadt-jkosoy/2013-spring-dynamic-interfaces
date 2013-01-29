Class 1 Notes
================

1/28/2013
-----------

### Syllabus

The Syllabus can be found in this directory. We went through it in the first third of the class. If there are any questions or you were not present contact me so we can go through !

### What are the atomic components necessary for innovation?

Our class discussion centered around dynamic interfaces big and small. Whether it's "Pull to Refresh" or the invention of the iPhone, we looked what sort of conditions were required for the kind of rapid innovation in UX we're seeing today.

Some of the key highlights:

	- An Original Thinker (Steve Jobs, e.g.)
	- A community dedicated to new kinds of innovation.
	- Culture. Science Fiction.
	- Upgrades in dependent technology.
		- Can't have an iPhone without wifi becoming prevelant or Flash drives becoming affordable.
	- Infrastructure
	- Marketing or Business Partnerships

This also raised the question of the value of ubiquitous user experiences (aka many applications or sites effectively using the same mechanisms for navigation, such as infinite scrolling). I'd imagine we'll be asking that question more as the semester rolls on.

### Intro to HomeBrew + NodeJS

We began to investigate a new technology to see if there were opportunities for innovation in it.

#### To download HomeBrew

1. Visit [Homebrew's page](http://mxcl.github.com/homebrew/).
2. Crack open Terminal.app.
3. Copy and paste the install script found on their site.
3. Type the following command into Terminal to check to make sure HomeBrew is there.

	which brew

##### A note on XCode

You may need to download the latest version of XCode and install Command Line Tools. Download XCode from the Mac App Store, then open Preferences and go to the Downloads tab. You should see an option to install the Command Line Tools.

##### A note to Windows users

We're going to forgo command line utilities for Windows. We'll see how that goes. You may want to download Cygwin and get that setup... we may need it.

#### To install NodeJS

First, type this command:

	brew install nodejs

After it finishes running you should be able to type:
	
	which node

If you don't see /usr/local/bin/node or something along those lines appear on your machine then something didn't install correctly. Start Googling or hit the MiniGroup.

If you're on *Windows* simply download the NodeJS MSI and install it. Restart your computer.

#### Running your Node Server


##### Mac Users
1. Download or clone this repo.
2. Type "cd " into Terminal. Don't hit enter.
3. drag the 001 - js on the server side *folder* into Terminal. You should see the whole path appear.
4. Hit enter.
5. Type node server.js

cd [drag folder here] will tell your computer to navigate to that particular folder. From there we'll telling node to run the file name server.js

##### Windows Users
1. Download or clone this repo.
2. Go to Start -> Run and type "cmd". Hit enter. A new command line window should appear.
3. Type in cd C:\Path\To\Your\Repo, obviously replacing the path with whereever you clone the Repo to.
4. Type in node server.js