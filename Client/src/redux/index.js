import { combineReducers } from "redux";
import { authReducer,userDetailsReducer,
    userUpdateProfileReducer} from "./authReducer";
import { productReducer, productDetailsReducer } from "./ProductReducer";
import cartReducer from "./cartReducer";
import {
  createOrderReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderListUserReducer
} from "./orderReducer";
import ImageReducer from "./ImageReducer";

export default combineReducers({
  auth: authReducer,
  userDetails:userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  products: productReducer,
  cart: cartReducer,
  createOrder: createOrderReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListUser:  orderListUserReducer,
  image: ImageReducer,
  productDetails: productDetailsReducer,
});
const cartItemsFromStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {}
    // Load initial state when the application is loaded
const initialState = {
  cart: {
      cartItems: cartItemsFromStorage,
      shippingAddress: shippingAddressFromStorage,
  },
  auth: { userInfo: userInfoFromStorage },
}
