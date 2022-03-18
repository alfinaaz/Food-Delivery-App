const express=require('express');

//
const path = require('path');

const cors= require('cors');
const port=8000;

//
const Food= require('./models/foodModel');
const db= require("./db.js");


const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());




app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });


const foodsRoute = require('./routes/foodsRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute= require('./routes/ordersRoute')
const myOrdersRoute=require('./routes/myOrdersRoute');
//

app.use('/api/foods/',foodsRoute)
app.use('/api/users/',userRoute)
app.use('/api/orders/',ordersRoute)
app.use('/api/orders/',ordersRoute);
app.use('/api/',myOrdersRoute);









app.listen(port,function(err)
{
    if(err)
    {
        console.log("Error!");
        return;
    }
    console.log("Server up and running on Port",port);
});



