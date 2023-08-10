
const express = require("express")
const productRouter = express()
const { httpsCodes } = require("../config/httpCode");
const userManager = require ('../managers/userManager')

// =======>Product<=======
productRouter.post("/product", async (req, res) => {
    const reqObj = Object.assign({}, req.body);
   userManager.createUser(reqObj)
      .then(async (result) => {
        res.status(result.status).json(result);
      })
      .catch(async (error) => {
        res.status(httpsCodes.SERVER_ERROR_CODE).json({error});
      });
  });
  module.exports = productRouter