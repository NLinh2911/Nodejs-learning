const express = require('express');
const socket = require('socket.io');

// Express App setup
const app = express();
const server = app.listen(4000, function () {
  console.log('listening for requests on port 4000');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//==============SOCKET.IO=====================
const io = socket(server);

io.on('connection', (socket) => {
  //console.log(socket.id);
  socket.on('new_client', (username) => {
    socket.username = username;
    io.sockets.emit('new_client', username);
  })
})


