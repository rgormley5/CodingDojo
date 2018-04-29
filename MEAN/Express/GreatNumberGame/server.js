var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var session = require("express-session");
var app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({secret: 'unicorn'}));
app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    console.log('in root route');

    if (req.session['number']) {
        console.log("session already has a number as: ", req.session.number);
        if (req.session['guess']) {
            console.log("guess is: ", req.session.guess);
            if (req.session.guess < req.session.number) {
                var message = "guess is less than number";
            } else if (req.session.guess > req.session.number) {
                message = "guess is greater than number";
            } else {
                message = "you guessed correctly!";
            }
        } else {
            console.log("no guess");
        }
    } else {
        req.session.number = Math.floor(Math.random() * (10 - 1)) + 1;
        console.log("set session's number to: ", req.session.number);
    }

    var object = {
        myNumber: req.session.number,
        myMessage: message
    };

    res.render('index', {object: object});
})

app.post('/process_form', function(req, res) {
    console.log('in /process_form route');
    console.log('post data is: ', req.body);
    console.log('guess is: ', req.body.guess);
    req.session.guess = req.body.guess;
    res.redirect('/')
})

app.listen(5000, function() {
    console.log("listening on port 5000");
});