import standart from './gameboard/standart.js'
const game = (socket, io) => {
  let testObject = {
    totalPlayers: 2,
    moveOfPlayer: 0,
    players: [
      {name: 'Dima', id: 0, currentPostions: 0, gold: 200000},
      {name: 'My', id: 1, currentPostions: 0, gold: 200000}
    ]
  }
  socket.on('prepare game', users => {
    io.emit('begin game', users)
  })
  socket.on('get players info', () => {
    io.emit('set players info', testObject)
  })
  socket.on('change tip position', () => {
    let { players, totalPlayers } = testObject
    let player = players[testObject.moveOfPlayer]
    const random = Math.floor((Math.random() * 6) + 1)
    const maxId = standart.left[standart.left.length - 1].id
    player.currentPostions = player.currentPostions + random
    if (player.currentPostions > maxId) {
      player.currentPostions -= maxId + 1
      player.gold += 2000
    }
    testObject.moveOfPlayer++
    if (testObject.moveOfPlayer === totalPlayers) {
      testObject.moveOfPlayer = 0
    }
    io.emit('set tip position', testObject)
  })
}

module.exports = game
