// 清除内容为null或者undefined参数
exports.clearNull = function(qry) {
  for (let item in qry) {
    if (qry[item] == null || qry[item] == undefined || qry[item] == '') {
      delete qry[item]
    }
  }
  return qry
}
