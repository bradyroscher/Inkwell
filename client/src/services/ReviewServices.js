import Client from '.'

export const PostReview = async (obj) => {
  try {
    const res = await Client.post('/review', obj)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
