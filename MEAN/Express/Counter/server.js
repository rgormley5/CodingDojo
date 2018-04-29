// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret: 'unicorn'}))
// static content
app.use(express.static(__dirname + "/static"));
// setting up ejs and our views folder
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {

    if ("count" in req.session) {
        req.session.count += 1;
        console.log(req.session.count);
    } else {
        req.session.count = 0;
        console.log(req.session.count);
    }
    var object = {
        counter: req.session.count
    };

    res.render('index', {users: object}); 
})
// post route for adding a user
app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
 // This is where we would add the user to the database
 // Then redirect to the root route
    res.redirect('/');
})
// tell the express app to listen on port 8000
app.listen(5000, function() {
    console.log("listening on port 5000");
});
