import {
  GET_PRODUCTS_SUCCESS ,
  GET_PRODUCTS_FAIL ,
  
  ADD_PRODUCT_SUCCESS ,
  ADD_PRODUCT_FAIL ,
  UPDATE_PRODUCT_SUCCESS ,
  UPDATE_PRODUCT_FAIL ,
  DELETE_PRODUCT_SUCCESS ,
  DELETE_PRODUCT_FAIL ,
  ADD_IMAGE_SUCCESS,
 ADD_IMAGE_FAIL,

 PRODUCT_DETAILS_REQUEST,
 PRODUCT_DETAILS_SUCCESS,
 PRODUCT_DETAILS_FAIL,
 FILTER_PRODUCT,
} from "./types";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("/product");
    dispatch({ type:  GET_PRODUCTS_SUCCESS, payload: res.data });
    console.log(res.data)
  } catch (error) {
    dispatch({ type:  GET_PRODUCTS_FAIL, payload: error?.response?.data?.message });
  }
};





export const add_product = (product)=> async (dispatch) => { 
 
  try {
    const res = await axios.post("/product/newProduct", product, {
      headers: { "auth-token": localStorage.getItem("auth-token") },
    });
   dispatch({type:ADD_PRODUCT_SUCCESS, payload:res.data});
  
  } catch (error) {
    dispatch({ type: ADD_PRODUCT_FAIL, payload: error?.response?.data?.message });
  }
};

export const addImage =(image)=> async (dispatch) =>{
  
 const formData = new FormData()
 formData.append('baby',image)
 console.log(Array.from(formData))
 try {
 const res = await axios.post("/img", formData, {
    headers: { "auth-token": localStorage.getItem("auth-token") },
  });
 dispatch({type:ADD_IMAGE_SUCCESS, payload:res.data});

} catch (error) {
  dispatch({ type:ADD_IMAGE_FAIL, payload: error?.response?.data?.message });
}
};


export const delete_product = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/product/${id}`,{ headers: { "auth-token": localStorage.getItem("auth-token")}});
    dispatch({
      type:  DELETE_PRODUCT_SUCCESS,
      payload: id,
    });
    dispatch(getProducts())
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAIL,
      payload: error?.response?.data?.message,
    });
  
  }
};

export const update_product = ( product) =>async (dispatch) => {
  try {
    console.log('product to update: ',product)
    const res = await axios.put(`/product/${product? product._id : "id"}`, product,{ headers: { "auth-token": localStorage.getItem("auth-token")}});

    dispatch({
      type:  UPDATE_PRODUCT_SUCCESS,
      payload:res.data.updatedProduct,
    });
    dispatch(getProducts())
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCT_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
      dispatch({
          type: PRODUCT_DETAILS_REQUEST,
      })
      const { data } = await axios.get(`/product/${id}`)

      dispatch({
          type: PRODUCT_DETAILS_SUCCESS,
          payload: data,
      })
  } catch (error) {
      dispatch({
          type: PRODUCT_DETAILS_FAIL,
          payload:
              error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message,
      })
  }
}
