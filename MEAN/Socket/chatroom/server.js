var express = require('express');
var path = require('path');
// var session = require('express-session');

var app = express();

var count = 0;

app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// app.use(session({secret: 'unicorn'}));

app.get('/', function(req, res) {
    res.render("index");
})

var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    socket.on('got_a_new_user', function(data) {
        console.log('name is: ', data.username);
        var name = data.username;
        // session.user = name;
        console.log('emitting new_user');
        socket.broadcast.emit('new_user', name);
    })
    socket.on('message_submitted', function(data) {
        console.log('message is: ', data);
        // post message somewhere on client
    })
})