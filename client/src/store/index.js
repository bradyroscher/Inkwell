import { createStore, combineReducers, applyMiddleware } from 'redux'
import ArtistSignUpReducer from './reducers/ArtistSignUpReducer'
import PostReducer from './reducers/PostReducer'
import ShopReducer from './reducers/ShopReducers'
import UserReducer from './reducers/UserReducer'
import AuthReducer from './reducers/AuthReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
const store = createStore(
  combineReducers({
    shopState: ShopReducer,
    postState: PostReducer,
    userState: UserReducer,
    artistSignUpState: ArtistSignUpReducer,
    authState: AuthReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
  //turn off devtools for prd
)
export default store
