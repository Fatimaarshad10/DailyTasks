const express = require("express");
const { All_products, Add_products, Delete_products, Update_product } = require('../controllers/productController');
const jwt = require('jsonwebtoken');
require("dotenv").config();
const productRoutes = express.Router();

// Login route
productRoutes.post('/login', (req, res) => {
  const user = {
    userId: '123',
    username: 'fatima arshad',
  };
  const token = jwt.sign(user,process.env.SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
});

// get method
productRoutes.get('/', All_products);

// post method
productRoutes.post('/', Add_products);

// delete method
productRoutes.delete('/:id', Delete_products);

// patch method
productRoutes.patch('/:id', Update_product);

module.exports = productRoutes;
