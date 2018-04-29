var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){
    console.log('client request URL: ', request.url);
    if(request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cats') {
        fs.readFile('./views/cats.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cars/new') {
        fs.readFile('./views/newcar.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/woodie1.jpg') {
        fs.readFile('./images/woodie1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/woody2.jpg') {
        fs.readFile('./images/woody2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/woodie3.jpg') {
        fs.readFile('./images/woodie3.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/kitten1.jpg') {
        fs.readFile('./images/kitten1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/kitten2.jpg') {
        fs.readFile('./images/kitten2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/kitten3.jpg') {
        fs.readFile('./images/kitten3.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/stylesheets/style.css') {
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/stylesheets/style_cars.css') {
        fs.readFile('./stylesheets/style_cars.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else {
        response.end('File not found!!!  tomato');
    }
});
server.listen(7077);
console.log("Running in the localhost at port 7077");