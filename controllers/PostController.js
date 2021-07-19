const { Post } = require('../models')

const GetAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll()
    res.send(posts)
  } catch (error) {
    throw error
  }
}

const GetAmericanTraditionalPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      where: { americanTraditional: true },
      returning: true
    })
    res.send(posts)
  } catch (error) {
    throw error
  }
}

const GetNeoTraditionalPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      where: { type: req.params.type },
      returning: true
    })
    res.send(posts)
  } catch (error) {
    throw error
  }
}

const PostPost = async (req, res) => {
  try {
    const post = await Post.create(req.body)
    res.send(post)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllPosts,
  GetAmericanTraditionalPosts,
  GetNeoTraditionalPosts,
  PostPost
}
