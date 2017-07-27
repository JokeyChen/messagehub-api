var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var Message = mongoose.model('Message')


router.post('/', function (req, res) {
  var newMessage = new Message()
  newMessage.generateKey()
  newMessage.body = req.body.body
  console.log(newMessage.createdAt)

  newMessage.save(function (err, message) {
    if (err) return console.error(err)
    res.status(201).json({
      key: message.key,
      body: message.body,
      created_at: message.createdAt
    })
  })
})

router.get('/:key', function (req, res) {
  Message.findOne({ key: req.params.key }, function (err, message) {
    if (err) res.status(404).json({ error: 'Message Not Found' })
    res.status(200).json({
      key: message.key,
      body: message.body,
      created_at: message.createdAt
    })
  })
})

router.delete('/:key', function (req, res) {
  console.log(req.params.key)
  Message.deleteOne({ key: req.params.key }, function (err) {
    if (err) res.status(404).json({ error: 'Message Not Found' })
    res.sendStatus(204)
  })
})

module.exports = router
