var router = require('express').Router();
var path = require('path');
var passport = require('passport');

router.get('/', function(request, response){
  response.send(request.isAuthenticated());
});

module.export = router;
