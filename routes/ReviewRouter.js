const Router = require('express').Router()
const controller = require('../controllers/ReviewController')

Router.get('/', controller.GetReviews)
Router.post('/', controller.PostReview)
Router.put('/:id', controller.UpdateReview)
Router.delete('/:id', controller.DeleteReview)

module.exports = Router
