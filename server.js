var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

//route and model requires
var index = require('./routes/index')

var app = express();

//configs
app.use(bodyParser.json());
app.use(express.static('public'));

//routes
app.use('/', index);

app.use('/*', function(request, response, next){
  response.sendFile(path.join(__dirname, '..public/views/index.html'));
});

var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('Listening on port ', port);
  console.log('Press ctrl + c to quit');
});
