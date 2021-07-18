const Router = require('express').Router()
const controller = require('../controllers/ArtistController')

Router.get('/', controller.GetUsers)
Router.put('/:id', controller.UpdateUser)

module.exports = Router
