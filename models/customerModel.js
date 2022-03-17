const mongoose = require("mongoose");

const customerSchema= mongoose.Schema({
    orderId:{type:String,require},
    name : {type: String , require},
    phone:{type:Number,require},
    email: {type: String , require},
    address:{type:String,require},
    cartItems : [],
    subtotal : {type:Number , require},
    isDelivered : {type:Boolean , require , default: false},
    
},{
    timestamps : true
})

module.exports = mongoose.model('customers' , customerSchema)