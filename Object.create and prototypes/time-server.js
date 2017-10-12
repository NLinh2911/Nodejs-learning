const net = require('net')

const HOST = '127.0.0.1';
const PORT = 3000;

function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  const d = new Date()
  return d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' +
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes())
}

const server = net.createServer(function (socket) {
   console.log('CONNECTED: ' + socket.remoteAddress +':'+ socket.remotePort);
  socket.end(now() + '\n')
})

server.listen(PORT, HOST)