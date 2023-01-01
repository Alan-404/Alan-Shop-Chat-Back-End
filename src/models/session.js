const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SessionSchema = new Schema({
    roomId: {
        type: Schema.Types.ObjectId,
        ref: "rooms"
    },
    createdAt: {
        type: Date
    }
})

module.exports = mongoose.model('sessions', SessionSchema)