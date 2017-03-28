const path = require("path");
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const ent = require('ent');
const shortid = require('shortid');
const mongoose = require('mongoose');

// static files
const assetsPath = path.resolve(__dirname, "assets");
app.use('/assets', express.static(assetsPath));

// Connect to database
mongoose.connect('mongodb://test:test@ds143900.mlab.com:43900/todosocket');
// Create a scheme - blueprint for data
const todoSchema = new mongoose.Schema({
  todo: String,
  id: String
})
// 
const Todo = mongoose.model('Todo', todoSchema);

// Routing
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  // when an user connects, their username is received and stored as a session var

  socket.on('new_client', (username) => {
    username = ent.encode(username);
    socket.username = username;
    socket.broadcast.emit('new_client', username);
    console.log(socket.username + ' connected');
  });
    // get all todo from db and send to user on connection
  Todo.find({}, function (err, data){
    if (err) throw err;
    socket.emit('update data', data);
    console.log(data);
  })
  // disconnet
  socket.on('disconnect', () => {
    console.log(socket.username + ' disconnected');
  });
  // server receives data when a client adds a new to-do
  socket.on('new_todo', function (todoText) {
    let todoId = shortid.generate();
    // store new todo in the db
    let newTodo = Todo({todo: todoText, id: todoId}).save(function (err, data) {
      if (err) throw err;
    });

    io.sockets.emit('new_todo', { username: socket.username, id: todoId, text: todoText });
  });
  // server receives data when a client finishes a to-do
  socket.on('done_todo', (doneId) => {
    socket.broadcast.emit('done_todo', { username: socket.username, id: doneId });
  });
  // server receives data when a client deletes a to-do
  socket.on('delete_todo', (deletedId) => {
    Todo.find({id: deletedId}).remove(function (err, data) {
      if (err) throw err;
    })
    socket.broadcast.emit('delete_todo', { username: socket.username, id: deletedId });
  });

});
http.listen(8080, function () {
  console.log('listening on *:8080');
});