const Joi = require('@hapi/joi')
// 参数校验中间件
module.exports = function(opt) {
  return function(req, res, next) {
    let params = req.query
    if (req.method == 'POST') {
      params = req.params
    }
    let valid = Joi.validate(params, opt)
    console.log(valid.error)
    if (valid.error != null) {
      let errArr = valid.error.details.map(item => {
        return item.message
      })
      res.status(412)
      next(new Error(errArr))
    } else {
      next()
    }
  }
}
