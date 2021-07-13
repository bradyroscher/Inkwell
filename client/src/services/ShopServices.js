import Client from '.'

export const GetShops = async () => {
  try {
    const res = await Client.get('')
    return res.data
  } catch (error) {
    console.log(error)
  }
}
