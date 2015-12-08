var express = require('express');
var app = express(); //The express app after the dependency declaration in the node modules
var routes = require('./routes');
// set the templating engine
app.set('view engine', 'ejs');

//Passing params to the views
app.locals.pagetitle = "First Website";
// Specify the specific folder
// app.set('views', __dirname + '/views');

app.get('/', routes.index);
app.get('/about', routes.about);

// Incase you get any other route
app.get('*', function(req, res){
  res.send('Bad route! Check spelling!!');
});

// Listen on port 3000
var server = app.listen(3000, function(){
  console.log('listening on port 3000');
});
