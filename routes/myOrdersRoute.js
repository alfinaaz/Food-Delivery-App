const express = require("express");
const router = express.Router();
const Customer = require('../models/customerModel')

router.post('/myorders', async (req, res) => {

    //console.log(req.body.email);

    try {
        const myOrders = await Customer.find({ email: req.body.email }).sort({"createdAt": -1})
        res.json(myOrders);
    } 
    
    
    
    catch (error) {
        return res.status(400).json({ message: error });
    }

});
module.exports = router


