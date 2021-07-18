import Client from './'

export const GetPosts = async () => {
  try {
    const res = await Client.get('')
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
