import React from 'react'
import { connect } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { SetAuthenticated } from '../store/actions/AuthActions'

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
  console.log(props.userState.userData.id)
  const logOut = () => {
    props.setAuthenticated(false)
    localStorage.clear()
    history.push('/')
  }

  return (
    <header
      style={{
        display: `${props.authState.authenticated ? 'flex' : 'none'}`
      }}
    >
      <div>
        <NavLink to={`/artist-register`}>Register as Artist</NavLink>
      </div>
      <div>
        <NavLink to={`/artist/${props.userState.userData.id}`}>
          view artist profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/shops">View Shops</NavLink>
      </div>
      <button onClick={logOut}>Log Out</button>
    </header>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
