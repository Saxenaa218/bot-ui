var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book');
  })
  .post(function (req, res) {
    // console.log(req.body);
    res.send(req.body);
  })
  .put(function (req, res) {
    res.send('Update the book')
  })

// app.route('')

// var birds = require('./birds')
// app.use('/birds', birds)

app.listen(port);
console.log('listening on ' + port);
