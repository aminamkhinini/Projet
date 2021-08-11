import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_RESET,
ORDER_LIST_USER_RESET,
} from "./types";

import axios from "axios";

//Register
export const registerUser = (data, history) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
  })

    const res = await axios.post("/user/newUser", data);
    dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data });
    history.push("/Profile");
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error });
    console.log(data);

  }
};

//login
export const loginUser = (data, history) => async (dispatch) => {
  try {
    dispatch({
      type:  USER_LOGIN_REQUEST,
  })
    const res = await axios.post("/user/login", data);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });

    if (res.data.User.role === "admin") history.push("/Admin");
    else history.push("/Profile");
   
    localStorage.setItem('userInfo', JSON.stringify(data))
 } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL, payload: error?.response?.data?.message });
  }
};



//logout
export const logout = (history) => async (dispatch) => {
  localStorage.removeItem('userInfo')
    localStorage.removeItem('cartItems')
    localStorage.removeItem('shippingAddress')
    localStorage.removeItem('paymentMethod')
  try {
    dispatch({ type:  USER_LOGOUT });
    history.push("/login");
    dispatch({
      type: USER_DETAILS_RESET,
  })

  dispatch({
      type: ORDER_LIST_USER_RESET,
  })


  } catch (error) {
    console.log(error);
  }
};

// UserDetails
/*{export const getUserDetails = (data) => async (dispatch) => {
  try {
      dispatch({
          type: USER_DETAILS_REQUEST,
      })

     

      // Header to send with the request
      const config = {
        headers: { "auth-token": localStorage.getItem('auth-token') },
      }
      localStorage.setItem('userInfo', JSON.stringify(data));
      // Make request to server and get the response data

      const res = await axios.get("/user/infor", data);
     
      dispatch({
          type: USER_DETAILS_SUCCESS,
          payload: res.data,
      })
          localStorage.setItem('userinfo', JSON.stringify(data));
  } catch (error) {
      dispatch({
          type: USER_DETAILS_FAIL,
          payload:
              error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message,
      })
  }
}}*/




export const getUserDetails = () => async (dispatch, getState) => {
  try {
      dispatch({
          type: USER_DETAILS_REQUEST,
      })

      // Get user login and user info
      const {
         auth: { userInfo },
      } = getState()

      // Header to send with the request
      const config = {
        headers: { "auth-token": localStorage.getItem('auth-token') ,
        "userInfo":localStorage.getItem('userInfo'),
      },
      }

      // Make request to server and get the response data
      const { data } = await axios.get('/user/infor', config)

      // Dispatch user register success after making the request
      dispatch({
          type: USER_DETAILS_SUCCESS,
          payload: data,
      })
      
  } catch (error) {
      dispatch({
          type: USER_DETAILS_FAIL,
          payload:
              error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message,
      })
  }
}

//updateUserProfile
export const updateUserProfile = (user) => async (dispatch,getState) => {
  try {
      dispatch({
          type: USER_UPDATE_PROFILE_REQUEST,
      })

      // Get user login and user info
      const {
        auth: { userInfo },
    } = getState()
      
      // Header to send with the request
      const config = {
        headers: { "auth-token": localStorage.getItem('auth-token') ,
        "userInfo":localStorage.getItem('userInfo', JSON.stringify(data)),
      },
      }
      // Make request to server and get the response data
      

      const {data} = await axios.put(`/user/profile`,user,config)
      dispatch({
          type: USER_UPDATE_PROFILE_SUCCESS,
          payload: data,
      })
     
  } catch (error) {
      dispatch({
          type: USER_UPDATE_PROFILE_FAIL,
          payload:
              error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message,
      })
  }
}