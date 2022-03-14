const express = require("express");
const router = express.Router();
const Razorpay=require('razorpay');
const store =require('store2');
const { v4: uuidv4 } = require('uuid');
const razorpay = new Razorpay({ key_id:'rzp_test_5teoHf9kBKHnQ2', key_secret: 'Ujdr3fQqLYdjf5L3rKRRD4Gl' })



//router.post('/placeorder', async(req, res,) => {

  /* const customer = {
	name: req.body.customer.name,
	email: req.body.customer.email,
	phone: req.body.customer.phone,
	address:req.body.customer.address,
	city:req.body.customer.city,
	state:req.body.customer.state,
	zip:req.body.customer.zip
     }*/
    // subtotal= req.body.subtotal;
	//const cartItems=req.body.cartItems;
	//const currentUser=req.body.currentUser
	
	 //store('subtotal',subtotal);
       
//	}
	
//) 
router.post('/payment', async(req, res,) => {


	console.log(req.body.subtotal);
	//const subtotal = store('subtotal') ? store('subtotal'):0
	  const amount = req.body.subtotal*100;
	  const currency = 'INR'
  
	  const options = {
		  amount,
		  currency
		  //receipt:uuidv4(),
		  /*notes: {
			  name: customer.name,
			  phone: customer.phone,
			  email:customer.email,
			  address:customer.address,
			  city:customer.city,
			  state:customer.state,
			  zip:customer.zip,
			  
		   }*/ 
	  }
  
	  try {
		  const response = await razorpay.orders.create(options)
		  console.log(response)
		  res.json({
			  id: response.id,
			  currency: response.currency,
			  amount: response.amount
		  })
	  } catch (error) {
		  console.log(error)
	  } 
  }) 

module.exports=router;