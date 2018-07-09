var path = require('path');
var express = require('express');
var app = express();
var productData = require('./nike.json');


app.use(express.static(__dirname));

app.listen(3000, function () {
  console.log('Server is listening on port 3000');
})

app.get('/', function (req, res) {
  res.sendFile(path.resolve('./index.html'));
});

app.get('/products/nike', function (req, res) {
  res.send(productData);
});