var express = require('express')
const http = require("http");
var app = express();
const server = http.createServer(app);

const socketIo = require("socket.io")(server, {
    cors: {
        origin: "*",
    }
  });


socketIo.on("connection", (socket) => {
  console.log("New client connected " + socket.id);

  socket.on('username', (data) => {
    console.log(data)
    socketIo.emit('usernameConnected', {
      userId: data,
      socketId: socket.id
    })
  })

  socket.emit("getId", socket.id);

  socket.on("sendDataClient", function(data) {
    console.log(data)
    socketIo.emit("sendDataServer", data);
  })

  socket.on("disconnect", () => {
    console.log("Client disconnected");
    socketIo.emit("userOff", socket.id)
  });
});

server.listen(3001, () => {
    console.log('Server đang chay tren cong 3001');
});
