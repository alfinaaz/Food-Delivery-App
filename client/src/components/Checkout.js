import React from "react";
import StripeCheckout from 'react-stripe-checkout';
export default function Checkout({subtotal}){
function tokenHandler(token)
{
    console.log(token);
}

    return (
  <div>
      <StripeCheckout amount={subtotal*100}
      shippingAddress
      token= {tokenHandler}
      currency='INR'
      stripeKey="pk_test_51KcWNhSDpwaic1qABSURg9F8dYR9NIL0aZP9FG8DdupAy2qn5a7JGyGidd79mUUSXS5vJg1rFDYXFlD0obKjA76b00kwO8ekLz"
      >


      <button className="btn">Pay Now</button>

      </StripeCheckout>


  </div>


)


}