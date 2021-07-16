const { Review } = require('../models')

const PostReview = async (req, res) => {
  try {
    const review = await Review.create(req.body)
    res.send(review)
  } catch (error) {
    throw error
  }
}

module.exports = {
  PostReview
}
