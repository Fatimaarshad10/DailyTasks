const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.generateAccessToken = (userData) => {
  const payLoad = {
    // spread userData here or de-structure
    id: userData.id,
    name: userData.name,
    email: userData.email,
  };

  return jwt.sign(payLoad, process.env.JWT_SECRETE_KEY, { expiresIn: "5m" });
};

module.exports.generateRefreshToken = (userData) => {
  const payLoad = {
    // spread userData here or de-structure
    id: userData.id,
    name: userData.name,
    email: userData.email,
  };

  return jwt.sign(payLoad, process.env.JWT_SECRETE_KEY, { expiresIn: "30d" });
};
const verifyJWTToken = async (token) => {
  if (!token) {
    return res.status(401).json({ message: 'Access denied. Token not provided.' });
  }
  if (!token.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Invalid token format.' });
  }
  const actualToken = token.split(' ')[1];
  return jwt.verify(actualToken, process.env.JWT_SECRETE_KEY, (err, decoded) => {
    return { err: err, decoded: decoded };
  });
};
module.exports = {verifyJWTToken}

module.exports.authenticate = async(req, res, next)=> {
    const token = req?.headers?.access_token;
    if (token) {
      const result = await verifyJWTToken(token);
      if (result.err) {
        res.status(401).json({ message: "invalid" });
      } else {
        req.user = result.decoded;
        next();
      }
    } else
      res.status(500).json({ message: "User must add the token" });
  }