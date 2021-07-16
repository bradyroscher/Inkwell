const { User, Artist, Review, Post } = require('../models')

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

const GetUserWithArtistWithReviews = async (req, res) => {
  try {
    let userID = parseInt(req.params.id)
    console.log(userID)
    let user = await User.findOne({
      where: { id: userID },
      include: [
        {
          model: Artist,
          include: [Review, Post]
        }
      ]
    })
    res.send({ user })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUsers,
  AddArtist,
  GetUserWithArtistWithReviews,
  GetArtists
}
