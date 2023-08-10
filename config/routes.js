"use-strict";

module.exports = (app) => {
  app.use("/user", require("../controllers/userController"));
  app.use("/", require("../controllers/productController"));
};
