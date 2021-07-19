const Router = require('express').Router()
const controller = require('../controllers/PostController')

Router.post('/', controller.PostPost)
Router.get('/all', controller.GetAllPosts)
Router.get('/americanTraditional', controller.GetAmericanTraditionalPosts)
Router.get('/type/:type', controller.GetNeoTraditionalPosts)
module.exports = Router
