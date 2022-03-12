import React from "react";
import StripeCheckout from 'react-stripe-checkout';
export default function Checkout(){
return (
  <div>
      <StripeCheckout>

      <button className="btn">Pay Now</button>

      </StripeCheckout>


  </div>


)


}