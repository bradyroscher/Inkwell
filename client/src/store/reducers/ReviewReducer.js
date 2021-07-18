import { SET_REVIEW_TEXT, SET_REVIEWS, SET_REVIEW_AVERAGE } from '../types'

const iState = {
  text: '',
  reviews: [],
  average: 0
}

const ReviewReducer = (state = iState, action) => {
  switch (action.type) {
    case SET_REVIEW_TEXT:
      return { ...state, text: action.payload }
    case SET_REVIEWS:
      return { ...state, reviews: action.payload }
    case SET_REVIEW_AVERAGE:
      return { ...state, average: action.payload }
    default:
      return { ...state }
  }
}

export default ReviewReducer
