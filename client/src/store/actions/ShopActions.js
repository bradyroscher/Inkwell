const { SET_SHOP_ARTISTS, SET_SHOPS } = require('../types')
import { GetShops } from '../../services/ShopServices'
import { GetArtistsByShops } from '../../services/UserServices'

export const SetShopArtist = async () => {
  return async (dispatch) => {
    try {
      const artists = await GetArtistsByShops()
      dispatch({
        type: SET_SHOP_ARTISTS,
        payload: artists
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const SetPosts = async () => {
  return async (dispatch) => {
    try {
      const shops = await GetShops()
      dispatch({
        type: SET_SHOPS,
        payload: shops
      })
    } catch (error) {
      console.log(error)
    }
  }
}
