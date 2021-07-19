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

const GetPostsByStyle = async (req, res) => {
  try {
    const posts = await Post.findAll({
      where: { style: req.params.style },
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

const UpdatePost = async (req, res) => {
  try {
    let post_id = parseInt(req.params.post_id)
    console.log(post_id)
    let post = await Post.update(req.body, {
      where: { id: post_id },
      returning: true
    })
    res.send(post)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllPosts,
  GetPostsByStyle,
  PostPost,
  UpdatePost
}
