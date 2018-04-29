let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();

mongoose.connect('mongodb://localhost/basic_mongoose');

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth();
let yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd
}

if (mm < 10) {
    mm = '0' + mm
}

today = mm + '/' + dd + '/' + yyyy;
console.log("today is: ", today);

let AuthorsSchema = new mongoose.Schema({
    author_name: {type: String, minlength: 3},
    // created_at: {type: Date, default: Date.now()},
    // updated_at: {type: Date, default: Date.now()}
    created_at: {type: String, default: today},
    updated_at: {type: String, default: today}

})

mongoose.model('Author', AuthorsSchema);
let Author = mongoose.model('Author');
mongoose.Promise = global.Promise;

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
            console.log("req.params is: ", req.params);
            console.log("author is: ", author);

            console.log("req.body.author_name is: ", req.body.author_name)
            console.log("author[0].author_name is: ", author[0].author_name)

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

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./angularTask1/dist/index.html"));
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})