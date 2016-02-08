
var express = require('express'),
    rp      = require('request-promise');

var app = express();

app.get('/', function(req, res) {
  if (!req.query.callback) return res.send('Missing `callback` parameter');
  if (!req.query.url)      return res.send('Missing `url` parameter');

  var options = {
    url: req.query.url
  }
  if (req.query.data) options.qs = JSON.parse(req.query.data);
 
  rp(options)
    .then(function (results) {
      res.send(req.query.callback + '(' + JSON.stringify(results) + ')');
    })
    .catch(function () {
      // Just drop errors
    });
});

app.listen(process.env.PORT || 5000, function () {
  console.log('Listening on port', process.env.PORT || 5000);
});
