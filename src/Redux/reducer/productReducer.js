

import * as actionTypes from '../constant/productConstant';
export const getProductReducer =(state = {Products: []} ,action)=>{
    switch(action.type){
        case actionTypes.GET_PRODUCT_SUCCESS:
        return {products : action.payload}
        case   actionTypes.GET_PRODUCT_FAIL:
            return {error: action.payload}

        default:
        return state
    }
} 