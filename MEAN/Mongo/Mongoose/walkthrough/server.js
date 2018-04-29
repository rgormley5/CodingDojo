var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
   })
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User');  // We are retrieving this Schema from our Models, named 'User'
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {

    User.find({}, function(err, users) {
        if(err) {
            console.log('something went wrong');
        } else { 
            console.log('successfully added a user!');
            console.log(users);
            res.render('index', {users: users});
        }
    });
});

app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);

    var user = new User({name: req.body.name, age: req.body.age});
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    user.save(function(err) {
    if(err) {
        console.log('something went wrong');
    } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a user!');
        res.redirect('/');
    }
  })
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})
