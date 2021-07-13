const {
  SET_POST_TEXT,
  SET_POST_IMAGE,
  SET_POST_POSTED_BY,
  SET_POST_ARTIST_ID,
  SET_POST_DEFAULT,
  SET_POSTS
} = require('../types')

import { GetPosts } from '../../services/PostServices'

export const SetPostText = (text) => ({
  type: SET_POST_TEXT,
  payload: text
})

export const SetPostImage = (link) => ({
  type: SET_POST_IMAGE,
  payload: link
})

export const SetPostPostedBy = (text) => ({
  type: SET_POST_POSTED_BY,
  payload: text
})

export const SetPostArtistID = (ID) => ({
  type: SET_POST_ARTIST_ID,
  payload: ID
})

export const SetPostDefault = () => ({
  type: SET_POST_DEFAULT
})

export const SetPosts = async () => {
  return async (dispatch) => {
    try {
      const posts = await GetPosts()
      dispatch({
        type: SET_POSTS,
        payload: posts
      })
    } catch (error) {
      console.log(error)
    }
  }
}
