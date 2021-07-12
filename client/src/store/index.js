import { createStore, combineReducers, applyMiddleware } from 'redux'
// import MovieReducer from './reducers/MovieReducer'
//import ProductReducer from './reducers/ProductReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
const store = createStore(
  combineReducers({
    // movieState: MovieReducer
    //productState: ProductReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
  //turn off devtools for prd
)
export default store
