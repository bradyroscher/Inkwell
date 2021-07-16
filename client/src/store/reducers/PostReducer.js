const {
  SET_POST_TEXT,
  SET_POST_IMAGE,
  SET_POST_POSTED_BY,
  SET_POST_ARTIST_ID,
  SET_POST_DEFAULT,
  SET_POSTS
} = require('../types')

const iState = {
  text: '',
  image: '',
  postedBy: '',
  artistID: '',
  posts: []
}

const PostReducer = (state = iState, action) => {
  switch (action.type) {
    case SET_POST_TEXT:
      return { ...state, text: action.payload }
    case SET_POST_IMAGE:
      return { ...state, image: action.payload }
    case SET_POST_POSTED_BY:
      return { ...state, postedBy: action.payload }
    case SET_POST_ARTIST_ID:
      return { ...state, artistID: action.payload }
    case SET_POST_DEFAULT:
      return { ...state, text: '', image: '', postedBy: '', artistID: '' }
    case SET_POSTS:
      return { ...state, posts: action.payload }
    default:
      return { ...state }
  }
}

export default PostReducer
