var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var Message = mongoose.model('Message')

router.get('/:key', function (req, res, next) {
  Message.findOne({ key: req.params.key }).then(function (message) {
    if (!message) res.status(404).json({ error: 'Message Not Found' })

    res.status(200).json({
      key: message.key,
      body: message.body,
      created_at: message.createdAt
    })
  }).catch(next)
})

router.post('/', function (req, res, next) {
  console.log(req.params.body)
  if (!req.params.body) res.status(403).json({ error: 'Body Cannot Be Empty' })

  var newMessage = new Message({ body: req.body.body })
  newMessage.generateKey()
  newMessage.save().then(function (message) {
    res.status(201).json({
      key: message.key,
      body: message.body,
      created_at: message.createdAt
    })
  }).catch(next)
})

router.delete('/:key', function (req, res, next) {
  Message.deleteOne({ key: req.params.key }).then(function () {
    res.sendStatus(204)
  }).catch(next)
})

module.exports = router
