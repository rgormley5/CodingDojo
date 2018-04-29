var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
// var session = require("express-session");
var app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
// app.use(session({secret: 'unicorn'}));
// app.set('views', path.join(__dirname, "./views"));
// app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/angular/dist'));

app.listen(8000, function() {
    console.log("listening on port 8000");
});