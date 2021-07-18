import Client from '.'

export const ToggleUserType = async (id) => {
  try {
    const res = await Client.put(`/user/${id}`, { userType: 'artist' })
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const RegisterArtist = async (obj, id) => {
  try {
    const res = await Client.post('/artist', obj)
    ToggleUserType(id)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const GetArtistsByShops = async () => {
  try {
    const res = await Client.get('')
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const GetArtistsByID = async () => {
  try {
    const res = await Client.get('')
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const GetProfile = async (id) => {
  try {
    const res = await Client.get(`/artist/${id}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
