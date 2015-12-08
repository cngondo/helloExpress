var express = require('express');
var app = express(); //The express app after the dependency declaration in the node modules

// set the templating engine
app.set('view engine', 'ejs');
// Specify the specific folder
// app.set('views', __dirname + '/views');
// Get action from the route. So once the route is invoked, pass on the anonymous
// that takes in a request and gives back a response
app.get('/', function(req, res){
  // Passing a js object and vasriable
  res.render('default', {
    title: 'Home',
    classname: 'home',
    users: ['corn', 'dolly', 'mercy', 'pete']
  });
});
//routing to me
app.get('/about', function(req, res){
  res.render('default', {
    title: 'About Us',
    classname: 'about'
  });
});
// Passing parameters by name, to the route.
app.get('/who/:name?', function(req, res){
  var name = req.params.name;
  res.send(name + ' was here!!');
});

app.get('/who/:name?/:title?', function(req, res){
  var name = req.params.name;
  var title = req.params.title;
  res.send('<p>name: ' + name + '<br /> title: ' + title + '</p>');
});

// Incase you get any other route
app.get('*', function(req, res){
  res.send('Bad route! Check spelling!!');
});

// Listen on port 3000
var server = app.listen(3000, function(){
  console.log('listening on port 3000');
});
