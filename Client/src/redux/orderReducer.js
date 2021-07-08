import { GET_ORDERS_SUCCESS,
  GET_ORDERS_FAIL , 
  CHECKOUT_SUCCESS,
  CHECKOUT_FAIL } from '../actions/types';

const initialState = {
    orders: [],
    loading: false
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_ORDERS_SUCCESS:
            return{
                ...state,
                orders: action.payload,
                loading: false
            }

        case CHECKOUT_SUCCESS:
            return{
                ...state,
                orders: [action.payload, ...state.orders]
            }

        case GET_ORDERS_FAIL:
        case CHECKOUT_FAIL:
          return  {...state,errors:action.payload}
        default:
            return state;
    }
  }