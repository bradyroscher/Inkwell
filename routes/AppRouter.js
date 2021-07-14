const Router = require('express').Router()

const AuthRouter = require('./AuthRouter')
const UserRouter = require('./UserRouter')
const ArtistRouter = require('./ArtistRouter')
const PostRouter = require('./PostRouter')
const ReviewRouter = require('./ReviewRouter')
const ShopRouter = require('./ShopRouter')

Router.use('/auth', AuthRouter)
Router.use('/user', UserRouter)
Router.use('/artist', ArtistRouter)
Router.use('/post', PostRouter)
Router.use('/review', ReviewRouter)
Router.use('/shop', ShopRouter)

module.exports = Router
