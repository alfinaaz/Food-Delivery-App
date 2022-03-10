import React,{useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";


export default function Food({food}){
    const [Quantity,setQuantity]=useState(1);
    const [plateVariety,setplateVariety]=useState('small');
     

    const dispatch=useDispatch()
    function addtocart()
    {
        dispatch(addToCart(food,Quantity,plateVariety))
    }
    return (
        <div style={{margin:'45px'}} className='shadow-lg p-3 mb-5 bg-white rounded'>
        <h3>{food.name}</h3>
        <img src= {food.image} className="img-fluid" style={{height:'200px',width:'200px'}} />
        <p></p>
        <p></p>
        <p></p>
        <div className="flex-container">
        <div className="w-100">
        <p>PLATE VARIETY:</p>
        <select className='form-select' value={plateVariety} onChange={(e)=>{setplateVariety(e.target.value)}}>
        {food.plateVariety.map(plateVariety=>{
            return <option value={plateVariety}>{plateVariety}</option>
        })}
        </select>
        </div>

        <div className="w-100">
        <p>Quantity</p>   
        <select className='form-select' value={Quantity} onChange={(e)=>{setQuantity(e.target.value)}}>
            {[...Array(10).keys()].map((x,i)=>{
               return <option value={i+1}> {i+1}</option>
            })}
        </select>
        </div>

        </div>
        <div className="flex-container">
        <div className='m-1 w-100'>
            <h4> Price: ₹ {food.prices[0][plateVariety]*Quantity}</h4>
        </div>
        <div className='m-1 w-100'>
            <button className="btn" onClick={addtocart}>ADD TO CART</button>
        </div> 
            
        </div>
        
        </div>

        
    )

}