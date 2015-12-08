// Get action from the route. So once the route is invoked, pass on the anonymous
// that takes in a request and gives back a response
exports.index = function(req, res){
  // Passing a js object and vasriable
  res.render('default', {
    title: 'Home',
    classname: 'home',
    users: ['corn', 'dolly', 'mercy', 'pete']
  });
}
//routing to me
exports.about = function(req, res){
  res.render('default', {
    title: 'About Us',
    classname: 'about'
  });
}
