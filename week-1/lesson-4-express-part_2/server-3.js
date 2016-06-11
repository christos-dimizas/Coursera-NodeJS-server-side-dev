/**
 * Created by christos on 11/6/2016.
 */
var express = require('express');
var morgan = require('morgan');

// body parser helps to parse data that comes into request body
// and convert it into javascript objects
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

// specify what to do when receive requests
// ALL
app.all('/dishes', function(request, result, next){
    result.writeHead(200, {'Content-Type': 'text/plain'});
    next();
});

// then handle all action methods

// GET
app.get('/dishes', function(request, result, next){
    result.end("Will send all dishes to you !");
});

// POST
app.post('/dishes', function(request, result, next){
    result.end('Will add the dish:' + request.body.name + ' with details: ' + request.body.description);
});

// DELETE
app.delete('/dishes', function(request, result, next){
    result.end('Deleting all dishes');
});

// GET an object
app.get('/dishes/:dishId', function(request, result, next){
    result.end('Will send details of the dish: ' + request.params.dishId +' to you!');
});

// PUT an object
app.put('/dishes/:dishId', function(request, result, next){
    result.write('Updating the dish: ' + request.params.dishId + '\n');
    result.end('Will update the dish: ' + request.body.name +
    ' with details: ' + request.body.description);
});

// DELETE an object
app.delete('/dishes/:dishId', function(request, result, next){
    result.end('Deleting dish: ' + request.params.dishId);
});

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname,function(){
    console.log('Server running at http://' + hostname + ':' + port + '/');
});