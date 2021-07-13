const {
  SET_USER_EMAIL,
  SET_USER_PASSWORD,
  SET_USER_NAME,
  SET_USER_IMAGE,
  SET_SELECTED_ARTIST
} = require('../types')

import { GetArtistsByID, GetArtistsByShops } from '../../services/UserServices'

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

export const SetSelectedArtist = async () => {
  return async (dispatch) => {
    try {
      const artist = await GetArtistsByID()
      dispatch({
        type: SET_SELECTED_ARTIST,
        payload: artist
      })
    } catch (error) {
      console.log(error)
    }
  }
}
