const express = require("express")
const router = express()
const { httpsCodes } = require("../config/httpCode");
const userManager = require ('../managers/userManager')

// =========== Get Users ============
router.get("/", async (req, res) => {
    userManager.getUser()
      .then((result) => {
        res.status(result.status).json(result);
      })
      .catch(async (error) => {
        res.status(httpsCodes.SERVER_ERROR_CODE).json({error});
      });
  });

// =======>Register<=======
router.post("/register", async (req, res) => {
    const reqObj = Object.assign({}, req.body);
   userManager.createUser(reqObj)
      .then(async (result) => {
        res.status(result.status).json(result);
      })
      .catch(async (error) => {
        res.status(httpsCodes.SERVER_ERROR_CODE).json({error});
      });
  });

// ========>LOGIN<========
router.post("/login", async (req, res) => {
    const reqObject = Object.assign({}, req.body);
    userManager.login(req,reqObject)
      .then(async (result) => {
        res.status(result.status).json(result);
      })
      .catch(async (error) => {
        res.status(httpsCodes.SERVER_ERROR_CODE).json({error});
      });
  });
module.exports = router;