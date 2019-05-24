module.exports = function(app) {
  app.use('/test', require('./users'))
  // 404 page
  app.use(function(req, res) {
    if (!res.headersSent) {
      res.status(404).render('404')
    }
  })
}
