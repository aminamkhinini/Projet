import {combineReducers}  from 'redux'
import authReducer from './authReducer'
import ItemReducer from './ItemReducer'
import cartReducer from './cartReducer'
import orderReducer from './orderReducer'

export default combineReducers ({
    auth:authReducer,
   items:ItemReducer,
    cart: cartReducer,
    order: orderReducer,
})
