const express = require("express");
const router = express.Router();
const Razorpay = require('razorpay');
const crypto = require('crypto');
const Customer = require("../models/customerModel")

//const store = require('store2');
//const { v4: uuidv4 } = require('uuid');
const razorpay = new Razorpay({ key_id: 'rzp_test_5teoHf9kBKHnQ2', key_secret: 'Ujdr3fQqLYdjf5L3rKRRD4Gl' })


router.post('/payment', async (req, res,) => {


	// [Generating OrderId] to be sent to the front end with some amount of information;


	const amount = req.body.subtotal * 100;
	const currency = 'INR'

	const options = {
		amount,
		currency
	}

	try {
		const response = await razorpay.orders.create(options)
		console.log(response)
		res.json({
			id: response.id,  // Generating OrderId which is mandatory to be generated at the backend
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}
})
router.post('/success', async (req, res) => {


	//Verifying if the payment is successfull or not uding sha256 algorithm

	try {

		// getting the details back from our font-end
		const {
			orderId,
			razorpayPaymentId,
			razorpayOrderId,
			razorpaySignature
		} = req.body.orderdata;

		const { name, phone, address } = req.body.customer;

		const email = req.body.email;
		const subtotal = req.body.subtotal;
		const cartItems = req.body.cartItems;

		// Creating our own digest
		// The format should be like this:
		//  digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId,'secret key');


		const hash = crypto.createHmac('sha256', "Ujdr3fQqLYdjf5L3rKRRD4Gl").update(`${orderId}|${razorpayPaymentId}`).digest('hex');

		// comaparing our hash with the actual signature

		if (hash === razorpaySignature) {
			console.log("SUCCESS");

			// if the payment is successful, we will push all the customers data to the database
			const isDelivered = false;
			const newCustomer = new Customer({ orderId, name, phone, email, address, cartItems, subtotal, isDelivered })


			try {
				newCustomer.save()
				console.log("Customer added!");

			}
			catch (error) {
				console.log(error);
			}

			res.send("SUCCESS");
			//

		}


		else {
			res.json("FAILURE");
			console.log("FAILURE");
		}
		//By default displaying the details of the all the users!
		console.log(req.body.orderdata);
		console.log(req.body.customer);
		

	}

	catch (error) {
		res.status(500).send(error);
	}

});

module.exports = router;