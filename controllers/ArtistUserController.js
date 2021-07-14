const { User, Artist } = require('../models')

const AddUser = async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.send(user)
  } catch (error) {
    throw error
  }
}

const AddArtist = async (req, res) => {
  try {
    const artist = await Artist.create(req.body)
    res.send(artist)
  } catch (error) {
    throw error
  }
}

const GetUsers = async (req, res) => {
  try {
    let userlist = await User.findAll()
    res.send(userlist)
  } catch (error) {
    throw error
  }
}

const GetArtists = async (req, res) => {
  try {
    const shops = await Artist.findAll()
    res.send(shops)
  } catch (error) {
    throw error
  }
}

const GetUserWithArtist = async (req, res) => {
  try {
    let userID = parseInt(req.params.id)
    console.log(userID)
    let user = await User.findByPk(userID)
    let artist = await Artist.findAll({
      where: { user_id: userID },
      returning: true
    })
    res.send({ ...user, artist: artist })
  } catch (error) {
    throw error
  }
}

module.exports = {
  AddUser,
  GetUsers,
  AddArtist,
  GetUserWithArtist,
  GetArtists
}
