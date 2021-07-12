const {
  SET_POST_TEXT,
  SET_POST_IMAGE,
  SET_POST_POSTED_BY,
  SET_POST_ARTIST_ID
} = require('../types')

const iState = {
  text: '',
  image: '',
  postedBy: '',
  artistID: ''
}

const PostCreateReducer = (state = iState, action) => {
  switch (action.type) {
    case SET_POST_TEXT:
      return { ...state, text: action.payload }
    case SET_POST_IMAGE:
      return { ...state, image: action.payload }
    case SET_POST_POSTED_BY:
      return { ...state, postedBy: action.payload }
    case SET_POST_ARTIST_ID:
      return { ...state, artistID: action.payload }
  }
}

export default PostCreateReducer
