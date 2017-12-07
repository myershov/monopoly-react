var exports = module.exports = {}

exports.init = function (socket, io, gameInfo) {
  socket.on('prepare game', function (users) {
    io.emit('begin game', users)
  })
  socket.on('sent static info', function (fields, users, newUserName) {
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
  socket.on('get new user place', function (currentUserPos, moveOfPlayer) {
    var randomResult = Math.floor((Math.random() * 6) + 1)
    currentUserPos += randomResult
    if (currentUserPos >= gameInfo.fieldsLen) {
      currentUserPos -= gameInfo.fieldsLen
    }
    if (++moveOfPlayer === gameInfo.usersLen) {
      moveOfPlayer = 0
    }
    io.emit('get new user place', { currentUserPos: currentUserPos, moveOfPlayer: moveOfPlayer })
  })
}
