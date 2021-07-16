const { Post } = require('../models')

const PostPost = async (req, res) => {
  try {
    const post = await Post.create(req.body)
    res.send(review)
  } catch (error) {
    throw error
  }
}

module.exports = {
  PostPost
}
