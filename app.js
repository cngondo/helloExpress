var express = require('express');
var app = express(); //The express app after the dependency declaration in the node modules

// Get action from the route. So once the route is invoked, pass on the anonymous
// that takes in a request and gives back a response
app.get('/', function(req, res){
  res.send('<h1>Hello</h1> Express!!');
});

app.get('/me', function(req, res){
  res.send('@cngondo');
});

// Listen on port 3000
var server = app.listen(3000, function(){
  console.log('listening on port 3000');
});
