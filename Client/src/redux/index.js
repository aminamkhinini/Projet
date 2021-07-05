import {combineReducers}  from 'redux'
import authReducer from './authReducer'
import ProductReducer from './ProductReducer'

export default combineReducers ({authReducer,ProductReducer})