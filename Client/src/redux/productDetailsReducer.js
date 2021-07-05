
import {PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,} from'../actions/types'

 const productDetailsReducer = (
    state = { product: { reviews: [] } },
    action
  ) => {
    switch (action.type) {
      case PRODUCT_DETAILS_REQUEST:
        return {  ...state }
      case PRODUCT_DETAILS_SUCCESS:
        return { loading: false, product: action.payload }
      case PRODUCT_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  export default productDetailsReducer;