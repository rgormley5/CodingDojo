let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let path = require('path')

let app = express();

mongoose.connect('mongodb://localhost/basic_mongoose');

let TasksSchema = new mongoose.Schema({

}, {timestamps: true})

mongoose.model('Task', TasksSchema);
let Task = mongoose.model('Task');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/angularTask1/dist'));



app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./angularTask1/dist/index.html"));
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})