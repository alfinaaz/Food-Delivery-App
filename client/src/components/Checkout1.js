import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { SUCCESS, FAILURE } from './Constants';


function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

const __DEV__ = document.domain === 'localhost'

function Checkout1({ subtotal }) {


	async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		if (email === "")
			alert("Please Log in to place an order!");

		else if (customer.name !== "" && customer.phone !== "" && customer.address !== "") {
			const res1 = await axios.post('http://localhost:8000/api/orders/payment', { subtotal });
           //1 Receiving the Order Id from Backend
			console.log(res1)

			const options = {
				key: __DEV__ ? 'rzp_test_5teoHf9kBKHnQ2' : 'PRODUCTION_KEY',
				currency: res1.currency,                //Creating options for Razorpay Payment Gateway
				amount: ({ subtotal } * 100).toString(),
				order_id: res1.data.id,
				name: 'FOOD DELIVERY',
				description: 'PAYMENT GATEWAY',
				handler: async function (response) {
					const orderdata = {
						orderId: res1.data.id,
						razorpayPaymentId: response.razorpay_payment_id,
						razorpayOrderId: response.razorpay_order_id,
						razorpaySignature: response.razorpay_signature,
					};

					console.log(orderdata); // Sending these data to backend to verify whether payment was succesful 
									        // or not using sha256 algorithm. If successful push customer data to database

					const result = await axios.post("http://localhost:8000/api/orders/success", { orderdata, customer, email, subtotal, cartItems });

					console.log(result.data);
					console.log(customer);

					if (result.data.str === SUCCESS.str) {
						alert("Order Placed Successfully!");
					}

					else if (result.data.str === FAILURE.str)
						alert("Oops! Your Payment failed, Please try again!")

					else
						alert("Error! 404")
				},

			}
			const paymentObject = new window.Razorpay(options)
			paymentObject.open()
		}
		else
			alert("Please enter the details")
	}

	//const orderstate=useSelector(state=>state.placeOrderReducer)
	//const {loading,success,error}=orderstate;

	const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
	const email = (currentUser !== null) ? currentUser.email : "";


	const cartstate = useSelector(state => state.cartReducer)
	const cartItems = cartstate.cartItems

	const [customer, setCustomer] = useState({ name: "", phone: "", address: "" })

	return (
		<div>

			Proceed to checkout! Have a yummy day ahead 
			<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/docomo/205/face-savouring-delicious-food_1f60b.png"></img>
			<form className="row g-3 needs-validation" noValidate >
				<div className="col-md-4">
					<label htmlFor="validationCustom01" className="form-label">Name</label>
					<input type="text" className="form-control" id="validationCustom01" value={customer.name} required onChange={(e) => setCustomer(prevState => { return { ...prevState, name: e.target.value } })} />
					<div className="valid-feedback">
						Looks good!
					</div>
				</div>
				<div className="form-group">
					<label for="phone_no">Phone Number</label>
					<input type="text" className="form-control" required id="phone_no" placeholder="Phone Number" value={customer.phone} onChange={(e) => setCustomer(prevState => { return { ...prevState, phone: e.target.value } })} />

				</div>
				<div className="col-12">
					<label for="inputAddress" className="form-label">Address</label>
					<input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value={customer.address} onChange={(e) => setCustomer(prevState => { return { ...prevState, address: e.target.value } })} />
				</div>
				<div className="col-md-6">
					<label htmlFor="validationCustom03" className="form-label">City</label>
					<input type="text" className="form-control" id="validationCustom03" value={"Dhanbad"} disabled />
				</div>
				<div className="col-md-6">
					<label htmlFor="validationCustom03" className="form-label">State</label>
					<input type="text" className="form-control" id="validationCustom03" value={'Jharkhand'} disabled />
					<div className="invalid-feedback">
					</div>
				</div>
			</form>
			<button
				className="btn"
				onClick={displayRazorpay}
				target="_blank"
				rel="noopener noreferrer"
			>
				CHECKOUT
			</button>
		</div>
	)
}
export default Checkout1;
