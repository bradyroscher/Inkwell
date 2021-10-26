import './styles/App.css'
import { Switch, Route } from 'react-router-dom'
import ArtistPage from './pages/ArtistPage'
import ArtistRegisterPage from './pages/ArtistRegisterPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ShopListPage from './pages/ShopListPage'
import ShopPage from './pages/ShopPage'
import ShopRegisterPage from './pages/ShopRegisterPage'
import RegisterPage from './pages/RegisterPage'
import NavBar from './components/NavBar/NavBar'
import { connect } from 'react-redux'
import { SetAuthenticated } from './store/actions/AuthActions'
import { useEffect } from 'react'
import { StripTokenData } from './store/actions/UserActions'

const mapStateToProps = ({ authState, userState }) => {
  return { authState, userState }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setAuthenticated: (value) => dispatch(SetAuthenticated(value)),
    stripToken: () => dispatch(StripTokenData())
  }
}

function App(props) {
  const { userState, authState, stripToken } = props

  const getToken = () => {
    let token = localStorage.getItem('token')
    console.log(token)
    if (token) {
      stripToken()
      return props.setAuthenticated(true)
    }
  }

  useEffect(() => {
    getToken()
  }, [])

  console.log(userState)
  console.log(authState)

  return (
    <div className="App">
      <NavBar props={props} />
      <Switch>
        <Route exact path="/" render={(props) => <LoginPage {...props} />} />
        <Route path="/shops" render={(props) => <ShopListPage {...props} />} />
        <Route
          path="/shop-register"
          render={(props) => <ShopRegisterPage {...props} />}
        />
        <Route
          path="/shop-page/:id"
          render={(props) => <ShopPage {...props} />}
        />
        <Route path="/home" render={(props) => <HomePage {...props} />} />
        <Route
          path="/artist/:id"
          render={(props) => <ArtistPage {...props} />}
        />
        <Route
          path="/register"
          render={(props) => <RegisterPage {...props} />}
        />
        <Route
          path="/artist-register"
          render={(props) => <ArtistRegisterPage {...props} />}
        />
      </Switch>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
