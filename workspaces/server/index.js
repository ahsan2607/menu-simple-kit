const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:8000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  // socket.on("join_room", (data) => {
  //   socket.join(data);
  //   console.log(`User with ID: ${socket.id} joined room: ${data}`);
  // });

  socket.on("send_request", (data) => {
    socket.emit("receive_request", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(8001, () => {
  console.log("SERVER RUNNING");
});