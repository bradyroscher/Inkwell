const Router = require('express').Router()
const controller = require('../controllers/ShopController')

Router.post('/', controller.AddShop)
Router.get('/', controller.GetShops)
Router.get('/search/:query', controller.QueryAllShops)
Router.get('/all/:id', controller.GetShopWithArtists)
Router.delete('/delete/:id', controller.DeleteShop)

module.exports = Router
