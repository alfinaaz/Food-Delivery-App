import axios from "axios";
export const myOrders=(email)=>async dispatch=>{

    dispatch({type:'MY_ORDERS_REQUEST'})

    try {
        const response = await axios.post('/api/myorders' ,{email})
        console.log(response.data
            )
            dispatch({type:'MY_ORDERS_SUCCESS' , payload: response.data})
        
       
    } catch (error) {
        dispatch({type:'MY_ORDERS_FAILED' , payload: error})
    }

}