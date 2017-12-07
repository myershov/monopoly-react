import gameboard from './app/gameboard/gameboard.js'
import autorization from './app/autorization.js'
import socketio from 'socket.io'
import chat from './app/chat.js'
import express from 'express'
import http from 'http'

const app = express()
const server = http.Server(app)
const io = socketio(server)
const port = 8080

autorization.init(app, io)
app.use(express.static(__dirname))
// let gameInfo = {
//   fieldsLen: '',
//   usersLen: '',
//   usersList: [],
//   listOfGames: []
// }
io.on('connection', socket => {
  chat(socket, io)
  // require('./app/game.js').init(socket, io, gameInfo)
  // require('./app/createGame.js').init(socket, io, gameInfo)
  // require('./app/getGameList.js').init(socket, io, gameInfo)
})
gameboard.init(app)
console.log('Running')
server.listen(port)
