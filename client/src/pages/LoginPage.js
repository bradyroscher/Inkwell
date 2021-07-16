import React from 'react'
import { connect } from 'react-redux'
import {
  SetUserEmail,
  SetUserPassword,
  SetAuthenticated
} from '../store/actions/AuthActions'
import { Login } from '../services/AuthServices'

const mapStateToProps = ({ authState }) => {
  return { authState }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleEmail: (text) => dispatch(SetUserEmail(text)),
    handlePassword: (text) => dispatch(SetUserPassword(text)),
    setAuthenticated: (value) => dispatch(SetAuthenticated(value))
  }
}

const LoginPage = (props) => {
  console.log(props.authState)

  const handleSubmit = (e) => {
    e.preventDefault()
    Login({
      email: props.authState.email,
      password: props.authState.password
    })
    props.setAuthenticated(true)
    console.log(props.authState.authenicated)
    console.log('fired')
    props.history.push('/home')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={props.authState.email}
          onChange={(e) => props.handleEmail(e.target.value)}
        />
        <input
          value={props.authState.password}
          onChange={(e) => props.handlePassword(e.target.value)}
        />
        <button>Log In</button>
      </form>
      <button onClick={() => props.history.push('/register')}>Register</button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
