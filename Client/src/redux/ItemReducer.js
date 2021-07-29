import {
  GET_ITEMS_SUCCESS ,
  GET_ITEMS_FAIL ,
  ADD_ITEM_SUCCESS ,
  ADD_ITEM_FAIL ,
  UPDATE_ITEM_SUCCESS ,
  UPDATE_ITEM_FAIL ,
  DELETE_ITEM_SUCCESS ,
  DELETE_ITEM_FAIL 
} from "../actions/types";

const initState = {
  items: [],
  errors: null,
};

const ItemReducer = (state = initState, action) => {

  switch (action.type) {
    case  GET_ITEMS_SUCCESS:
    
      return { ...state, items: action.payload, errors: null };
   
      case  ADD_ITEM_SUCCESS :

              
        return{
          ...state,
         items: [action.payload, ...state.items]
      }  
      
                       
        
    case UPDATE_ITEM_SUCCESS:
    
        //const { _id, data } = action.payload; 
    return {
        ...state,
       items:state.items.map((item)=> {
            if(item._id===action.payload._id){
              item = action.payload;
            }
        }),...state.items,

        errors: null,
      };

      
    case DELETE_ITEM_SUCCESS:
        return{
            ...state,
           items: state.items.filter(item => item._id!==action.payload),               
    
        errors: null,
      };

    
    case GET_ITEMS_FAIL :
    case ADD_ITEM_FAIL:
    case UPDATE_ITEM_FAIL:
    case DELETE_ITEM_FAIL:
      return { ...state, errors: action.payload };

   
    default:
      return state;
  }
};

export default ItemReducer;
