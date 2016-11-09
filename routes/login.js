var router = require('express').Router();
var path = require('path');
var passport = require('passport');

router.get('/', function(request, response){
  response.send(request.isAuthenticated());
});

//post method to the server db
router.post('/', passport.authenticate('local'), function(request, resposne){
  var sendData = {};

  sendData.username = request.user.username;
  sendData.id = request.user.id;
  response.send(sendData);
});

module.export = router;
