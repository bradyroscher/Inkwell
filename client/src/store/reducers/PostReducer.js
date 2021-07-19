const {
  SET_POST_TEXT,
  SET_POST_IMAGE,
  SET_POST_TYPE,
  SET_POST_DEFAULT,
  SET_POSTS
} = require('../types')

const iState = {
  text: '',
  image: '',
  type: '',
  posts: []
}

const PostReducer = (state = iState, action) => {
  switch (action.type) {
    case SET_POST_TEXT:
      return { ...state, text: action.payload }
    case SET_POST_IMAGE:
      return { ...state, image: action.payload }
    case SET_POST_TYPE:
      return { ...state, type: action.payload }
    case SET_POST_DEFAULT:
      return { ...state, text: '', image: '', postedBy: '', artistID: '' }
    case SET_POSTS:
      return { ...state, posts: action.payload }
    default:
      return { ...state }
  }
}

export default PostReducer
