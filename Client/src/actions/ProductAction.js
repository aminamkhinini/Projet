import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
 
  ADD_PRODUCT_SUCCESS ,  
  ADD_PRODUCT_FAIL,      
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,   
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL ,  
} from "./types";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("/product");
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data });
    console.log(res.data)
  } catch (error) {
    dispatch({ type:  GET_PRODUCTS_FAIL, payload: error?.response?.data?.message });
  }
};




export const addProduct = (newProducts )=> async (dispatch) => {
 

  try {
    const res = await axios.post("/product/newProduct", newProducts, {
      headers: { "auth-token": localStorage.getItem("auth-token") },
    });
   dispatch({type:ADD_PRODUCT_SUCCESS, payload:res.data});
  
  } catch (error) {
    dispatch({ type:  ADD_PRODUCT_FAIL, payload: error?.response?.data?.message });
  }
};




export const deleteProduct = (id) => (dispatch) => {
  try {
    const res = axios.delete(`/product/${id}`);
    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const updateProduct = (id, product) => (dispatch) => {
  try {
    const res = axios.put(`/products/${id}`, product);

    dispatch({
      type:  UPDATE_PRODUCT_SUCCESS,
      payload: Promise.all([id, res.data]),
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCT_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};
