const { Review } = require('../models')

const PostReview = async (req, res) => {
  try {
    const review = await Review.create(req.body)
    res.send(review)
  } catch (error) {
    throw error
  }
}

const GetReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll()
    res.send(reviews)
  } catch (error) {
    throw error
  }
}

const UpdateReview = async (req, res) => {
  try {
    let id = parseInt(req.params.id)
    console.log(id)
    let review = await Review.update(req.body, {
      where: { id: id },
      returning: true
    })
    res.send(review)
  } catch (error) {
    throw error
  }
}

const DeleteReview = async (req, res) => {
  try {
    let id = parseInt(req.params.id)
    await Review.destroy({ where: { id: id } })
    res.send({ message: 'Review Deleted' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  PostReview,
  GetReviews,
  UpdateReview,
  DeleteReview
}
