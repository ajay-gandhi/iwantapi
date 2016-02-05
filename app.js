
var express = require('express');

var app = express();

// app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.send('This works!');
});

app.listen(process.env.PORT || 5000, function() {
  console.log('Listening on port', process.env.PORT || 5000);
});
