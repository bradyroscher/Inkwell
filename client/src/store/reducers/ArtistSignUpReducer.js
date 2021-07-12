const {
  SET_ARTIST_SHOP,
  SET_ARTIST_SHOP_ID,
  SET_ARTIST_AMERICAN_TRADITIONAL,
  SET_ARTIST_NEO_TRADITIONAL,
  SET_ARTIST_TRIBAL,
  SET_ARTIST_PHOTO_REALISM,
  SET_ARTIST_JAPANESE,
  SET_ARTIST_PORTRAIT,
  SET_ARTIST_GEOMETRIC,
  SET_ARTIST_OTHER,
  SET_ARTIST_DEFAULT
} = require('../types')

const iState = {
  tattooShop: '',
  tattooShopId: '',
  americanTraditional: false,
  neoTraditional: false,
  tribal: false,
  photoRealism: false,
  japanese: false,
  portrait: false,
  geometric: false,
  other: false
}

const ArtistSignUpReducer = (state = iState, action) => {
  switch (action.type) {
    case SET_ARTIST_SHOP:
      return { ...state, tattooShop: action.payload }
    case SET_ARTIST_SHOP_ID:
      return { ...state, tattooShopId: action.payload }
    case SET_ARTIST_AMERICAN_TRADITIONAL:
      return { ...state, americanTraditional: action.payload }
    case SET_ARTIST_NEO_TRADITIONAL:
      return { ...state, neoTraditional: action.payload }
    case SET_ARTIST_TRIBAL:
      return { ...state, tribal: action.payload }
    case SET_ARTIST_PHOTO_REALISM:
      return { ...state, photoRealism: action.payload }
    case SET_ARTIST_JAPANESE:
      return { ...state, japanese: action.payload }
    case SET_ARTIST_PORTRAIT:
      return { ...state, portrait: action.payload }
    case SET_ARTIST_GEOMETRIC:
      return { ...state, geometric: action.payload }
    case SET_ARTIST_OTHER:
      return { ...state, other: action.payload }
    case SET_ARTIST_DEFAULT:
      return {
        tattooShop: '',
        tattooShopId: '',
        americanTraditional: false,
        neoTraditional: false,
        tribal: false,
        photoRealism: false,
        japanese: false,
        portrait: false,
        geometric: false,
        other: false
      }
  }
}

export default ArtistSignUpReducer
