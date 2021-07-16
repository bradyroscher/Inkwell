const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      raw: true
    })
    if (
      user &&
      (await middleware.comparePassword(user.password, req.body.password))
    ) {
      let payload = {
        id: user.id,
        email: user.email,
        name: user.name,
        userType: user.userType
      }
      let token = middleware.createToken(payload)
      console.log(token)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const { email, password, name, image, userType } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await User.create({
      email,
      password: passwordDigest,
      name,
      image,
      userType
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const CheckLogin = async (req, res) => {
  try {
    const payload = res.locals.payload
    console.log(payload)
    res.send(payload)
  } catch (error) {
    throw error
  }
}

module.exports = {
  Login,
  Register,
  CheckLogin
}
