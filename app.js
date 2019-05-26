var express = require('express')
var cookieParser = require('cookie-parser')

const routes = require('./routes')

var app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// 路由
routes(app)
// 404
app.use(function(req, res, next) {
  // render the error page
  res.status(404)
  res.json({ code: 404, msg: '没有找到该接口！' })
})
// 500
app.use(function(err, req, res, next) {
  console.log('拦截到的错误：', err)
  // render the error page
  res.status(res.statusCode || 500)
  res.json({ code: res.statusCode, msg: err.message })
})

module.exports = app
