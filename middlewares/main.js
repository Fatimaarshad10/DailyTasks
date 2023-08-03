var cookieParser = require('cookie-parser');
var express = require('express');
var path = require('path');
// var logger = require('morgan');
const {authenticate} = require('../modules/helpers')
const { unless } = require("express-unless");

module.exports.Main=(app)=>{
    
   // view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine',  "jade");

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// authentication 
authenticate.unless=unless;
app.use(authenticate.unless({
    path: [
      { url: "/user", method: "GET" },
    ],
  }))

    
}
