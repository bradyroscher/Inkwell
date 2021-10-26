import React from 'react'
import { connect } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { SetAuthenticated } from '../../store/actions/AuthActions'
import './NavBar.css'

const mapStateToProps = ({ authState, userState }) => {
  return { authState, userState }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setAuthenticated: (value) => dispatch(SetAuthenticated(value))
  }
}

const NavBar = (props) => {
  const history = useHistory()
  const { authState, userState } = props
  const logOut = () => {
    props.setAuthenticated(false)
    localStorage.clear()
    history.push('/')
  }

  return (
    <header
      style={{
        display: `${authState.authenticated ? 'flex' : 'none'}`,
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
      className="navbar"
    >
      <div style={{ display: 'flex', width: '33%' }}>
        <div
          className={
            userState.userData.userType === 'user' ? 'flex-center' : 'hide'
          }
          // style={{
          //   display: userState.userData.userType === 'user' ? 'flex' : 'none',
          //   alignItems: 'center'
          // }}
        >
          <NavLink to={`/artist-register`} className="profile-nav">
            PROFILE
          </NavLink>
        </div>
        <div
          className={
            userState.userData.userType === 'user' ? 'flex-center' : 'hide'
          }
          // style={{
          //   display: userState.userData.userType === 'artist' ? 'flex' : 'none',
          //   alignItems: 'center'
          // }}
        >
          <NavLink
            to={`/artist/${userState.userData.id}`}
            className="profile-nav"
          >
            PROFILE
          </NavLink>
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', marginLeft: '-3vw' }}
        >
          <NavLink to="/shops" className="profile-nav">
            SHOPS
          </NavLink>
        </div>
      </div>

      <NavLink
        to="/home"
        className="INKWELL"
        style={{
          fontFamily: "'New Rocker', cursive",
          textDecoration: 'none',
          fontSize: '40px'
        }}
      >
        INKWELL
      </NavLink>
      <div
        onClick={logOut}
        className="log-out"
        style={{ width: '33%', display: 'flex', justifyContent: 'flex-end' }}
      >
        LOG OUT
      </div>
    </header>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
