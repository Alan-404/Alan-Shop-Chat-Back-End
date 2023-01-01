const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RoomSchema = new Schema({
    user1: {
        type: String,
        required: true
    },
    user2: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('rooms', RoomSchema)