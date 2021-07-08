import axios from 'axios';
import {  GET_ORDERS_SUCCESS, GET_ORDERS_FAIL, CHECKOUT_SUCCESS,CHECKOUT_FAIL} from './types';

export const getOrders = (id) => (dispatch) => {
  
try {
  const res = await axios.get(`/order/${id}`);
  dispatch({ type: GET_ORDERS_SUCCESS, payload: res.data });
} catch (error) {
  dispatch({ type:GET_ORDERS_FAIL, payload: error?.response?.data?.message });
}
}

export const checkout = (id, source) => dispatch => {
  try {
    const res = axios.post(`/order/${id}`, {source});
    dispatch({ type: CHECKOUT_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: CHECKOUT_FAIL, payload: error?.response?.data?.message });
  }
  }
  
    

