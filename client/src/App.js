import './App.css'
import { Switch, Route } from 'react-router-dom'
import ArtistPage from './pages/ArtistPage'
import ArtistRegisterPage from './pages/ArtistRegisterPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ShopListPage from './pages/ShopListPage'
import ShopPage from './pages/ShopPage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={(props) => <LoginPage {...props} />} />
        <Route
          path="/shops"
          component={(props) => <ShopListPage {...props} />}
        />
        <Route
          path="/shops/:id"
          component={(props) => <ShopPage {...props} />}
        />
        <Route path="/home" component={(props) => <HomePage {...props} />} />
        <Route
          path="/artist/:id"
          component={(props) => <ArtistPage {...props} />}
        />
        <Route
          path="/artist-register"
          component={(props) => <ArtistRegisterPage {...props} />}
        />
      </Switch>
    </div>
  )
}

export default App
