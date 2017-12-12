import standart from './gameboard/standart.js'
const game = (socket, io, gameInfo) => {
  let testObject = {
    totalPlayers: 2,
    moveOfPlayer: 0,
    players: [
      {name: 'Dima', id: 0, currentPostions: 0},
      {name: 'My', id: 1, currentPostions: 0}
    ]
  }
  socket.on('prepare game', users => {
    io.emit('begin game', users)
  })
  socket.on('sent static info', (fields, users, newUserName) => {
    var i
    var l
    var userNew = true
    gameInfo.fieldsLen = fields
    gameInfo.usersLen = users
    for (i = 0, l = gameInfo.usersList.length; i < l; i++) {
      if (gameInfo.usersList[i] === newUserName) {
        userNew = false
        break
      }
    }
    if (userNew) {
      gameInfo.usersList.push(newUserName)
    }

    io.emit('list of users', gameInfo.usersList)
  })
  socket.on('change tip position', moveOfPlayer => {
    let { players, totalPlayers } = testObject
    let player = players[moveOfPlayer]
    const random = Math.floor((Math.random() * 6) + 1)
    const maxId = standart.left[standart.left.length - 1].id
    player.currentPostions = player.currentPostions + random
    if (player.currentPostions > maxId) {
      player.currentPostions -= maxId + 1
    }
    moveOfPlayer++
    if (moveOfPlayer === totalPlayers) {
      moveOfPlayer = 0
    }
    io.emit('set tip position', { moveOfPlayer, players })
  })
}

module.exports = game
