import {GET_PRODUCTS_SUCCESS , 
    GET_PRODUCTS_FAIL , 
    
    ADD_PRODUCT_SUCCESS,   
    ADD_PRODUCT_FAIL ,  
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL ,   
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL   } from'../actions/types'

const initState = {
    products: [] ,
    errors: null,
  };
 
 const ProductReducer=(state=initState,action)=>{
    switch (action.type) {
       case GET_PRODUCTS_SUCCESS : 
        case ADD_PRODUCT_SUCCESS : 
    
             
           return  {...state,products:action.payload,errors:null}

       case GET_PRODUCTS_FAIL :
       case ADD_PRODUCT_FAIL  :
       case UPDATE_PRODUCT_FAIL:
       case DELETE_PRODUCT_FAIL:
           return  {...state,errors:action.payload}
        //case  UPDATE_PRODUCT_SUCCESS:
         //   return  {...state, products: state.products.filter(product =>product._id!==action.payload),errors:null}
       // case DELETE_PRODUCT_SUCCESS:
               // return  {...state, products:state.products.map(product=> { if(product._id===id){ product = data}}),errors:null}
            
                    
        default:
            return state;
    }
        };
      export default ProductReducer;
       
          