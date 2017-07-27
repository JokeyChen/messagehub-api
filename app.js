var express = require('express')
var mongoose = require('mongoose')
var morgan = require('morgan')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(morgan('tiny'))

mongoose.connect('mongodb://production:production@ds119223.mlab.com:19223/messagehub')

require('./models/Message')
app.use('/', require('./routes'))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
