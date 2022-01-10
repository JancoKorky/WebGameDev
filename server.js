const express = require("express");
const bodyParser = require("body-parser");
const socket = require("socket.io");

const dbase = require("./util/database");
const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//load public file with sketch
app.use(express.static("public"));

// load router
// const testRoutes = require("./routes/test");
const user = require("./routes/user")
// app.use("/test", testRoutes);
app.use(user)

// setup socket
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// const io = socket(server);
// io.sockets.on("connection", newConnection);

// function newConnection(socketInfo) {
//   console.log("New Connection: ", socketInfo.id);
//   app.set('socketio', socketInfo);
// }
