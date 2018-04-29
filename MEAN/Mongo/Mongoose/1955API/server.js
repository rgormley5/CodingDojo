var express = require('express');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/basic_mongoose');
var OldiesSchema = new mongoose.Schema({
    name: String
});
mongoose.model('Oldie', OldiesSchema);
var Oldie = mongoose.model('Oldie')
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.get('/', function(req, res) {
    console.log("in home GET route");

    Oldie.find({}, function(err, person) {
        if (err) {
            console.log(" *** error searching for all oldies ***");

            res.json({message: "Error", error: err});
        } else {
            console.log(" *** successfully searched for all oldies ***");
            
            res.json({data: person});
        }
    })
});

app.get('/new/:name/', function(req, res) {
    console.log("adding new name")
    console.log("req.params.name is: ", req.params.name)

    var new_person = new Oldie(req.body);
    new_person.name = req.params.name;
    new_person.save(function(err) {
        if (err) {
            console.log(" *** error saving new old person ***");

            res.json({message: "Error", error: err});
        } else {
            console.log(" *** Successfully saved old person! ***");

            res.json({person_added: new_person});
        }
    })
})

app.get('/remove/:name/', function(req, res) {
    console.log('in remove/name route')

    Oldie.remove({name: req.params.name}, function(err) {
        if (err) {
            console.log('**** error deleting old person ****');
            res.json({message: "Error", error: err});
        } else {
            console.log("Successfully deleted that old person");
            res.json({message: "deleted an old person!"})
        }
    })

})

app.get('/:name', function(req, res) {
    console.log('in /:name route');

    Oldie.find({name: req.params.name}, function(err, person) {
        console.log("person is: ", person);
        if (err) {
            console.log('error searching for user in db, user may not exist');
            res.json({error: err});
        } else {
            if (person.length > 0) {
                console.log('successfully found user in db');
                res.json({user: person})
            } else {
                console.log('person is not in db')
                res.json({message: req.params.name + " is not in db"})
            }
        }
    })

})

app.listen(8000, function() {
    console.log("listening on port 8000");
})