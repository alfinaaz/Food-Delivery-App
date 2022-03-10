const mongoose= require('mongoose');
 var mongoURL= 'mongodb+srv://alfi2410:qwert@cluster0.n4bwm.mongodb.net/Food-Delivery';
 mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull');
})

db.on('error' , ()=>{
    console.log(`Mongo DB Connection failed`);
})

module.exports =mongoose