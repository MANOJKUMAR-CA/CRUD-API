const express = require("express");
const route = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../functions/pro_fun');
const Product = require("../model/product.js");

route.get('/', getProducts);

route.get("/:id", getProduct);

route.post("/", createProduct);

route.put("/:id", updateProduct);

route.delete("/:id", deleteProduct);

module.exports = route;