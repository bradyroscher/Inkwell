import Client from '.'

export const PostReview = async (obj) => {
  try {
    const res = await Client.post('/review', obj)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const UpdateReview = async (obj, id) => {
  try {
    const res = await Client.put(`/review/${id}`, obj)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const DeleteReview = async (id) => {
  try {
    await Client.delete(`/review/${id}`)
  } catch (error) {
    console.log(error)
  }
}
