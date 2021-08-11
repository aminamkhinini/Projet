import {
  GET_PRODUCTS_SUCCESS ,
  GET_PRODUCTS_FAIL ,
  ADD_PRODUCT_SUCCESS ,
  ADD_PRODUCT_FAIL ,
  UPDATE_PRODUCT_SUCCESS ,
  UPDATE_PRODUCT_FAIL ,
  DELETE_PRODUCT_SUCCESS ,
  DELETE_PRODUCT_FAIL ,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../actions/types";

const initState = {
  products: [],
  errors: null,
};

export const productReducer = (state = initState, action) => {

  switch (action.type) {
    case  GET_PRODUCTS_SUCCESS:
    
      return { ...state, products: action.payload, errors: null };
   
      case  ADD_PRODUCT_SUCCESS :

              
        return{
          ...state,
         products: [action.payload, ...state.products]
      }  
      
                       
        
    case UPDATE_PRODUCT_SUCCESS:
    
      
    return {
        ...state,
       products:state.products.map((product)=> {
            if(product._id===action.payload._id){
              product = action.payload;
            }
        }),...state.products,

        errors: null,
      };

      
    case DELETE_PRODUCT_SUCCESS:
        return{
            ...state,
           products: state.products.filter(product => product._id!==action.payload),               
    
        errors: null,
      };

    
    case GET_PRODUCTS_FAIL :
    case ADD_PRODUCT_FAIL:
    case UPDATE_PRODUCT_FAIL:
    case DELETE_PRODUCT_FAIL:
      return { ...state, errors: action.payload };

   
    default:
      return state;
  }
};
// Get products details
export const productDetailsReducer = (
  state = { product: { },loading:true },
  action
) => {
  switch (action.type) {
      case PRODUCT_DETAILS_REQUEST:
          return {
              loading: true,
              ...state,
          }
      case PRODUCT_DETAILS_SUCCESS:
          return {
              loading: false,
              product: action.payload,
          }
      case PRODUCT_DETAILS_FAIL:
          return {
              loading: false,
              error: action.payload,
          }
      default:
          return state
  }
}
