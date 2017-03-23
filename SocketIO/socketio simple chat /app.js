const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const ent = require('ent');
const fs = require('fs');

// Load index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
//
 
io.on('connection', (socket) => {
  // when an user connects, their username is received and stored as a session var
  socket.on('new_client', (username) => {
    username = ent.encode(username);
    socket.username = username;
    socket.broadcast.emit('new_client', username);
    console.log(socket.username + ' connected');
  });

  socket.on('disconnect', () => {
    socket.broadcast.emit('user_disconnect', socket.username);
    console.log(socket.username + ' disconnected');
  });

  // when a new message is received
  socket.on('chat_message', (message) => {
    console.log(message);
    message = ent.encode(message);
    socket.broadcast.emit('chat_message', { username: socket.username, message: message });
  });
});



http.listen(3000, () => {
  console.log('listening on *:3000');
});