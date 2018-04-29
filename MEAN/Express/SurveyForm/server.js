var express = require("express");
var path = require("path");
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret: 'unicorn'}))
app.use(express.static(path.join(__dirname + "/static")));
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    console.log("in / route")

    res.render('form'); 
})

app.post('/process_form', function(req, res) {
    console.log("in /process_form")
    console.log("POST DATA", req.body);
    console.log("name is: ", req.body.name);

    req.session.name = req.body.name;
    req.session.location = req.body.location;
    req.session.language = req.body.language;
    req.session.comment = req.body.comment;

    res.redirect('/result')
})

app.get('/result', function(req, res) {
    console.log('in /result');

    var object = {
        name: req.session.name,
        location: req.session.location,
        language: req.session.language,
        comment: req.session.comment
    }

    res.render('result', {object: object});
})

app.get('/go_back', function(req, res) {
    console.log("in /go_back")


    res.redirect('/')
})

app.listen(5000, function() {
    console.log("listening on port 5000");
});
