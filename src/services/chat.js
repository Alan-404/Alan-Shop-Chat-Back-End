

const runChatServer = (io) =>{
    io.on('connection', (socket) => {
        socket.on('join', (data) => {
            console.log(data)
            socket.join(data.roomId);
            socket.broadcast.to(data.roomId).emit('user joined');
        })
    
        socket.on('message', (data) => {
            console.log(data)
            io.in(data.roomId).emit('new-message', {message: data.message, roomId: data.roomId, senderId: data.senderId})
        })
    });
}

module.exports = runChatServer