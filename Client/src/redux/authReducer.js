import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_DETAILS_FAIL,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
} from "../actions/types";

const initState = {
    userInfo:{
        user: JSON.parse(localStorage.getItem("user"))||null,
        token: localStorage.getItem("auth-token")||null,
        isAuth: localStorage.getItem("isAuth") === "true" ? true : false,
    },
  
  errors: null,
};

export const authReducer=(state=initState,{type,payload})=>{
  
switch (type) {
  
    case USER_LOGIN_REQUEST:
    case USER_REGISTER_REQUEST:
          return {
              ...state,
              loading: true,
          }
    case USER_REGISTER_SUCCESS:
    case USER_LOGIN_SUCCESS:
        localStorage.setItem('auth-token', payload.token);
        localStorage.setItem('isAuth', true);
        localStorage.setItem('user', JSON.stringify(payload.User));
      
        return{
            loading:false,
            ...state,
            userInfo:{user: payload.User,
                token: payload.token,
                isAuth: true,
                },
                errors: null,
            };
        case USER_LOGOUT:
              
        localStorage.clear();
        return {
            userInfo:{user: null,
                token: null,
                isAuth: false}
        }
      case USER_LOGIN_FAIL:
          
      case USER_REGISTER_FAIL:
  
        localStorage.clear();
        localStorage.removeItem('cartItems');
        localStorage.removeItem('shippingAddress');
        localStorage.removeItem('paymentMethod');
        return {
            loading:false,
            ...state,
            userInfo:{user: null,
                token: null,
                isAuth: false,
               },
               errors: payload
            
          };
    default:
        return state;
}
    };




export const userDetailsReducer = (state ={ user: {} },{ type, payload }) => {
  switch (type) {
      case USER_DETAILS_REQUEST:
          return {
            ...state,
              loading: true,
          }
      case USER_DETAILS_SUCCESS:
        
          return {
              loading: false,
              ...state,
              user: payload.User,
               
                }
          
      case USER_DETAILS_FAIL:
          return {
            loading: false,
            error: payload,
          }
      case USER_DETAILS_RESET:
          return {
            user: {},
        }
      default:
          return state
  }
}

export const userUpdateProfileReducer = (state = {}, { type, payload }) => {
  switch (type) {
      case USER_UPDATE_PROFILE_REQUEST:
          return {
              loading: true,
           
          }
      case USER_UPDATE_PROFILE_SUCCESS:
       
          return {
            loading: false,
            success: true,
              ...state,
              userInfo:{user: payload.User,
        token: payload.token,
        isAuth: true,
        
          },
          errors: null,}
      case USER_UPDATE_PROFILE_FAIL:
          return {
              loading: false,
              error: payload,
          }
      default:
          return state
  }
}