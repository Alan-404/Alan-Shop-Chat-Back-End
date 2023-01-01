const roomRouter = require('./entities/room')

const route = (app) => {
    app.use('/room', roomRouter)
}

module.exports = route