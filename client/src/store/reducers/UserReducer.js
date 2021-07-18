const { SET_SELECTED_ARTIST, SET_USER_DATA } = require('../types')

const iState = {
  selectedArtist: {},
  userData: {},
  posts: []
}

const UserReducer = (state = iState, action) => {
  switch (action.type) {
    case SET_SELECTED_ARTIST:
      return { ...state, selectedArtist: action.payload }
    case SET_USER_DATA:
      return { ...state, userData: action.payload }
    default:
      return { ...state }
  }
}

export default UserReducer
