var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// Define a route to render the home.pug template
router.get('/home', (req, res) => {
 
  res.render('home', {
   hello : 'Welcome to home page',
  })
});

module.exports = router;
