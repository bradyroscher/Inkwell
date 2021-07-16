const Router = require('express').Router()
const controller = require('../controllers/PostController')

Router.post('/', controller.PostPost)

module.exports = Router
