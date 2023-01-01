const express = require('express')
const router = express.Router()
const roomController = require('../../controllers/room')

router.post('/enter', roomController.getRoom)

module.exports = router