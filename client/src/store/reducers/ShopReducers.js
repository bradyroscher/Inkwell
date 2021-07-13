const { SET_SHOP_ARTISTS, SET_SHOPS } = require('../types')

const iState = {
  artists: [],
  shops: []
}

const ShopReducer = (state = iState, action) => {
  switch (action.type) {
    case SET_SHOP_ARTISTS:
      return { ...state, artists: action.payload }
    case SET_SHOPS:
      return { ...state, shops: action.payload }
  }
}

export default ShopReducer
