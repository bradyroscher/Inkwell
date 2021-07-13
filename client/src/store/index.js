import { createStore, combineReducers, applyMiddleware } from 'redux'
import ArtistSignUpReducer from './reducers/ArtistSignUpReducer'
import PostReducer from './reducers/PostReducer'
import ShopReducer from './reducers/ShopReducers'
import UserReducer from './reducers/UserReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
const store = createStore(
  combineReducers({
    postState: PostReducer,
    shopState: ShopReducer,
    userState: UserReducer,
    artistSignUpState: ArtistSignUpReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
  //turn off devtools for prd
)
export default store
