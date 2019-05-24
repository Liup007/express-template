var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/aaa', function(req, res, next) {
  res.json({ rsult: '调用到了。。。' })
})
module.exports = router
