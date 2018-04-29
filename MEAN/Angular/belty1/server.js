let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let path = require('path')
let uniqueValidator = require('mongoose-unique-validator');

let app = express();

mongoose.connect('mongodb://localhost/basic_mongoose');

let AnimalsSchema = new mongoose.Schema({
    pet_name: {type: String, minlength: [3, "custom error: pet name must be at least 3 chars long"], unique: true},
    pet_type: {type: String, minlength: [3, "custom error: pet name must be at least 3 chars long"]},
    pet_description: {type: String, minlength: [3, "custom error: pet description must be at least 3 chars long"]},
    pet_skill_1: {type: String},
    pet_skill_2: {type: String},
    pet_skill_3: {type: String},
    likes: {type: Number, default: 0}
}, {timestamps: true})

mongoose.model('Animal', AnimalsSchema);
let Animal = mongoose.model('Animal');
mongoose.Promise = global.Promise;
AnimalsSchema.plugin(uniqueValidator);

app.use(bodyParser.json());
app.use(express.static(__dirname + '/angularTask1/dist'));

app.post('/animal', function(req, res) {
    console.log('in /animal POST route');
    console.log('POST DATA is: ', req.body);

    let newAnimal = new Animal(req.body);
    newAnimal.save(function(err) {
        if (err) {
            console.log('error saving new Author');
            console.log('error is: ', err)
            res.json({error: err});
        } else {
            console.log('successfully added new Animal');
            console.log('new Animal is: ', newAnimal);
            res.json({message: "successfully created new Animal!"})
        }
    })
})

app.get('/animal', function(req, res) {
    console.log('in /animal GET route');
    Animal.find({}, null, {sort: {pet_type: 1}}, function(err, all_animals) {
        if (err) {
            console.log('error finding all animals');
            res.json({error: err})
        } else {
            console.log('successfully found all animals');
            res.json({animals: all_animals})
        }
    })
})

app.get('/animal/:id', function(req, res) {
    console.log("in /animal/" + req.params.id + " GET route");
    
    Animal.find({_id: req.params.id}, function(err, animal) {
        if (err) {
            console.log("error getting this animal")
            console.log("err is: ", err)
            res.json({message: "error finding animal", error: err})
        } else {
            console.log("successfully found this animal");
            res.json({message: "successfully found this animal", data: animal})
        }
    })
})

app.delete('/animal/:id', function(req, res) {
    console.log("in /animal/" + req.params.id + " DELETE route");

    Animal.remove({_id: req.params.id}, function(err) {
        if (err) {
            console.log("error deleting this animal: ", err);
            res.json({message: "error deleting this animal", error: err})
        } else {
            console.log("successfully deleted that animal");
            res.json({message: "successfully deleted that animal"})
        }
    })
})

app.put('/animal/:id', function(req, res) {
    console.log("in animal/" + req.params.id + " PUT route");

    Animal.findOne({_id: req.params.id}, function(err, animal) {
        if (err) {
            console.log("error finding that animal");
            res.json({message: "error finding that animal", error: err})
        } else {
            console.log("successfully found that animal");
            console.log("req.body is: ", req.body);

            animal.pet_name = req.body.pet_name;
            animal.pet_type = req.body.pet_type;
            animal.pet_description = req.body.pet_description;
            animal.pet_skill_1 = req.body.pet_skill_1;
            animal.pet_skill_2 = req.body.pet_skill_2;
            animal.pet_skill_3 = req.body.pet_skill_3;

            animal.save(function(err) {
                if (err) {
                    console.log("error saving that animal");
                    res.json({message: "error saving that animal", error: err})
                } else {
                    console.log("successfully saved that animal!");
                    res.json({message: "successfully saved that animal!", data: animal})
                }
            })
        }
    })
})

app.patch('/animal/:id', function(req, res) {
    console.log("in /animal/" + req.params.id + " PATCH route")

    console.log("req.params.id is: ", req.params.id )
    console.log("req.body is: ", req.body)

    Animal.findOne({_id: req.params.id}, function(err, data) {
        if (err) {
            console.log("error is: ", err)
            res.json({message: "error finding", error: err})
        } else {
            console.log("data is: ", data)
            console.log("data['likes'] before", data['likes'])
            data['likes']++
            console.log("data['likes'] after", data['likes'])

            data.save(function(err) {
                if (err) {
                    console.log("error saving that animal");
                    res.json({message: "error saving that quote", error: err})
                } else {
                    console.log("successfully saved that animal!");
                    res.json({message: "yay i guess", data: data})
                }
            })
        }
    })
})

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./angularTask1/dist/index.html"));
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})