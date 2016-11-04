var router = require('express').Router();
var passport = require('passport');
var path = require('path');
var Users = require('../models/user');

router.get('/', funciton(request, resposne){
  response.sendFile(path.join(__dirname, '../public/views/register.html'));
});

router.post('/', funciton(request, response){

  Users.create(request.body.username, request.body.password, function(err, post){
    if(err){
      console.log('error creating user', err);
      next(err);
    }
    else {
    console.log('redirecting to splash page');
    response.reirect('/');
    }
  });
});

module.exports = router;
