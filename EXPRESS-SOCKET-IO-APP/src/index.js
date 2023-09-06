const express = require("express");
const app = express();
const path = require("path");

const http = require("http");
const { Server } = require("socket.io");
const { addUser } = require("./utils/users");
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("socket", socket.id);

  socket.on("join", (options, callback) => {
    console.log(option, callback);
    const { error, user } = addUser({ id: socket.id, ...options });

    if (error) {
      return callback(error);
    }

    socket.join(user.room);
  });
  socket.on("message", () => {});
  socket.on("disconnect", () => {
    console.log("disconnect", socket.id);
  });
});

const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));

const port = 4000;
server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
