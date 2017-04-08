var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var markov = require('./js/markov');
var path = require('path');
// var exphbs = require('express-handlebars');



var _ = require('underscore');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');
app.use('/public', express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/public/index.html'));
})

app.get('/api/generate', function(req, res) {
    /* For this endpoint, all you have to do is return the states, and
     * whatever information is necessary to link them to their own
     * /state/:statename endpoint. */
    markov.jsonFileSentence().then( result =>{
      res.send(result)
    })
})


markov.loadJsonFile().then(() => {
  app.listen(process.env.PORT || 3000, function() {
      console.log('App listening on port 3000!');
  });
});
