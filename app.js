var express = require('express')
var morgan = require('morgan')
var bodyParser = require('body-parser')
var app = express()

// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(morgan('tiny'))

require('./models/Message')
app.use('/', require('./routes'))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
