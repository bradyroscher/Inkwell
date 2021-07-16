const Router = require('express').Router()
const controller = require('../controllers/ArtistController')

Router.get('/', controller.GetUsers)

module.exports = Router
