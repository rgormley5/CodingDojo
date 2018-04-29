var express = require('express');
var path = require('path');

var app = express();

var count = 0;

app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

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
    socket.on('button_clicked', function() {
        count += 1;
        var object = {'number': count}
        io.emit('number_is', {response: object});
    })
})