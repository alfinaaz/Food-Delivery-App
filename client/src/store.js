import {combineReducers} from 'redux';
import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {composeWithDevTools} from 'redux-devtools-extension';
import { getAllFoodsReducer} from './reducers/foodReducers';
import { cartReducer } from './reducers/cartReducers';
import {  registerUserReducer } from './reducers/userReducers';
import { loginUserReducer } from './reducers/userReducers';

const finalReducer = combineReducers({
    getAllFoodsReducer : getAllFoodsReducer,
    cartReducer : cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer

})

// first we need to get the state in 'localstorage' from 'cartreducer' and then from 'localStorage' we need to send it to
// cartReducer .. so that when the page reloads the cart reducer is not empty..


// if the cartItems is present in the localStorage
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):[]
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')):null
//THEN

//creating initial state for cart reducer....
const initialState={

    cartReducer:{
    
        cartItems : cartItems
    },
 loginUserReducer:{
    
        currentUser : currentUser
    }
   
}

const composeEnhancers= composeWithDevTools({})

const store = createStore(finalReducer , initialState , composeEnhancers(applyMiddleware(thunk)))

export default store;