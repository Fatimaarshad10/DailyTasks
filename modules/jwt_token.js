
const jwt = require("jsonwebtoken");

module.exports.generateAccessToken = (userData) => {
  const payLoad = {
    id: userData._id,
    name: userData.name,
    email: userData.email,
  };

  return jwt.sign(payLoad, process.env.SECRET_KEY, { expiresIn: "5m" });
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
