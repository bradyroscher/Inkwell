const {
  SET_SELECTED_ARTIST,
  SET_USER_DATA,
  SET_HOME_TYPE,
  SET_ARTIST_ID
} = require('../types')

const iState = {
  selectedArtist: {},
  userData: {},
  homeStyle: 'All',
  artistID: ''
}

const UserReducer = (state = iState, action) => {
  switch (action.type) {
    case SET_SELECTED_ARTIST:
      return { ...state, selectedArtist: action.payload }
    case SET_USER_DATA:
      return { ...state, userData: action.payload }
    case SET_HOME_TYPE:
      return { ...state, homeStyle: action.payload }
    case SET_ARTIST_ID:
      return { ...state, artistID: action.payload }
    default:
      return { ...state }
  }
}

export default UserReducer
