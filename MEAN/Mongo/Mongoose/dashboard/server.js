var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

var app = express();

mongoose.connect('mongodb://localhost/basic_mongoose');
var DuckSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 1},
    skill: String

}, {timestamps: true});
mongoose.model('Duck', DuckSchema);
var Duck = mongoose.model('Duck')
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs');

app.get('/', function(req, res) {

    Duck.find({}, function(err, ducks) {
        if (err) {
            console.log(" **** error finding ducks! ****");
        } else {
            console.log(" **** found all ducks! ****");
            console.log(" **** all ducks are: ", ducks);

            res.render('index', {ducks: ducks});
        }
    })
});

app.get('/duck/new', function(req, res) {
    console.log("in /duck/new GET route");

    res.render('new');
});

app.post('/process_new', function(req, res) {
    console.log("in /ducks POST route");
    console.log("POST DATA: ", req.body);

    var new_duck = new Duck(req.body);
    new_duck.save(function(err) {
        if (err) {
            console.log(" **** there is an error! **** ");
        } else {
            console.log(" **** New Duck successfully saved! ****");
            console.log("new duck is: ", new_duck);

            res.redirect('/');
        }
    })
});

app.get('/duck/id/:id', function(req, res) {
    console.log("in /duck/id/:id")
    console.log("req.params.id is: ", req.params.id)

    Duck.find({_id: req.params.id}, function(err, duck) {
        if (err) {
            console.log(" **** something went wrong searching for specific duck ****");
        } else {
            console.log(" **** successfully found unique duck ****");
            console.log(" **** duck is: " + duck + " ****");

            res.render('id', {duck: duck});
        }
    })
})

app.get('/duck/edit/:id', function(req, res) {
    console.log("in /duck/edit/:id")
    console.log("req.params.id is: ", req.params.id)

    Duck.find({_id: req.params.id}, function(err, duck) {
        if (err) {
            console.log(" **** something went wrong searching for specific duck ****");
        } else {
            console.log(" **** successfully found unique duck ****");
            console.log(" **** duck is: " + duck + " ****");

            res.render('edit', {duck: duck});
        }
    })
})

app.post('/process_edit', function(req, res) {
    console.log('in process_edit POST route');
    console.log('POST DATA is: ', req.body);

    Duck.find({_id: req.body.id}, function(err, duck) {
        // CONSOLE.LOG THIS DUCK!!  it's an array with one object (bc searched with one id)
        console.log("duck is: ", duck)
        if (err) {
            console.log(" **** error editing duck ****");
        } else {
            console.log(" **** sucessfully edited this duck! ****");
            console.log(" **** this duck is: ", req.body.name)

            duck[0].name = req.body.name;
            duck[0].skill = req.body.skill;

            duck[0].save(function(err) {
                if (err) {
                    console.log(" **** error saving update to duck ****");
                } else {
                    console.log(" **** successfully saved updates to duck!! ****")
                    res.redirect('/')
                }
            })
        }
    })
})

app.post('/process_delete', function(req, res) {
    console.log("in process_delete route");
    console.log("POST DATA is: ", req.body);

    Duck.remove({_id: req.body.id}, function(err) {
        if (err) {
            console.log(" **** error deleting duck ****");
        } else {
            console.log(" **** Duck successfully deleted **** ");
            res.redirect('/');
        }
    })
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})
