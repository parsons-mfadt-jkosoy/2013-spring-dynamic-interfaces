Oftentimes multiuser experiences don't neccessarily require every single person connected to know about everyone elses' goings ons.

Consider a multiplayer game: I might want to see a lobby of games that are available to play but once I choose who I'm playing against I only need information about what that one person is doing.

Socket.io builds in the concept of "rooms" which effectively solve this problem. It's trivial to emit and broadcast to a specific room, allowing messages to get paired down to just the people that need to know.

In this demo we build our first real application: A chatroom. 