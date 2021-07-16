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

export const SetUserEmail = (text) => ({
  type: SET_USER_EMAIL,
  payload: text
})

export const SetUserPassword = (text) => ({
  type: SET_USER_PASSWORD,
  payload: text
})

export const SetUserName = (text) => ({
  type: SET_USER_NAME,
  payload: text
})

export const SetUserImage = (link) => ({
  type: SET_USER_IMAGE,
  payload: link
})

export const SetUserType = (value) => ({
  type: SET_USER_TYPE,
  payload: value
})

export const SetAuthenticated = (value) => ({
  type: SET_AUTHENTICATED,
  payload: value
})

export const ResetRegisterForm = () => ({
  type: RESET_REGISTER_FORM
})

export const SetLoginData = (data) => ({
  type: SET_LOGIN_DATA,
  payload: data
})
