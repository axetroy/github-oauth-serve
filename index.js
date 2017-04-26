/**
 * Created by axetroy on 17-4-26.
 */
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.send('Hello World, Here are Heroku');
});

app.listen(PORT, function() {
  console.log(`Listen the port: ${PORT}`);
});
