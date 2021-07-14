const Router = require('express').Router()
const controller = require('../controllers/ArtistUserController')

Router.post('/', controller.AddUser)
Router.get('/', controller.GetUsers)

module.exports = Router
