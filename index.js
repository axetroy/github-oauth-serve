/**
 * Created by axetroy on 17-4-26.
 */
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.get('/', function(req, res) {
  res.send('Hello World.');
});

app.get('/oauth', function(req, res) {
  const code = req.query.code;
  axios
    .post(
      'https://github.com/login/oauth/access_token',
      {
        code,
        client_id: 'b8257841dd7ca5eef2aa',
        client_secret: '4da33dd6fcb0a01d395945ad18613ecf9c12079e'
      },
      {
        responseType: 'json',
        headers: {
          Accept: 'application/json'
        }
      }
    )
    .then(function(response) {
      res.status(200).json(response.data);
    })
    .catch(function(err) {
      res.status(400).json({ err: err + '' });
    });
});

app.listen(PORT, function() {
  console.log(`Listen the port: ${PORT}`);
});
