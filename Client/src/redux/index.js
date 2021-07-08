import {combineReducers}  from 'redux'
import authReducer from './authReducer'
import ProductReducer from './ProductReducer'
import cartReducer from './cartReducer'
import orderReducer from './orderReducer'

export default combineReducers ({
    auth:authReducer,
    products:ProductReducer,
    cart: cartReducer,
    order: orderReducer,
})
