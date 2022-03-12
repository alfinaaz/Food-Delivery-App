const express=require('express');
const port=8000;

//
const Food= require('./models/foodModel');
const db= require("./db.js");
const app=express();
app.use(express.json());

const foodsRoute = require('./routes/foodsRoute')
const userRoute = require('./routes/userRoute')
//
app.use('/api/foods/',foodsRoute)
app.use('/api/users/',userRoute)


app.listen(port,function(err)
{
    if(err)
    {
        console.log("Error!");
        return;
    }
    console.log("Server up and running on Port",port);
});