import {legacy_createStore as createStore,combineReducers,applyMiddleware} from "redux"
import { cartReducer } from "./cart/cart.reducer"
import logger from 'redux-logger'

// console.log(middlewares)
/* rootReducer holds the cartReducer */
let rootReducer = combineReducers({
    carts:cartReducer,
})

const store = createStore(rootReducer, applyMiddleware(logger))

export default store