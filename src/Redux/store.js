import {createStore,combineReducers,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { getProductReducer } from './reducer/productReducer'
import { cartReducer } from './reducer/cartReducer'


const reducer = combineReducers({
    getProducts: getProductReducer,

  cart: cartReducer
})
const middleWare = [thunk]

const store  = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleWare))
)
export default store;