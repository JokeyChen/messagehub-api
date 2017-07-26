var express = require('express')
var router = express.Router()

router.post('/', function (req, res) {
  console.log(req.body.body)
  var key = 'one-why-try-mind'
  var body = 'This is my secret. Don\'t tell anyone else.'
  var time = '2015-08-05T08:40:51.620Z'
  res.status(201).json({
    key: key,
    body: body,
    created_at: time
  })
})

router.get('/:key', function (req, res) {
  console.log(req.params.key)
  if (req.params.key === 'one-why-try-mind') {
    var key = 'one-why-try-mind'
    var body = 'This is my secret. Don\'t tell anyone else.'
    var time = '2015-08-05T08:40:51.620Z'
    res.status(200).json({
      key: key,
      body: body,
      created_at: time
    })
  } else {
    res.status(404).json({
      error: 'Message Not Found'
    })
  }
})

router.delete('/:key', function (req, res) {
  console.log(req.params.key)
  if (req.params.key === 'one-why-try-mind') {
    res.sendStatus(204)
  } else {
    res.status(404).json({
      error: 'Message Not Found'
    })
  }
})

module.exports = router
