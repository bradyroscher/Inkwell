import {
  SET_REVIEW_TEXT,
  SET_REVIEWS,
  SET_REVIEW_AVERAGE,
  SET_REVIEW_RATING,
  REMOVE_REVIEW,
  ADD_REVIEW
} from '../types'

import { PostReview } from '../../services/ReviewServices'

export const SetReviewText = (text) => ({
  type: SET_REVIEW_TEXT,
  payload: text
})

export const AddReview = (obj) => {
  return async (dispatch) => {
    try {
      const review = await PostReview(obj)
      console.log('yummy')
      console.log(review)
      dispatch({
        type: ADD_REVIEW,
        payload: review
      })
    } catch (error) {
      console.log(error)
    }
  }
}

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
