module.exports = {
  port: 3000,
  session: {
    secret: 'express-template',
    key: 'express-template',
    maxAge: 12
  },
  mongodb: 'mongodb://localhost:27017/',
  db: 'express-template'
}
