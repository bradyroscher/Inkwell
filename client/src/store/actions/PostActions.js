import { GetPosts } from '../../services/PostServices'
const {
  SET_POST_TEXT,
  SET_POST_IMAGE,
  SET_POST_DEFAULT,
  SET_POSTS,
  SET_POST_TYPE
} = require('../types')

export const SetPostText = (text) => ({
  type: SET_POST_TEXT,
  payload: text
})

export const SetPostImage = (link) => ({
  type: SET_POST_IMAGE,
  payload: link
})

export const SetPostType = (value) => ({
  type: SET_POST_TYPE,
  payload: value
})

export const SetPostDefault = () => ({
  type: SET_POST_DEFAULT
})

export const AddPostToPosts = (array) => ({
  type: SET_POSTS,
  payload: array
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
