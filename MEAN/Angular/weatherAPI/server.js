let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();

mongoose.connect('mongodb://localhost/basic_mongoose');

let TasksSchema = new mongoose.Schema({
    title: {type: String, default: ""},
    description: {type: String, default: ""},
    completed: {type: Boolean, default: false},
    created_at: {type: Date, default: Date.now()},
    updated_at: {type: Date, default: Date.now()}
})

mongoose.model('Task', TasksSchema);
let Task = mongoose.model('Task');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use(express.static(__dirname + '/angular/dist'));

// app.get('/', function(req, res) {
//     console.log('in / GET route');
//     console.log('redirecting to /tasks GET route');
//     res.redirect('/tasks')
// })

// app.get('/tasks', function(req, res) {
//     console.log('in /tasks GET route');

//     Task.find({}, function(err, all_tasks) {
//         if (err) {
//             console.log('error finding all tasks');
//             res.json({error: err})
//         } else {
//             console.log('successfully found all tasks');
//             res.json({tasks: all_tasks})
//         }
//     })
// });

// app.get('/tasks/:id', function(req, res) {
//     console.log('in /tasks/' + req.params.id + ' GET route');

//     Task.find({_id: req.params.id}, function(err, task) {
//         if (err) {
//             console.log('error searching for this task');
//             res.json({error: err});
//         } else {
//             console.log('successfully searched for this task where id is: ', req.params.id);
//             res.json({task: task});
//         }
//     })
// })

// app.get('/', function(req, res) {
//     console.log('in / GET route');
//     res.json({message: "success"})
// });


app.listen(8000, function() {
    console.log("listening on port 8000");
})