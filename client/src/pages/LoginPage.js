import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  SetUserEmail,
  SetUserPassword,
  SetAuthenticated
} from '../store/actions/AuthActions'
import { logIn } from '../store/actions/UserActions'
import gif from '../styles/images/log-in.gif'

const mapStateToProps = ({ authState }) => {
  return { authState }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleEmail: (text) => dispatch(SetUserEmail(text)),
    handlePassword: (text) => dispatch(SetUserPassword(text)),
    setAuthenticated: (value) => dispatch(SetAuthenticated(value)),
    submitLogIn: (obj) => dispatch(logIn(obj))
  }
}

const LoginPage = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    props.submitLogIn({
      email: props.authState.email,
      password: props.authState.password
    })
    props.setAuthenticated(true)

    props.history.push('/home')
  }

  useEffect(() => {
    if (props.authState.authenicated) {
      props.history.push('/home')
    }
  }, [])

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
              value={props.authState.email}
              type="email"
              style={{
                marginBottom: '15px',
                width: '75%',
                backgroundColor: '#292929'
              }}
              className="input"
              onChange={(e) => props.handleEmail(e.target.value)}
            />
            <div>Password</div>
            <input
              value={props.authState.password}
              type="password"
              style={{
                marginBottom: '20px',
                width: '75%',
                backgroundColor: '#292929'
              }}
              className="input"
              onChange={(e) => props.handlePassword(e.target.value)}
            />
            <div style={{ display: 'flex' }}>
              <button style={{ color: 'white' }} className="filter-button">
                Log In
              </button>
              <button
                className="filter-button"
                style={{ color: 'white' }}
                onClick={() => props.history.push('/register')}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
