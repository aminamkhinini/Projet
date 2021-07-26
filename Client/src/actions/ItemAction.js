import {
  GET_ITEMS_SUCCESS ,
  GET_ITEMS_FAIL ,
  
  ADD_ITEM_SUCCESS ,
  ADD_ITEM_FAIL ,
  UPDATE_ITEM_SUCCESS ,
  UPDATE_ITEM_FAIL ,
  DELETE_ITEM_SUCCESS ,
  DELETE_ITEM_FAIL 
} from "./types";
import axios from "axios";

export const getItems = () => async (dispatch) => {
  try {
    const res = await axios.get("/item");
    dispatch({ type:  GET_ITEMS_SUCCESS, payload: res.data });
    console.log(res.data)
  } catch (error) {
    dispatch({ type:  GET_ITEMS_FAIL, payload: error?.response?.data?.message });
  }
};




export const add_item = (item )=> async (dispatch) => {
 

  try {
    const res = await axios.post("/item/newItem", item, {
      headers: { "auth-token": localStorage.getItem("auth-token") },
    });
   dispatch({type:ADD_ITEM_SUCCESS, payload:res.data});
  
  } catch (error) {
    dispatch({ type:  ADD_ITEM_FAIL, payload: error?.response?.data?.message });
  }
};




export const deleteItem = (id) => (dispatch) => {
  try {
    const res = axios.delete(`/item/${id}`);
    dispatch({
      type:  DELETE_ITEM_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: DELETE_ITEM_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const updateItem = (id, item) => (dispatch) => {
  try {
    const res = axios.put(`/items/${id}`, item);

    dispatch({
      type:  UPDATE_ITEM_SUCCESS,
      payload: Promise.all([id, res.data]),
    });
  } catch (error) {
    dispatch({
      type: UPDATE_ITEM_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};
