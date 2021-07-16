import Client from '.'

export const RegisterArtist = async (obj) => {
  try {
    const res = await Client.post('/artist', obj)
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
