"use-strict";

module.exports = (app) => {
  app.use("/user", require("../controller/userController"));
};
