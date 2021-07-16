import Client from '.'

export const GetShops = async () => {
  try {
    const res = await Client.get('/shop')
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const PostShop = async (obj) => {
  try {
    const res = await Client.post('/shop', obj)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const GetShopData = async (id) => {
  try {
    const res = await Client.get(`/shop/all/${id}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const QueryShops = async (query) => {
  try {
    const res = await Client.get(`/shop/search/${query}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
