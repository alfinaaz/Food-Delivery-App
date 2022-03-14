import React from "react";
import {useDispatch} from 'react-redux'; 
import { useState } from "react";
import { placeOrder } from "../actions/orderActions";


export default function Checkout2({subtotal}){
    
    
   const[customer,setCustomer]= useState({name:"",email:"",phone:"",address:"",city:"",state:"",zip:""})
   const dispatch =useDispatch();

   
    function initiatePayment()
    {
        dispatch(placeOrder(customer,subtotal))
    }
      
      
    return (

        <form className="row g-3 needs-validation" noValidate >
            <div className="col-md-4">
                <label htmlFor="validationCustom01" className="form-label">Name</label>
                <input type="text" className="form-control" id="validationCustom01" value={customer.name} required  onChange={(e)=>setCustomer(prevState=>{return {...prevState,name:e.target.value}})}/>
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div className="col-md-6">
                <label for="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" value={customer.email} onChange={(e)=>setCustomer(prevState=>{return {...prevState,email:e.target.value}})}/>
            </div>
            <div className="form-group">
        <label for="phone_no">Phone Number</label>
        <input type="text" className="form-control" required  id="phone_no" placeholder="Phone Number" value={customer.phone}  onChange={(e)=>setCustomer(prevState=>{return {...prevState,phone:e.target.value}})}/>

      </div>
            <div className="col-12">
                <label for="inputAddress" className="form-label">Address</label>
                <input type="text" className="form-control" id="inputAddress"  placeholder="1234 Main St" value={customer.address} onChange={(e)=>setCustomer(prevState=>{return {...prevState,address:e.target.value}})}/>
            </div>
            <div className="col-md-6">
                <label htmlFor="validationCustom03" className="form-label">City</label>
                <input type="text" className="form-control" id="validationCustom03" value={customer.city} required onChange={(e)=>setCustomer(prevState=>{return {...prevState,city:e.target.value}})}/>
                <div className="invalid-feedback">
                    Please provide a valid city.
                </div>
            </div>
            <div className="col-md-6">
                <label htmlFor="validationCustom03" className="form-label">State</label>
                <input type="text" className="form-control" id="validationCustom03" value={customer.state} required onChange={(e)=>setCustomer(prevState=>{return {...prevState,state:e.target.value}})}/>
                <div className="invalid-feedback">
                </div>
            </div>
            <div className="col-md-3">
                <label htmlFor="validationCustom05" className="form-label">Zip</label>
                <input type="text" className="form-control" id="validationCustom05" required value={customer.zip} onChange={(e)=>setCustomer(prevState=>{return {...prevState,zip:e.target.value}})}/>
                <div className="invalid-feedback">
                    Please provide a valid zip.
                </div>
            </div>
            <div className="col-12"> 
            {console.log(customer)};
           <button className="btn"  onClick= {initiatePayment}> Pay</button>
          
           
           
            </div>
        </form>
    );
}
