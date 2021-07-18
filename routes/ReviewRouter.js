const Router = require('express').Router()
const controller = require('../controllers/ReviewController')

Router.get('/', controller.GetReviews)
Router.post('/', controller.PostReview)

module.exports = Router
