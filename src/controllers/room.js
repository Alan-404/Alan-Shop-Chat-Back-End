const roomService = require('../services/room')

class RoomController{
    async getRoom(req, res){
        try{
            const {user1, user2} = req.body
            console.log(req.body)
            const room = await roomService.getRoomByUsers(user1, user2)
            if (room != null){
                return res.status(200).json({success: true, message: "Connected user", room})
            }
            const newRoom = await roomService.createRoom(req.body)
            if (newRoom == null){
                return res.status(400).json({success: false, message: "Failed to Connect User"})
            }
            return res.status(200).json({success: true, message: "Connected User", room: newRoom})
        }
        catch(error){
            return res.status(500).json({success: false, message: "Internal Error Server"})
        }
    }


}

module.exports = new RoomController