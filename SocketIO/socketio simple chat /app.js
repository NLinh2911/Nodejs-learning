const express = require('express');
const socket = require('socket.io');

// Express App setup
const app = express();
const server = app.listen(4000, function () {
  console.log('listening for requests on port 4000');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index1.html');
});

// Socket setup & pass server
const io = socket(server);
io.on('connection', (socket) => {
  // when an user connects, their username is received and stored as a session var
  socket.on('new_client', (username) => {
    socket.username = username;
    io.sockets.emit('new_client', username);
    console.log(socket.username + ' connected');
  });

  socket.on('disconnect', () => {
    socket.broadcast.emit('user_disconnect', socket.username);
    console.log(socket.username + ' disconnected');
  });

  // when a new message is received
  socket.on('chat_message', (message) => {
    //console.log(message);
    // server now emits the data to all connected clients
    io.sockets.emit('chat_message', { username: socket.username, message: message });
  });

  // Handle typing event
  socket.on('typing', function () {
    // server emits to all other connected clients except for the sender
    socket.broadcast.emit('typing', socket.username);
  });

});
