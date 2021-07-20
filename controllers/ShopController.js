const { Shop, Artist, Review, User } = require('../models')
const { Op } = require('sequelize')

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
    const shops = await Shop.findAll({
      include: [{ model: Artist, include: [User] }]
    })
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
    const shop = await Shop.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Artist,
          include: [User, Review]
        }
      ]
    })
    res.send(shop)
  } catch (error) {
    throw error
  }
}

const QueryAllShops = async (req, res) => {
  let query = req.params.query
  let compstring = `%${query}%`
  const results = await Shop.findAll({
    where: {
      [Op.or]: [
        { name: { [Op.iLike]: compstring } },
        { address: { [Op.iLike]: compstring } }
      ]
    }
  })
  res.send(results)
}

module.exports = {
  AddShop,
  GetShops,
  GetShopWithArtists,
  DeleteShop,
  QueryAllShops
}
