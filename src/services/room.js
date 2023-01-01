const RoomModel = require('../models/room')


class RoomService{
    async createRoom(room){
        try{
            const newRoom = new RoomModel(room)
            await newRoom.save()
            return newRoom
        }
        catch(error){
            return null
        }
    }

    async getRoomByUsers(user1, user2){
        try{
            const room1 = await RoomModel.findOne({user1, user2})
            console.log('room1')
            console.log(room1)
            if (room1){
                return room1
            }
            console.log('room2')
            const room2 = await RoomModel.findOne({user1: user2, user2: user1})
            console.log(room2)
            if (room2){
                return room2
            }
            return null
        }
        catch(error){
            return null
        }
    }
}

module.exports = new RoomService