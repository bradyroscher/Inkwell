const { Shop, Artist } = require('../models')

const AddShop = async (req, res) => {
  try {
    const shop = await Shop.create(req.body)
    res.send(shop)
  } catch (error) {
    throw error
  }
}

const GetShops = async (req, res) => {
  try {
    const shops = await Shop.findAll({ include: [Artist] })
    res.send(shops)
  } catch (error) {
    throw error
  }
}

const DeleteShop = async (req, res) => {
  try {
    id = parseInt(req.params.id)
    await Shop.destroy({
      where: { id: id },
      returning: true
    })
    res.send({ message: 'Deleted' })
  } catch (error) {
    throw error
  }
}

const GetShopWithArtists = async (req, res) => {
  try {
    const shop = await Shop.findByPk(req.params.id)
    const artists = await Artist.findAll({
      where: { shop_id: req.params.id },
      returning: true
    })
    res.send({ shop, artists: artists })
  } catch (error) {
    throw error
  }
}

module.exports = {
  AddShop,
  GetShops,
  GetShopWithArtists,
  DeleteShop
}
