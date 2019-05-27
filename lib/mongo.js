const config = require('config-lite')(__dirname)
const MongoClient = require('mongodb').MongoClient
const utils = require('./utils')
// 获取数据库连接
function getDB() {
  return new Promise((resolve, reject) => {
    MongoClient.connect(config.mongodb, { useNewUrlParser: true }, function(
      err,
      conn
    ) {
      if (err) {
        console.log('连接数据库失败！')
        reject(err)
      } else {
        const dbo = conn.db(config.db)
        resolve({ dbo: dbo, conn: conn })
      }
    })
  })
}
// 插入一条数据
exports.insertOne = function(tableName, data) {
  return new Promise(async (resolve, reject) => {
    const { dbo, conn } = await getDB()
    dbo.collection(tableName).insertOne(data, function(err, res) {
      // 关闭连接
      conn.close()
      if (err) {
        reject(err)
      } else {
        let result = { code: 1, msg: '操作成功' }
        // console.log(res)
        if (res.result.ok != '1') {
          result = { code: 500, msg: '操作失败！' }
        }
        resolve(result)
      }
    })
  })
}
// 同时插入多条数据
exports.insertMany = function(tableName, data) {
  return new Promise(async (resolve, reject) => {
    const { dbo, conn } = await getDB()
    dbo.collection(tableName).insertMany(data, function(err, res) {
      // 关闭连接
      conn.close()
      if (err) {
        reject(err)
      } else {
        let result = { code: 1, msg: '操作成功' }
        console.log(res)
        if (res.result.ok != '1') {
          result = { code: 500, msg: '操作失败！' }
        }
        resolve(result)
      }
    })
  })
}
// 查询数据
exports.find = function(tableName, whereStr) {
  whereStr = utils.clearNull(whereStr)
  return new Promise(async (resolve, reject) => {
    const { dbo, conn } = await getDB()
    dbo
      .collection(tableName)
      .find(whereStr)
      .toArray(function(err, res) {
        // 关闭连接
        conn.close()
        if (err) {
          reject(err)
        } else {
          let result = { result: 1, msg: '获取成功', data: res }
          resolve(result)
        }
      })
  })
}
// 删除一条数据
exports.deleteOne = function(tableName, data) {
  return new Promise(async (resolve, reject) => {
    const { dbo, conn } = await getDB()
    dbo.collection(tableName).insertMany(data, function(err, res) {
      // 关闭连接
      conn.close()
      if (err) {
        reject(err)
      } else {
        let result = { code: 1, msg: '操作成功' }
        console.log(res)
        if (res.result.ok != '1') {
          result = { code: 500, msg: '操作失败！' }
        }
        resolve(result)
      }
    })
  })
}
