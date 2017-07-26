var mongoose = require('mongoose')

var MessageSchema = new mongoose.Schema({
  key: String,
  body: String
})

mongoose.model('Message', MessageSchema)
