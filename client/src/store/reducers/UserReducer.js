const {
  SET_USER_EMAIL,
  SET_USER_PASSWORD,
  SET_USER_NAME,
  SET_USER_IMAGE,
  SET_SELECTED_ARTIST
} = require('../types')

const iState = {
  email: '',
  password: '',
  name: '',
  image: '',
  selectedArtist: {}
}

const UserReducer = (state = iState, action) => {}

export default UserReducer
