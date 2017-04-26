/**
 * Created by axetroy on 17-4-26.
 */
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World, Here are Heroku');
});

app.listen(80, function() {
  console.log('Listen the port: 80');
});
