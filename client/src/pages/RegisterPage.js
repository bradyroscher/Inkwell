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
import gif from '../styles/images/log-in.gif'

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
    <div
      style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div className="log-in-div" style={{ display: 'flex', width: '55vw' }}>
        <div style={{ width: '50%' }}>
          <img
            src={gif}
            style={{
              width: '100%',
              borderTopLeftRadius: '15px',
              borderBottomLeftRadius: '15px'
            }}
          />
        </div>
        <div
          style={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
            onSubmit={handleSubmit}
          >
            <div
              style={{
                fontFamily: "'New Rocker', cursive",
                fontSize: '60px',
                marginBottom: '20%'
              }}
            >
              INKWELL
            </div>
            <div>Email</div>
            <input
              className="input"
              value={props.authState.email}
              type="email"
              style={{
                marginBottom: '15px',
                width: '75%',
                backgroundColor: '#292929'
              }}
              onChange={(e) => {
                props.handleEmail(e.target.value)
              }}
            />
            <div>Password</div>
            <input
              className="input"
              value={props.authState.password}
              type="paswword"
              style={{
                marginBottom: '15px',
                width: '75%',
                backgroundColor: '#292929'
              }}
              onChange={(e) => {
                props.handlePassword(e.target.value)
              }}
            />
            <div>Name</div>
            <input
              className="input"
              value={props.authState.name}
              type="paswword"
              style={{
                marginBottom: '20px',
                width: '75%',
                backgroundColor: '#292929'
              }}
              onChange={(e) => {
                props.handleName(e.target.value)
              }}
            />

            <button className="filter-button" style={{ color: 'white' }}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)
