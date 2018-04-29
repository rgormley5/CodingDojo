var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 1},
    quote: String,

}, {timestamps: true});
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote')
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: true}));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs');

app.get('/', function(req, res) {


    res.render('index');
});

app.post('/quotes', function(req, res) {
    console.log("in quotes POST route");
    console.log("POST DATA: ", req.body);

    var quote = new Quote(req.body);
    quote.save(function(err) {
        if (err) {
            console.log("something went wrong!")
        } else {
            console.log("successfully added a quote!")
            console.log(quote)
            res.redirect('/quotes');
        }
    });
});

app.get('/quotes', function(req, res) {
    console.log("in quotes GET route");

    Quote.find({}, function(err, quotes) {
        if (err) {
            console.log("something went wrong");
        } else {
            console.log("successfully added a quote")
            console.log("**** this is: ", quotes[9].createdAt)

            console.log("**** timestamp conversion: ", quotes[9].createdAt)
            res.render('quotes', {quotes: quotes});
        }
    })

});

app.listen(8000, function() {
    console.log("listening on port 8000");
})
