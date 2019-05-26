const express = require('express')
const router = express.Router()
const mongo = require('../lib/mongo')
const joi = require('@hapi/joi')
const validate = require('../lib/validate')

/* 用户注册 */
let condition = {
  userName: joi.string().required(),
  tel: joi.number().required()
}
router.get('/register', validate(condition), async function(req, res, next) {
  try {
    let query = req.query
    let params = { userName: query.userName, tel: query.tel }
    let result = await mongo.insertOne('users', params)
    res.json(result)
  } catch (e) {
    res.status(500)
    next(new Error(e))
  }
})
module.exports = router
