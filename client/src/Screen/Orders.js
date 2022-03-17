import React, { useEffect } from "react";
import { myOrders } from '../actions/myOrdersActions';
import { useDispatch, useSelector } from "react-redux";


export default function Orders() {

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const email = currentUser.email;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(myOrders(email))
  }, [])


  const myordersstate = useSelector(state => state.myOrdersReducer)
  const { loading, error, viewOrders } = myordersstate;
  //console.log(viewOrders);
  //const {name,phone,address,cartItems,isDelivered}= viewOrders;




  /*return(

    <>
       <h1>hi</h1>
    
    </>
  )}*/

  /*    useEffect(() => {
      async function fetchOrders() {
        const response = await axios.post('api/myorders',{email})
        //{email} is important. we send data in form of objects. just email with no curly brace will throw error..!!
        console.log(response.data)
      }
  
      fetchOrders()
    }, [])  */


  return (
    <div className>
      {(viewOrders || []).map(order => {

        return (
          <div className="card flex-container col-md-4">
            {order.cartItems.map(cartItem => {
              return (

                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={cartItem.image} className="img-fluid rounded-start" style={{ height: 200, width: 200 }} />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">{cartItem.name}</h5>
                      <p className="card-text">PLATE VARIETY: {cartItem.plateVariety}</p>
                      <p className="card-text">PRICE:-   {(cartItem.prices)[0][cartItem.plateVariety]}*{(cartItem.quantity)}={cartItem.price}</p>
                      <p className="card-text">QTY: {cartItem.quantity}</p>

                    </div>
                  </div>
                </div>



              )
            })};
            <div class="card flex-container bg-warning mb-3 col-md-12">
              <div class="card-header">Date : {order.updatedAt}</div>
              <div class="card-body">
                <p class="card-text">NAME:  {order.name}</p>
                <p class="card-text">PHONE : {order.phone}</p>
                <p class="card-text">SHIPPING ADDRESS: {order.address}</p>
                <h4>TOTAL :{order.subtotal}</h4>
              </div>
            </div>
          </div>

        )

      })


      }</div>
  )
}

// ************Functional components directly can't be async. So we used useEffect here..******************
//Also useEffect Callbacks are synchronous so we have put async function inside