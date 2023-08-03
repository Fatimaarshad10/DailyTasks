// () use for view templates and send the  dynamic data
// otherwise think that's raw 
const router = require("express")();
const { httpsCodes } = require("../config/httpCode");
const {getUser} = require("../managers/userManager");


// =========== Get All ============
router.get("/", async (req, res, next) => {  
  getUser(req).then((result) => {
    // res.send()
      res.render('index', result.result );
    })
    .catch(async (error) => {
      res.send({
        error: error,
        status: httpsCodes.SERVER_ERROR_CODE,
      });
    });
        
      });

module.exports = router;




