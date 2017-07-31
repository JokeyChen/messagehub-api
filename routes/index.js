var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
  res.json({success: 'Welcome to MessageHub API'})
})

router.use('/messages', require('./messages'))

module.exports = router
