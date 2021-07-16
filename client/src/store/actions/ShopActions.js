import {
  GetShops,
  QueryShops,
  PostShop,
  GetShopData
} from '../../services/ShopServices'
import { GetArtistsByShops } from '../../services/UserServices'
const {
  SET_SHOP_ARTISTS,
  SET_SHOPS,
  SET_SHOP_NAME,
  SET_SHOP_IMAGE,
  SET_SHOP_ADDRESS,
  SET_SHOP_QUERY,
  ADD_SHOP,
  SET_SELECTED_SHOP
} = require('../types')

export const SetShopName = (text) => ({
  type: SET_SHOP_NAME,
  payload: text
})

export const SetShopImage = (link) => ({
  type: SET_SHOP_IMAGE,
  payload: link
})

export const SetShopAddress = (text) => ({
  type: SET_SHOP_ADDRESS,
  payload: text
})

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

export const SetShops = () => {
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

export const SetQuery = (query) => ({
  type: SET_SHOP_QUERY,
  payload: query
})

export const SetShopsByQuery = (query) => {
  return async (dispatch) => {
    try {
      console.log(query)
      const shops = await QueryShops(query)
      dispatch({
        type: SET_SHOPS,
        payload: shops
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const AddPostedShop = (obj) => {
  console.log(obj)
  return async (dispatch) => {
    try {
      const shop = await PostShop(obj)
      dispatch({
        type: ADD_SHOP,
        payload: shop
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const SetSelectedShop = (id) => {
  return async (dispatch) => {
    try {
      const shops = await GetShopData(id)
      dispatch({
        type: SET_SELECTED_SHOP,
        payload: shops
      })
    } catch (error) {
      console.log(error)
    }
  }
}
