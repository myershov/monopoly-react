import express from 'express'
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = 8080

require('./app/autorization.js').init(app, io)

app.use(express.static(__dirname))

let gameInfo = {
  fieldsLen: '',
  usersLen: '',
  usersList: [],
  listOfGames: []
}
io.on('connection', socket => {
  require('./app/chat.js').init(socket, io)
  require('./app/game.js').init(socket, io, gameInfo)
  require('./app/createGame.js').init(socket, io, gameInfo)
  require('./app/getGameList.js').init(socket, io, gameInfo)
})
require('./app/gameboard/gameboard.js').init(app)
console.log('Running')
http.listen(port)
