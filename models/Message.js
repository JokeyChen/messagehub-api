var mongoose = require('mongoose')
var chance = require('chance').Chance()

var MessageSchema = new mongoose.Schema({
  key: String,
  body: String
})

MessageSchema.methods.generateKey = function () {
  // generate a random four syllable key
  this.key = chance.syllable() + '-' + chance.syllable() + '-' + chance.syllable() + '-' + chance.syllable()
}

mongoose.model('Message', MessageSchema)
