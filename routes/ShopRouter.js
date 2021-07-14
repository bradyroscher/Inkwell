const Router = require('express').Router()
const controller = require('../controllers/ShopController')

Router.post('/', controller.AddShop)
Router.get('/', controller.GetShops)
Router.get('/:id', controller.GetShopWithArtists)
Router.delete('/:id', controller.DeleteShop)

module.exports = Router
