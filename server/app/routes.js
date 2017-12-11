import gameboard from './gameboard/gameboard.js'
import autorization from './autorization.js'
import bodyParser from 'body-parser'

module.exports = app => {
  app.use(bodyParser.json())
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
  })
  gameboard(app)
  autorization(app)
}
