import Client from '.'

export const Register = async (obj) => {
  try {
    const res = await Client.post(`/auth/register`, obj)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const Login = async (obj) => {
  try {
    const res = await Client.post(`/auth/login`, obj)
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    console.log(error)
  }
}

export const StripToken = async () => {
  try {
    const payload = await Client.get('/auth/token')
    console.log(payload)
    return payload.data
  } catch (error) {
    console.log(error)
  }
}
