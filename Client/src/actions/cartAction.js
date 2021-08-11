import axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS, CART_SAVE_PAYMENT_METHOD } from './types'

const cartItemsFromStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []
export const addToCart = (id, qty) => async (dispatch,getstate) => {
    const { data } = await axios.get(`/product/${id}`)
    console.log(data)
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            title: data.title,
            images: data.images,
            price: data.price,
            category:data.category,
            countInStock: data.countInStock,
            qty,
        },
    })
    localStorage.setItem('cartItems', JSON.stringify(getstate().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch,getstate) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    })
    localStorage.setItem('cartItems', JSON.stringify(getstate().cart.cartItems))
}

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data,
    })
    localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload: data,
    })
    localStorage.setItem('paymentMethod', JSON.stringify(data))
}