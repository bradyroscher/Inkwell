import {
  SET_REVIEW_TEXT,
  SET_REVIEWS,
  SET_REVIEW_AVERAGE,
  SET_REVIEW_RATING,
  REMOVE_REVIEW
} from '../types'

export const SetReviewText = (text) => ({
  type: SET_REVIEW_TEXT,
  payload: text
})

export const SetReviews = (array) => ({
  type: SET_REVIEWS,
  payload: array
})

export const SetAverage = (num) => ({
  type: SET_REVIEW_AVERAGE,
  payload: num
})

export const SetRating = (num) => ({
  type: SET_REVIEW_RATING,
  payload: num
})

export const DeleteReview = (index) => ({
  type: REMOVE_REVIEW,
  payload: index
})
