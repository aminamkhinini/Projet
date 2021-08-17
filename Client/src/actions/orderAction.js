import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_LIST_USER_REQUEST,
  ORDER_LIST_USER_SUCCESS,
  ORDER_LIST_USER_FAIL,
} from '../actions/types'
import axios from 'axios'

export const createOrder = (order) => async (dispatch,getState) => {
  try {
      dispatch({
          type: ORDER_CREATE_REQUEST,
      })

       // Get user login and user info
       const {
        auth: { userInfo },
    } = getState()

      // Header to send with the request
      const config = {
        headers: { "auth-token": localStorage.getItem('auth-token'),
        //"userInfo": localStorage.getItem('userInfo') },
      }}
       
     

      // Make request to server and get the response data
      const { data } = await axios.post(`/orders`, order, config)

      // Dispatch user order success after making the request
      dispatch({
          type: ORDER_CREATE_SUCCESS,
          payload: data,
      })
  } catch (error) {
      dispatch({
          type: ORDER_CREATE_FAIL,
          payload:
              error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message,
      })
  }
}

export const getOrderDetails = (orderId) => async (dispatch,getState) => {
  try {
      dispatch({
          type: ORDER_DETAILS_REQUEST,
      })

     // Get user login and user info
     const {
        auth: { userInfo },
    } = getState()

      // Header to send with the request
      const config = {
        headers: { "auth-token": localStorage.getItem('auth-token'),
        //"userInfo": localStorage.getItem('userInfo') },
      }}
       

      // Make request to server and get the response data
      const { data } = await axios.get(`/orders/${orderId}`, config)

      // Dispatch user order success after making the request
      dispatch({
          type: ORDER_DETAILS_SUCCESS,
          payload: data,
      })
  } catch (error) {
      dispatch({
          type: ORDER_DETAILS_FAIL,
          payload:
              error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message,
      })
  }
}

export const payOrder = (orderId, paymentResult) => async (dispatch,getState) => {
  try {
      dispatch({
          type: ORDER_PAY_REQUEST,
      })

      const {
        auth: { userInfo },
    } = getState()
     
      // Header to send with the request
      const config = {
        headers: { "auth-token": localStorage.getItem('auth-token'),
       // "userInfo": localStorage.getItem('userInfo') },
      }}

      // Make request to server and get the response data
      const { data } = await axios.put(
          `/orders/${orderId}/pay`,
          paymentResult,
          config
      )

      // Dispatch user order pay success after making the request
      dispatch({
          type: ORDER_PAY_SUCCESS,
          payload: data,
      })
  } catch (error) {
      dispatch({
          type: ORDER_PAY_FAIL,
          payload:
              error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message,
      })
  }
}

export const listUserOrders = () => async (dispatch,getState) => {
  try {
      dispatch({
          type: ORDER_LIST_USER_REQUEST,
      })

      // Get user login to get the bearer token
      const {
        auth: { userInfo },
    } = getState()
      // Header to send with the request
      const config = {
        headers: { "auth-token": localStorage.getItem('auth-token'),
        "userInfo": localStorage.getItem('userInfo') },
      }

      // Make request to server and get the response data
      const { data } = await axios.get(`/orders/myorders`, config)

      // Dispatch user order pay success after making the request
      dispatch({
          type: ORDER_LIST_USER_SUCCESS,
          payload: data,
      })
  } catch (error) {
      dispatch({
          type: ORDER_LIST_USER_FAIL,
          payload:
              error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message,
      })
  }
}