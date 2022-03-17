export const myOrdersReducer =(state={viewOrders:[]} , action) =>{


    switch(action.type)
    {
        case 'MY_ORDERS_REQUEST' : return{
            loading:true
        }
        case 'MY_ORDERS_SUCCESS' : return{
          loading:false,
          success:true,
          viewOrders:action.payload

        }
          
      case 'MY_ORDERS_FAILED' : return{
          loading:false,
          error:action.payload
      }
      default : return state
    }
}
