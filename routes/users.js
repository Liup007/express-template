var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  var a = 1 / 0
  throw new Error({ info: '报错' })

  res.json({ rsult: a })
})

module.exports = router
