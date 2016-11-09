var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var localStrategy = require('passport-local').Strategy;

//route and model requires
var index = require('./routes/index');
var User = require('./models/user');
var register = require('./routes/register');
var login = require('./routes/login');

var app = express();

//configs
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(session({
  secret: 'honey',
  key: 'user',
  resave: true,
  saveUninitialized: false,
  cookie: {maxAge: 30 * 60 * 1000, secure: false}
}));
app.use(passort.initialize());
app.use(passport.session());

//routes
app.use('/', index);
app.use('/login', login);
app.use('/register', register);

app.use('/api', function(request, response){
  if(request.isAuthenticated()){
    next();
  }
  else{
    response.sendStatus(403);
  }
});

//passport
passport.use('local', new localStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, function(username, password, done){
  User.findAndComparePassword(username, password, function(err, isMatch, user){
    if(err){
      return done(err);
    }

    if(isMatch){
      return done(null, user);
    }
    else{
      done(null, false);
    }
  });
}));

passport.serializeUser(function(user, done){
  done(null, user.id);
});

passport.deserializeUser(function(id, done){
  User.findById(id, function(err, user){
    if(err){
      return done(err);
    }
    else{
      done(null, user);
    }
  });
});

app.use('/*', function(request, response, next){
  response.sendFile(path.join(__dirname, '..public/views/index.html'));
});

var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('Listening on port ', port);
  console.log('Press ctrl + c to quit');
});
