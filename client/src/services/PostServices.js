import Client from './'

export const GetPosts = async () => {
  try {
    const res = await Client.get('/post/all')
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const GetPostsByStyle = async (style) => {
  try {
    const res = await Client.get(`/post/style/${style}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const SubmitPost = async (obj) => {
  try {
    const res = await Client.post('/post', obj)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
