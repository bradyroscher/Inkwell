const Router = require('express').Router()
const controller = require('../controllers/PostController')

Router.post('/', controller.PostPost)
Router.get('/all', controller.GetAllPosts)
Router.get('/style/:style', controller.GetPostsByStyle)
Router.put('/:post_id', controller.UpdatePost)
module.exports = Router
