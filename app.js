var createError = require('http-errors');
var express = require('express');
const routes = require("./config/routes");
const admin = require('firebase-admin');
const serviceAccount = require('./nodeShop.json'); 

const app = express();


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});



const registrationToken = 'device_registration_token'; 

const message = {
  notification: {
    title: 'Notification Title',
    body: 'Notification Body',
  },
  token: registrationToken,
};

// Send the message
admin.messaging().send(message)
  .then((response) => {
    console.log('Notification sent successfully:', response);
  })
  .catch((error) => {
    console.error('Error sending notification:', error);
  });


// class employee{
//   constructor(name){
//     console.log('Employee ' +  name)
//   }
// }
// class manager extends employee{
// constructor(name){
//   super()
//   console.log('manager ' + name)
// }
// }
// let a = new manager('fatima')



// Middleware
app.use(express.json());
routes(app)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
