const Router = require('express').Router()
const controller = require('../controllers/ReviewController')

Router.post('/', controller.PostReview)

module.exports = Router
