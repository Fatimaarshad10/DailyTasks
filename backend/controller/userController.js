
const express = require("express")
const router = express()
const { httpsCodes } = require("../config/httpCode");
const path = require('path');
// const fs = require('fs');
const ManagerPath = path.join(__dirname, '..', 'managers');
const userManager = require(path.join(ManagerPath, 'userManager'));
// ==============> post <===============
router.post("/", async (req, res, next) => {
  const reqObj = Object.assign({}, req.body);
 userManager.createUser(reqObj)
    .then(async (result) => {
      res.status(result.status).json(result);
    })
    .catch(async (error) => {
      console.log(error)
      res.send({
        error: error,
        status: httpsCodes.SERVER_ERROR_CODE,
      });
    });
});

// =========== Get All ============
router.get("/", async (req, res, next) => {
  
    userManager.getUser(req)
    .then((result) => {
      res.status(result.status).json(result);
    })
    .catch(async (error) => {
      res.send({
        error: error,
        status: httpsCodes.SERVER_ERROR_CODE,
      });
    });
});

module.exports = router;




