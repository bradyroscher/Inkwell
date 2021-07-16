const {
  SET_USER_EMAIL,
  SET_USER_PASSWORD,
  SET_USER_NAME,
  SET_USER_IMAGE,
  SET_USER_TYPE,
  SET_AUTHENTICATED,
  RESET_REGISTER_FORM,
  SET_LOGIN_DATA
} = require('../types')

const iState = {
  email: '',
  password: '',
  name: '',
  image: '',
  userType: 'user',
  authenticated: false,
  loginData: {}
}

const ShopReducer = (state = iState, action) => {
  switch (action.type) {
    case SET_USER_EMAIL:
      return { ...state, email: action.payload }
    case SET_USER_PASSWORD:
      return { ...state, password: action.payload }
    case SET_USER_NAME:
      return { ...state, name: action.payload }
    case SET_USER_IMAGE:
      return { ...state, image: action.payload }
    case SET_USER_TYPE:
      return { ...state, userType: action.payload }
    case SET_AUTHENTICATED:
      return { ...state, authenticated: action.payload }
    case RESET_REGISTER_FORM:
      return {
        ...state,
        email: '',
        password: '',
        name: '',
        image: ''
      }
    case SET_LOGIN_DATA:
      return { ...state, loginData: action.payload }
    default:
      return { ...state }
  }
}

export default ShopReducer
