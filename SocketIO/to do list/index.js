const path = require("path");
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const ent = require('ent');
const fs = require('fs');

const assetsPath = path.resolve(__dirname, "assets");
app.use('/assets', express.static(assetsPath));

// Load index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  // when an user connects, their username is received and stored as a session var
  socket.on('new_client', (username) => {
      username = ent.encode(username);
      socket.username = username;
      socket.broadcast.emit('new_client', username);
      console.log( socket.username + ' connected');
  });
  // disconnet
  socket.on('disconnect', () => {
    console.log(socket.username + ' disconnected');
  });
  // server receives data when a client adds a new to-do
  socket.on('new_todo', (data) => {
    //send to other clients with username
    data.username = socket.username;
    socket.broadcast.emit('new_todo', data);
    console.log(data);
  });
  // server receives data when a client finishes a to-do
  socket.on('done_todo', (doneId) => {
    socket.broadcast.emit('done_todo', {username: socket.username, id: doneId});
  });
  // server receives data when a client deletes a to-do
  socket.on('delete_todo', (deletedId) => {
    socket.broadcast.emit('delete_todo', {username: socket.username, id: deletedId});
  });

});
http.listen(8080, function () {
  console.log('listening on *:8080');
});