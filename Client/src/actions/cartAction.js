import axios from "axios";

import {
  GET_CART_SUCCESS,
  GET_CART_FAIL,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAIL,
  DELETE_FROM_CART_SUCCESS,
  DELETE_FROM_CART_FAIL,
} from "./types";

export const getCart = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/cart/${id}`);
    dispatch({ type: GET_CART_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_CART_FAIL, payload: error?.response?.data?.message });
  }
};

export const addToCart = (id, productId, quantity) => (dispatch) => {
  try {
    const res = await axios.post(`/cart/${id}`, { productId, quantity });
    dispatch({ type: ADD_TO_CART_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: ADD_TO_CART_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const deleteFromCart = (userId, productId) => (dispatch) => {
  try {
    const res = await axios.delete(`/cart/${userId}/${productId}`);
    dispatch({ type: DELETE_FROM_CART_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: DELETE_FROM_CART_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};
