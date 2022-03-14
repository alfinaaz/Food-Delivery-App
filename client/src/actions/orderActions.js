import axios from "axios"
export const placeOrder=(customer,subtotal)=>async(dispatch,getState)=>{
  
 dispatch({type:'PLACE_ORDER_REQUEST'})
 const currentUser=getState().loginUserReducer.currentUser
 const cartItems=getState().cartReducer.cartItems
 try{
    const response= await axios.post('/api/orders/placeorder',{customer,subtotal,currentUser,cartItems})
    dispatch({type:'PLACE_ORDER_INITIATED'})
   
    console.log(response);
 }
 
 
 catch(error)
 {
    dispatch({type:'PLACE_ORDER_FAILED' ,payload:error})
    console.log(error);
 }

}