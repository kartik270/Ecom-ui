


import * as actionTypes from '../constant/productConstant';

import axios from 'axios'
const URL = 'http://localhost:8000'
 export const  getProducts= () => async (dispatch)=>{
    try{
    const {data} =  await  axios.get(`${URL}/products`);
    
    dispatch({type: actionTypes.GET_PRODUCT_SUCCESS, payload: data});
    }
    catch(error)
    {
        dispatch({type: actionTypes.GET_PRODUCT_FAIL,payload:error.message})
        console.log("working");
    }
}
