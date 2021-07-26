import {combineReducers}  from 'redux'
import authReducer from './authReducer'
import ItemReducer from './ItemReducer'
import cartReducer from './cartReducer'
import orderReducer from './orderReducer'
import ImageReducer from './ImageReducer'

export default combineReducers ({
    auth:authReducer,
   items:ItemReducer,
    cart: cartReducer,
    order: orderReducer,
    image:ImageReducer,
})
