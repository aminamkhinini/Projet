import { GET_CART_SUCCESS ,       
    GET_CART_FAIL ,          
    ADD_TO_CART_SUCCESS,     
    ADD_TO_CART_FAIL ,       
    DELETE_FROM_CART_SUCCESS,
    DELETE_FROM_CART_FAIL   } from '../actions/types';

const initialState = {
    cart: null,
    loading: false
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_CART_SUCCESS:
            return {
                ...state,
                cart: action.payload,
               
            }

        case ADD_TO_CART_SUCCESS:
            return {
                ...state,
                cart: action.payload
            }

        case DELETE_FROM_CART_SUCCESS:
            return {
                ...state,
                cart: action.payload
            }

        case GET_CART_FAIL:
        case ADD_TO_CART_FAIL :
        case  DELETE_FROM_CART_FAIL:
            return  {...state,errors:action.payload}

        default:
            return state;
    }
}
