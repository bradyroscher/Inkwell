const Router = require('express').Router()
const controller = require('../controllers/ArtistUserController')

Router.post('/', controller.AddArtist)
Router.get('/', controller.GetArtists)
Router.get('/:id', controller.GetUserWithArtist)

module.exports = Router
