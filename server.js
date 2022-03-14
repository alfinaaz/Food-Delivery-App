const express=require('express');
const cors= require('cors');
const port=8000;

//
const Food= require('./models/foodModel');
const db= require("./db.js");


const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());


const foodsRoute = require('./routes/foodsRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute= require('./routes/ordersRoute')
//

app.use('/api/foods/',foodsRoute)
app.use('/api/users/',userRoute)
app.use('/api/orders/',ordersRoute)
app.use('/api/orders/',ordersRoute);


app.listen(port,function(err)
{
    if(err)
    {
        console.log("Error!");
        return;
    }
    console.log("Server up and running on Port",port);
});