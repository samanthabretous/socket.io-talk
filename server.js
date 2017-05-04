/* eslint-disable */

var path = require("path");
var express = require("express");
var webpack = require("webpack");
var config = require("./webpack.config");

var app = express();
var compiler = webpack(config);

var serverPort = process.env.PORT || 3000;

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

const server = require('http').Server(app);
const io = require('socket.io')(server);


server.listen(process.env.PORT || 3000, function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Listening at http://localhost:" + serverPort);
});

io.sockets.on('connection', (socket) => {
  console.log('client connect');

  socket.on('add-message', ({ newMessage, username }) => {
    io.sockets.emit('message', { message: newMessage, username});
  });
});
