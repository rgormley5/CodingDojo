var express = require("express");
var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("index");
})

var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});
var io = require('socket.io').listen(server)

io.sockets.on('connection', function(socket) {
    // this runs every time a client connects to this server
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    // server socket code goes here
    socket.on("button_clicked", function(data) {
        console.log('Someone clicked a button! Reason: ' + data.reason);
        socket.emit('server_response', {response: "sockets are the best!"});
    })
})