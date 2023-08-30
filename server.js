const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productsRouter')
const verifyToken = require('./middlewares/jwt')
require("dotenv").config();
const app = express();

// middlewares 
app.use(express.json());
// app.use(verifyToken.unless({ path: '/products/login' }));
app.use('/products', productRoutes)


// connect with mongodb 
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Mongo Connection Built")
    app.listen(process.env.PORT, () => {
      console.log(`Server listening on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

  

    

