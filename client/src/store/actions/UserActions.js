import { StripToken } from '../../services/AuthServices'
import {
  GetArtistsByID,
  GetArtistsByShops,
  GetProfile
} from '../../services/UserServices'
const { SET_SELECTED_ARTIST, SET_USER_DATA } = require('../types')

export const SetSelectedArtist = (id) => {
  return async (dispatch) => {
    try {
      const artist = await GetProfile(id)
      dispatch({
        type: SET_SELECTED_ARTIST,
        payload: artist
      })
    } catch (error) {
      console.log(error)
    }
  }
}

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
