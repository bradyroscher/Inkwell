import {
  SET_REVIEW_TEXT,
  SET_REVIEWS,
  SET_REVIEW_AVERAGE,
  SET_REVIEW_RATING,
  REMOVE_REVIEW
} from '../types'

const iState = {
  text: '',
  reviews: [],
  average: 0,
  reviewRating: 1
}

const ReviewReducer = (state = iState, action) => {
  switch (action.type) {
    case SET_REVIEW_TEXT:
      return { ...state, text: action.payload }
    case SET_REVIEWS:
      return { ...state, reviews: action.payload }
    case SET_REVIEW_AVERAGE:
      return { ...state, average: action.payload }
    case SET_REVIEW_RATING:
      return { ...state, reviewRating: action.payload }
    case REMOVE_REVIEW:
      let arr = state.reviews
      arr.splice(action.payload, 1)
      return { ...state, reviews: arr }
    default:
      return { ...state }
  }
}

export default ReviewReducer
