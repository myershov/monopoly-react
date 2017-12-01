var exports = module.exports = {};

exports.init = function(socket, io) {
    socket.broadcast.emit('user connected');
    socket.on('chat message', function(msg, user){
        io.emit('chat message', msg, user);
    });
    socket.on('disconnect', function(){
        io.emit('user disconnect');
    });
};
