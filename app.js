var express = require('express')
var mongoose = require('mongoose')
var morgan = require('morgan')
var cors = require('cors')
var bodyParser = require('body-parser')
var errorhandler = require('errorhandler')
var app = express()

var isProduction = process.env.NODE_ENV === 'production'

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('tiny'))

if (!isProduction) {
  app.use(errorhandler())
}

if (!isProduction) {
  mongoose.connect('mongodb://localhost/messagehub')
  mongoose.set('debug', true)
} else {
  mongoose.connect('mongodb://production:production@ds119223.mlab.com:19223/messagehub')
}

require('./models/Message')
app.use('/', require('./routes'))

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log('here')
  var err = new Error('Route Not Found')
  err.status = 404
  next(err)
})

/// error handlers

if (!isProduction) {
  // development error handler
  app.use(function(err, req, res, next) {
    console.log(err.stack)
    res.status(err.status || 500)
    res.json({ error: err.message })
  })
} else {
  // production error handler
  app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.json({ error: err.message })
  })
}


// finally, let's start our server...
var server = app.listen( process.env.PORT || 3000, function(){
  console.log('Listening on port ' + server.address().port)
})
