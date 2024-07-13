const express = require('express')
const mongoose = require('mongoose');
const app = express();
const Product = require('./model/product');
const ProductRoute  = require("./routes/product_routes.js")

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/products",ProductRoute)

app.get('/',(req,res) => {
    res.send("HOME PAGE");
});



mongoose.connect("mongodb+srv://MK:v8jysp9orwsbEAW2@cruddb.dkt9xdv.mongodb.net/Node-API?retryWrites=true&w=majority&appName=CRUDDB")
.then(()=>{
    console.log("CONNECTED!");
    app.listen(3000,()=>{
        console.log("CHECK");
    });
})
.catch((err)=>{
    console.log(err);
});