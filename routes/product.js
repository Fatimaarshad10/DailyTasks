const express = require("express")
const {getProducts , createProducts , deleteProducts} = require('../controllers/productsController')
const products = express.Router()

// =======>get method<=======
products.get('/', getProducts);

// =======>post method<=======
products.post('/', createProducts);

// =======>delete method<=======
products.delete('/:id', deleteProducts);






module.exports = products