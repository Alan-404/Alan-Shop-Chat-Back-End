const express = require('express');
const app = express();
const route = require('./routes/route')
const http = require('http');
const server = http.Server(app);
const cors = require('cors')
const socketIO = require('socket.io');
const io = socketIO(server);
require('dotenv').config()

const port = process.env.PORT || 5000;
const messageService = require('./services/message')
const db = require('./config/database')
db.connectDB()

app.use(cors())
app.use(express.json())
route(app)

io.on('connection', (socket) => {
    socket.on('join', (data) => {
        console.log(data)
        socket.join(data.roomId);
        socket.broadcast.to(data.roomId).emit('user joined');
    })

    socket.on('message', (data) => {
        io.in(data.roomId).emit('new-message', {message: data.message, roomId: data.roomId, senderId: data.senderId})
        messageService.saveMessage(data.roomId, data.message, data.senderId)
    })

    socket.on('typing', (data) => {
        io.in(data.roomId).emit('typing', {success: true})
    })
});

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});