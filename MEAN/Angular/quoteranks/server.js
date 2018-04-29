
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');

let app = express();

mongoose.connect('mongodb://localhost/basic_mongoose');

let AuthorsSchema = new mongoose.Schema({
    author_name: {type: String, required: true, minlength: 3 },
    quoteArr: [{
        quote: {type: String, require: true, minlength: 3, default: ""},
        rank: {type: Number, default: 0}
    }]
}, {timestamps: true});

mongoose.model('Author', AuthorsSchema);
let Author = mongoose.model('Author');
mongoose.Promise = global.Promise;
AuthorsSchema.plugin(uniqueValidator);

app.use(bodyParser.json());
app.use(express.static(__dirname + '/angularTask1/dist'));

app.get('/authors', function(req, res) {
    console.log('in /authors GET route');
    // Author.find({}, function(err, all_authors) {
    //     if (err) {
    //         console.log('error finding all authors');
    //         res.json({error: err})
    //     } else {
    //         console.log('successfully found all authors');
    //         res.json({authors: all_authors})
    //     }
    // })

        Author.find({}, null, {sort: {author_name: 1}}, function(err, all_authors) {
        if (err) {
            console.log('error finding all authors');
            res.json({error: err})
        } else {
            console.log('successfully found all authors');
            res.json({authors: all_authors})
        }
    })
})

app.post('/authors', function(req, res) {
    console.log('in /authors POST route');
    console.log('POST DATA is: ', req.body);

    let newAuthor = new Author(req.body);
    newAuthor.save(function(err) {
        if (err) {
            console.log('error saving new Author');
            console.log('error is: ', err)
            res.json({error: err});
        } else {
            console.log('successfully added new Author');
            console.log('new Author is: ', newAuthor);
            res.json({message: "successfully created new Author!"})
        }
    })
})

app.delete('/authors/:id', function(req, res) {
    console.log("in /authors/" + req.params.id + " DELETE route");

    Author.remove({_id: req.params.id}, function(err) {
        if (err) {
            console.log("error deleting this author: ", err);
            res.json({message: "error deleting this author", error: err})
        } else {
            console.log("successfully deleted that user");
            res.json({message: "successfully deleted that user"})
        }
    })
})

app.put('/authors/:id', function(req, res) {
    console.log("in authors/" + req.params.id + " PUT route");

    Author.find({_id: req.params.id}, function(err, author) {
        if (err) {
            console.log("error finding that author");
            res.json({message: "error finding that author", error: err})
        } else {
            console.log("successfully found that author");
            console.log("req.body is: ", req.body);

            author[0].author_name = req.body.author_name

            author[0].save(function(err) {
                if (err) {
                    console.log("error saving that author");
                    res.json({message: "error saving that author", error: err})
                } else {
                    console.log("successfully saved that user!");
                    res.json({message: "successfully saved that user!", data: author})
                }
            })
        }
    })
})

app.get('/authors/:id', function(req, res) {
    console.log("in /authors/" + req.params.id + " GET route");
    
    Author.find({_id: req.params.id}, function(err, author) {
        if (err) {
            console.log("error getting this author")
            console.log("err is: ", err)
            res.json({message: "We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?", error: err})
        } else {
            console.log("successfully found this author");
            res.json({message: "successfully found this author", data: author})
        }
    })
})

app.patch('/authors/:id', function(req, res) {
    console.log("in /authors/" + req.params.id + ' PATCH route')
    console.log("POST DATA is: ", req.body)

    let object = {quote: req.body['quote']}

    Author.findOne({_id: req.params.id}, function(err, data) {
        if (err) {
            console.log("error is: ", err)
            res.json({message: "error o wateva", error: err})
        } else {
            console.log("successfully found author")
            
            data['quoteArr'].push(object)
            console.log("data['quoteArr'] after is: ", data['quoteArr'])

            data.save(function(err) {
                if (err) {
                    console.log("error saving that quote");
                    res.json({message: "error saving that quote", error: err})
                } else {
                    console.log("successfully saved that quote!");
                    res.json({message: "successfully saved that quote!", data: data})
                }
            })
        }
    })
})

app.patch('/authors/deletequote/:id', function(req, res) {
    console.log("in /authors/deletequote/" + req.params.id + " PATCH route");
    console.log("req.params is: ", req.params)
    console.log("req.body is: ", req.body)
    let x = "";

    Author.findOne({_id: req.body['authorID']}, function(err, data) {
        if (err) {
            console.log("error is: ", err)
            res.json({message: "error o wateva", error: err})
        } else {
            console.log("successfully found author")
            console.log("data is: ", data)
            console.log("looping: ", data['quoteArr'])

            for (let i = 0; i < data['quoteArr'].length; i++) {
                console.log("i is: ", i)
                if (data['quoteArr'][i]['_id'] == req.body['quoteID'] ) {
                    x = data['quoteArr'].pop(data['quoteArr'][i]['_id'], 1)
                    console.log("x is: ", x)
                }
            }

            data.save(function(err) {
                if (err) {
                    console.log("error saving that quote");
                    res.json({message: "error saving after deleting that quote", error: err})
                } else {
                    console.log("successfully saved that quote!");
                    res.json({message: "successfully saved after deleting that quote!", data: data})
                }
            })
        }
    })
})

app.patch('/authors/updatequote/:id', function(req, res) {
    console.log("in /authors/updatequote/" + req.params.id + " PATCH route")

    console.log("req.params.id is: ", req.params.id )
    console.log("req.body is: ", req.body)

    Author.findOne({_id: req.body['authorID']}, function(err, data) {
        if (err) {
            console.log("error is: ", err)
            res.json({message: "error finding", error: err})
        } else {
            let y = 0
            for (let i = 0; i < data['quoteArr'].length; i++) {
                console.log("i is: ", i)
                if (data['quoteArr'][i]['_id'] == req.body['quoteID'] ) {
                    console.log("data['quoteArr'][i]['rank'] BEFORE is: ", data['quoteArr'][i]['rank']);
                    y = data['quoteArr'][i]['rank']++
                    console.log("newRank AFTER is: ", data['quoteArr'][i]['rank']);
                    console.log("y is: ", y)
                    // Send back the new rank

                    data.save(function(err) {
                        if (err) {
                            console.log("error saving that quote");
                            res.json({message: "error saving after deleting that quote", error: err})
                        } else {
                            console.log("successfully saved that quote!");
                            res.json({message: "yay i guess", newRank: data['quoteArr'][i]['rank']})
                        }
                    })
                }
            }
        }
    })
})

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./angularTask1/dist/index.html"));
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})