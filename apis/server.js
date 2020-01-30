var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
// var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// router.post('/', function(req, res) {
//   res.send(res);
// });

app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book')
  })
  .post(function (req, res) {
    // console.log(req.body);
    res.send(req.body)
  })
  .put(function (req, res) {
    res.send('Update the book')
  })

app.route('')

// router.post('/post', function (req, res) {
//   res.json({ message: 'POST request to the homepage' });
// })

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
// app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('listening on ' + port);
