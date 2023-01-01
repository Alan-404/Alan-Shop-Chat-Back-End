const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MessageSchema = new Schema({
    roomId:{
        type: Schema.Types.ObjectId,
        ref: 'rooms'
    },
    content: {
        type: String,
        required: true
    },
    sender: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('messages', MessageSchema)