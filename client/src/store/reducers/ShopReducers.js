const {
  SET_SHOP_ARTISTS,
  SET_SHOPS,
  SET_SHOP_NAME,
  SET_SHOP_IMAGE,
  SET_SHOP_ADDRESS,
  SET_SHOP_QUERY,
  ADD_SHOP,
  SET_SHOP_ID,
  SET_SELECTED_SHOP
} = require('../types')

const iState = {
  artists: [],
  shops: [],
  query: '',
  shopName: '',
  shopImage: '',
  shopAddress: '',
  shopId: null,
  selectedShop: {}
}

const ShopReducer = (state = iState, action) => {
  switch (action.type) {
    case SET_SHOP_ARTISTS:
      return { ...state, artists: action.payload }
    case SET_SHOPS:
      return { ...state, shops: action.payload }
    case SET_SHOP_NAME:
      return { ...state, shopName: action.payload }
    case SET_SHOP_IMAGE:
      return { ...state, shopImage: action.payload }
    case SET_SHOP_ADDRESS:
      return { ...state, shopAddress: action.payload }
    case SET_SHOP_QUERY:
      return { ...state, query: action.payload }
    case ADD_SHOP:
      return { ...state, shops: [...state.shops, action.payload] }
    case SET_SELECTED_SHOP:
      return { ...state, selectedShop: action.payload }
    default:
      return { ...state }
  }
}

export default ShopReducer
