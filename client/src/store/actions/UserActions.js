import { StripToken, Login } from '../../services/AuthServices'
import { GetProfile } from '../../services/UserServices'
const {
  SET_SELECTED_ARTIST,
  SET_USER_DATA,
  SET_REVIEWS,
  SET_POSTS,
  SET_AUTHENTICATED,
  SET_HOME_TYPE,
  SET_ARTIST_ID,
  TOGGLE_USER_TYPE
} = require('../types')

export const ToggleUserType = (type) => ({
  type: TOGGLE_USER_TYPE,
  payload: type
})

export const SetSelectedArtist = (id) => {
  return async (dispatch) => {
    try {
      const artist = await GetProfile(id)
      dispatch({
        type: SET_SELECTED_ARTIST,
        payload: artist
      })
      dispatch({
        type: SET_REVIEWS,
        payload: artist.user.Artist.Reviews
      })
      dispatch({
        type: SET_POSTS,
        payload: artist.user.Artist.Posts
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const SetArtistId = (id) => ({
  type: SET_ARTIST_ID,
  payload: id
})

export const SetHomeType = (value) => ({
  type: SET_HOME_TYPE,
  payload: value
})

export const StripTokenData = () => {
  return async (dispatch) => {
    try {
      const data = await StripToken()
      dispatch({
        type: SET_USER_DATA,
        payload: data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const logIn = (obj) => {
  return async (dispatch) => {
    try {
      const data = await Login(obj)
      dispatch({
        type: SET_USER_DATA,
        payload: data
      })
      dispatch({
        type: SET_AUTHENTICATED,
        payload: true
      })
    } catch (error) {
      console.log(error)
    }
  }
}
