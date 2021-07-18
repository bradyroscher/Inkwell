const { Post } = require('../models')

const PostPost = async (req, res) => {
  try {
    const post = await Post.create(req.body)
    res.send(post)
  } catch (error) {
    throw error
  }
}

module.exports = {
  PostPost
}
