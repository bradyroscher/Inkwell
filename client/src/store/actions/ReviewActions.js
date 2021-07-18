import { SET_REVIEW_TEXT, SET_REVIEWS, SET_REVIEW_AVERAGE } from '../types'

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
