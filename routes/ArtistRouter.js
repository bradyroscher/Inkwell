const Router = require('express').Router()
const controller = require('../controllers/ArtistController')

Router.post('/', controller.AddArtist)
Router.get('/', controller.GetArtists)
Router.get('/:id', controller.GetUserWithArtistWithReviews)

module.exports = Router
