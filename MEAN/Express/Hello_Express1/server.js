var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'codingdojorocks'}));
app.get('/', function(req, res) {
    res.render('index', {title: "Hello_Express1"});
});
app.get("/users/:id", function (req, res){
    console.log("The user id requested is:", req.params.id);
    res.send("You requested the user with id: " + req.params.id);
})
app.post('/users', function(req, res){
    req.session.name = req.body.name;
    console.log("req.session.name" = req.session.name);
    console.log("POST DATA \n\n", req.body);
    res.redirect('/');
})
app.listen(8000, function() {
    console.log("listening on port 8000");
})
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
