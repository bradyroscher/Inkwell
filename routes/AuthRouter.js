const Router = require('express').Router()
const controller = require('../controllers/AuthController')
const middleware = require('../middleware')

Router.post('/register', controller.Register)
Router.post('/login', controller.Login)
Router.get(
  '/token',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckLogin
)

module.exports = Router
