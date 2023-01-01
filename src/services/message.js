const MessageModel = require('../models/message')

class MessageService{
    async saveMessage(roomId, content, sender){
        try{
            const message = new MessageModel({roomId, content, sender, time: Date.now(), status: true})
            await message.save()
            return true
        }
        catch(error){
            return false
        }
    }
}

module.exports = new MessageService