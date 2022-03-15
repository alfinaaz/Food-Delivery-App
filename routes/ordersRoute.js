const { response } = require("express");
const express = require("express");
const router = express.Router();
const Razorpay = require('razorpay');
const crypto = require('crypto');
const store = require('store2');
const { v4: uuidv4 } = require('uuid');
const razorpay = new Razorpay({ key_id: 'rzp_test_5teoHf9kBKHnQ2', key_secret: 'Ujdr3fQqLYdjf5L3rKRRD4Gl' })


router.post('/payment', async (req, res,) => {

	
	const amount = req.body.subtotal*100;
	const currency = 'INR'

	const options = {
		amount,
		currency
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
router.post('/success', async (req, res) => {



	try {
	
		// getting the details back from our font-end
		const {
			orderId,
			razorpayPaymentId,
			razorpayOrderId,
			razorpaySignature
		  }=req.body.orderdata;
  
		  const{ name,email,phone,address,city,state,zip}=req.body.customer;

		// Creating our own digest
		// The format should be like this:
		//  digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId,'secret id');


		const hash = crypto.createHmac('sha256', "Ujdr3fQqLYdjf5L3rKRRD4Gl").update(`${orderId}|${razorpayPaymentId}`).digest('hex');

		// comaparing our digest with the actual signature
	
		if (hash === razorpaySignature){
			   res.json("SUCESS");
			   console.log("SUCCESS");
			   console.log(req.body.orderdata);
				console.log(req.body.customer);

		}
	
			   // THE PAYMENT IS LEGIT & VERIFIED
			// YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT

		else{
				res.json("FAILURE");
				consolr.log("FAILURE");
				console.log(req.body.orderdata);
				console.log(req.body.customer);
		}
}
	
	catch (error) {
		res.status(500).send(error);
	}
  
});

module.exports = router;