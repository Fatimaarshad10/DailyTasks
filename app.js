const express = require('express');
const routes = require("./config/routes");

const app = express();


require("./middlewares/main").Main(app);
routes(app)



module.exports = app;
