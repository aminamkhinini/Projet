import { GET_CART_SUCCESS ,       
    GET_CART_FAIL ,          
    ADD_TO_CART_SUCCESS,     
    ADD_TO_CART_FAIL ,       
    DELETE_FROM_CART_SUCCESS,
    DELETE_FROM_CART_FAIL ,
    } from '../actions/types';

const initialState = {
    cart: null,
 
    errors: null
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_CART_SUCCESS:
            return {
                ...state,
                cart: action.payload,
                errors: null
            }

        case ADD_TO_CART_SUCCESS:
            const item = action.payload
            const existItem = state.cartItems.find(
                (x) => x.product === item.product
            )

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) =>
                        x.product === existItem.product ? item : x
                    ),
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                }
            }

        case DELETE_FROM_CART_SUCCESS:
            return {
                ...state,
                cart: action.payload,
                errors: null
            }
          

        case GET_CART_FAIL:
        case ADD_TO_CART_FAIL :
        case  DELETE_FROM_CART_FAIL:
            return  {...state,errors:action.payload}

        default:
            return state;
    }
}
