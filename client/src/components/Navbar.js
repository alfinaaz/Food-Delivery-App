import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../actions/userActions';
import { Link } from "react-router-dom";
export default function Navbar() {

    const dispatch = useDispatch();
    const cartstate = useSelector((state) => state.cartReducer)
    const userState = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userState;
    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Food Delivery</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav  ms-auto">


                            {currentUser ? (<div class="dropdown  mt-2">
                                <a className='dropdown-toggle' href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"burlywood"}}>
                                    {currentUser.name}
                                </a>

                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a class="dropdown-item" href="#">Orders</a>
                                    <a class="dropdown-item" href="#" onClick={()=>{dispatch(logoutUser())}}><li>Logout</li></a>
                                    
                                </ul>
                            </div>) : (

                                <li class="nav-item ">
                                    <a class="nav-link active" aria-current="page" href="/login">Login</a>
                                </li>)}



                            <li class="nav-item ">
                                <a class="nav-link" href='/cart'>Cart {cartstate.cartItems.length}</a>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )


}