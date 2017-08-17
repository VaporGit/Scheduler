//*** https://www.youtube.com/watch?v=eB9Fq9I5ocs ****/

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to MLAB.com - Use mongoose as stepping stone (using MongoClient) to connect to MLAB.com
mongoose.connect('mongodb://<vapor>:<Fender10!>@ds031965.mlab.com:31965/framedb', {
    useMongoClient: true
});
var db = mongoose.connection;

//"Route" for homepage
    // This is a http GET request for whatever URI (URL is a category of URI) in the parenthesis
    // "/" is the homepage
    // when someone visits home page, we run this function
app.get('/', function(request, response){
    response.send('Hello');
});

var port = 31965;

//This is where you're telling the server to run
app.listen(port);
console.log('running on port ' +port);