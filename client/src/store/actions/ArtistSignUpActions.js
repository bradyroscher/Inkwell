const {
  SET_ARTIST_SHOP,
  SET_ARTIST_SHOP_ID,
  SET_ARTIST_AMERICAN_TRADITIONAL,
  SET_ARTIST_NEO_TRADITIONAL,
  SET_ARTIST_TRIBAL,
  SET_ARTIST_PHOTO_REALISM,
  SET_ARTIST_JAPANESE,
  SET_ARTIST_PORTRAIT,
  SET_ARTIST_WATER_COLOR,
  SET_ARTIST_BIOMECHANICAL,
  SET_ARTIST_GEOMETRIC,
  SET_ARTIST_OTHER,
  SET_ARTIST_DEFAULT,
  SET_SHOP_ID,
  SET_ARTIST_BIO,
  SET_ARTIST_IMAGE
} = require('../types')

export const SetArtistImage = (link) => ({
  type: SET_ARTIST_IMAGE,
  payload: link
})

export const SetArtistBio = (text) => ({
  type: SET_ARTIST_BIO,
  payload: text
})

export const SetArtistShop = (text) => ({
  type: SET_ARTIST_SHOP,
  payload: text
})

export const SetArtistShopID = (text) => ({
  type: SET_ARTIST_SHOP_ID,
  payload: text
})

export const SetArtistAmericanTraditional = (value) => ({
  type: SET_ARTIST_AMERICAN_TRADITIONAL,
  payload: value
})

export const SetArtistNeoTraditional = (value) => ({
  type: SET_ARTIST_NEO_TRADITIONAL,
  payload: value
})

export const SetArtistTribal = (value) => ({
  type: SET_ARTIST_TRIBAL,
  payload: value
})

export const SetArtistPhotoRealism = (value) => ({
  type: SET_ARTIST_PHOTO_REALISM,
  payload: value
})

export const SetArtistJapanese = (value) => ({
  type: SET_ARTIST_JAPANESE,
  payload: value
})

export const SetArtistPortrait = (value) => ({
  type: SET_ARTIST_PORTRAIT,
  payload: value
})

export const SetArtistWaterColor = (value) => ({
  type: SET_ARTIST_WATER_COLOR,
  payload: value
})

export const SetArtistBiomechanical = (value) => ({
  type: SET_ARTIST_BIOMECHANICAL,
  payload: value
})

export const SetArtistGeometric = (value) => ({
  type: SET_ARTIST_GEOMETRIC,
  payload: value
})

export const SetArtistOther = (value) => ({
  type: SET_ARTIST_OTHER,
  payload: value
})

export const SetArtistDefault = () => ({
  type: SET_ARTIST_DEFAULT
})

export const SetShopID = (id) => ({
  type: SET_SHOP_ID,
  payload: id
})
