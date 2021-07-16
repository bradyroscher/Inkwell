import React from 'react'
import { connect } from 'react-redux'
import {
  SetUserEmail,
  SetUserName,
  SetUserPassword,
  SetUserImage,
  SetUserType,
  SetAuthenticated,
  ResetRegisterForm
} from '../store/actions/AuthActions'
import { Register } from '../services/AuthServices'

const mapStateToProps = ({ authState }) => {
  return { authState }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleEmail: (text) => dispatch(SetUserEmail(text)),
    handleName: (text) => dispatch(SetUserName(text)),
    handlePassword: (text) => dispatch(SetUserPassword(text)),
    handleImage: (link) => dispatch(SetUserImage(link)),
    SetAuthenticated: (value) => dispatch(SetAuthenticated(value)),
    resetForm: () => dispatch(ResetRegisterForm())
  }
}

const RegisterPage = (props) => {
  console.log(props.authState)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Register({
      name: props.authState.name,
      email: props.authState.email,
      password: props.authState.password,
      image: props.authState.image,
      userType: props.authState.userType
    })
    props.resetForm()
    props.history.push('/')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={props.authState.email}
          onChange={(e) => {
            props.handleEmail(e.target.value)
          }}
        />
        <input
          value={props.authState.password}
          onChange={(e) => {
            props.handlePassword(e.target.value)
          }}
        />
        <input
          value={props.authState.name}
          onChange={(e) => {
            props.handleName(e.target.value)
          }}
        />
        <input
          value={props.authState.image}
          onChange={(e) => {
            props.handleImage(e.target.value)
          }}
        />
        <button>SUBMIT</button>
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)
