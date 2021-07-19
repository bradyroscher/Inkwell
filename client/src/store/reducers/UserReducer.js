const {
  SET_SELECTED_ARTIST,
  SET_USER_DATA,
  SET_HOME_TYPE
} = require('../types')

const iState = {
  selectedArtist: {},
  userData: {},
  posts: [],
  homeStyle: ''
}

const UserReducer = (state = iState, action) => {
  switch (action.type) {
    case SET_SELECTED_ARTIST:
      return { ...state, selectedArtist: action.payload }
    case SET_USER_DATA:
      return { ...state, userData: action.payload }
    case SET_HOME_TYPE:
      return { ...state, userStyle: action.payload }
    default:
      return { ...state }
  }
}

export default UserReducer
