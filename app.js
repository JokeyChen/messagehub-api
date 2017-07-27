var express = require('express')
var mongoose = require('mongoose')
var morgan = require('morgan')
var bodyParser = require('body-parser')
var app = express()

// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(morgan('tiny'))

mongoose.connect('mongodb://production:production@ds119223.mlab.com:19223/messagehub')

require('./models/Message')
app.use('/', require('./routes'))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
