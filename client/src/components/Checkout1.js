import axios from 'axios'
import React, { useState } from 'react'
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

function Checkout1({subtotal}){
	

	async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await axios.post('http://localhost:8000/api/orders/payment',{subtotal});
		if(data.amount!=0){
		console.log(data)

		const options = {
			key: __DEV__ ? 'rzp_test_5teoHf9kBKHnQ2' : 'PRODUCTION_KEY',
			currency: data.currency,
			amount: (subtotal*100).toString(),
			order_id: data.id,
			name: 'FOOD DELIVERY',
			description: 'PAYMENT GATEWAY',
			handler: function (response) {
				alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature)
			},
			notes:{

				address: 'abx',

			}
			
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}else
	{
			alert("Select items to proceed");
	}

}
	

	return (
		<div className="App">
			<header className="App-header">
				<p>
					Proceed to checkout! Have a yummy day ahead <img src ="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/docomo/205/face-savouring-delicious-food_1f60b.png"></img>
				</p>
				<button
					className="btn"
					onClick={displayRazorpay}
					target="_blank"
					rel="noopener noreferrer"
				>
				CHECKOUT	
				</button>
			</header>
		</div>
	)
}
export default Checkout1;
