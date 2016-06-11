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

var dishRouter = express.Router();
// if request contains json data then it will be parsed correctly
dishRouter.use(bodyParser.json());

// set the initial routing and specify the action methods
dishRouter.route('/')
    .all(function(request, result, next){
        result.writeHead(200, {'Content-Type': 'text/plain'});
        next();
    })
    .get(function(request, result, next){
        result.end('Will send all the dishes to you!');
    })

    .post(function(request, result, next){
        result.end('Will add the dish: ' + request.body.name + ' with details: ' + request.body.description);
    })

    .delete(function(request, result, next){
        result.end('Deleting all dishes');
    })
;

// then set the routing for special ids in the uri and specify the action methods
dishRouter.route('/:dishId')
    .all(function(request, result, next) {
        result.writeHead(200, { 'Content-Type': 'text/plain' });
        next();
    })

    .get(function(request, result, next){
        result.end('Will send details of the dish: ' + request.params.dishId +' to you!');
    })

    .put(function(request, result, next){
        result.write('Updating the dish: ' + request.params.dishId + '\n');
        result.end('Will update the dish: ' + request.body.name +
        ' with details: ' + request.body.description);
    })

    .delete(function(request, result, next){
        result.end('Deleting dish: ' + request.params.dishId);
    })
;

// then specify a specific url
app.use('/dishes', dishRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
    console.log('Server running at http://'+hostname+':'+port+'/');
});