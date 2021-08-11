import {
    GET_IMAGE_SUCCESS,
    GET_IMAGE_FAIL,
    ADD_IMAGE_SUCCESS ,
    ADD_IMAGE_FAIL ,
    
  } from "../actions/types";
  
  const initState = {
    imagelink: '',
    errors: null,
  };
  
  const ImageReducer = (state = initState, action) => {
  
    switch (action.type) {
      case  GET_IMAGE_SUCCESS:
      
        return { imagelink: action.payload,
           errors: null };
     
        case  ADD_IMAGE_SUCCESS :
          return{
            ...state,
           imagelink: action.payload.imagename, 
        }  
        
                         
          
      
      
      case GET_IMAGE_FAIL:

      case ADD_IMAGE_FAIL:
     
        return { ...state, errors: action.payload };
  
     
      default:
        return state;
    }
  };
  
  export default ImageReducer;
  