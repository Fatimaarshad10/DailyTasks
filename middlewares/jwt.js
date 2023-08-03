const jwt = require('jsonwebtoken');
const {unless} = require('express-unless'); 
require("dotenv").config();

const verifyToken = (req, res, next) => {
  console.log('Middleware is being called')
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Access denied. Token not provided.' });
  }

  // Token format should be 'Bearer <token>'
  if (!token.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Invalid token format.' });
  }

  // Extract the actual token from the 'Bearer ' prefix
  const actualToken = token.split(' ')[1];

  jwt.verify(actualToken, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token.' });
    }
    req.user = decoded;
    next();
  });
};
verifyToken.unless = unless;

module.exports = verifyToken;
