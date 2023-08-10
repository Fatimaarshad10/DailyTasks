const { httpsCodes } = require("../config/httpCode");
const { language } = require("../languages/language");
const bcrypt = require("bcrypt");
const User = require("../models/userSchema");
const { generateAccessToken} = require("../modules/jwt_token");


// =========== Create User ============

module.exports.createUser = async (reqObj) => {
  try {
    let result = {};
    if (!reqObj.name || !reqObj.email || !reqObj.password) {
      return result = {
        status: httpsCodes.BAD_REQUEST,
        message: language.FILL_DATA
      }
    }
    const oldUser = await User.findOne({ email: reqObj.email });
    if (oldUser) {
      return result = {
        status: httpsCodes.BAD_REQUEST,
        message: language.USER_EXIST
      }
    } else {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(reqObj.password, saltRounds);
      const data = await User.create({ 
        name: reqObj.name, 
        email: reqObj.email, 
        password: hashedPassword 
      });
      result = {
        status: httpsCodes.NOT_FOUND,
        message: language.NOT_FOUND
      };
      if (data) {
        result = {
          status: httpsCodes.SUCCESS_CODE,
          message: language.ONE_RECORD_CREATE,
          result: data
        };
      }
      return result;
    }


  } catch (error) {
    throw error;
  }
}
// =========== Get User ============

module.exports.getUser = async () => {
  try {
    let result = {};
    const data = await User.find({});
    result = {
      status: httpsCodes.NOT_FOUND,
      message: language.NOT_FOUND
    };

    if (data.length > 0) {
      result = {
        status: httpsCodes.SUCCESS_CODE,
        message: language.RECORD_FOUND,
        counts: data.length,
        result: data
      };
    }
    return result;

  } catch (error) {
    throw error;
  }
}

// =========== login ============

module.exports.login = async (req, reqObj) => {
  try {
    let result = {};
    const oldUser = await User.findOne({ email: reqObj.email })

    if (oldUser) {
      const isPasswordValid = await bcrypt.compare(reqObj.password, oldUser.password);
      if (isPasswordValid) {
        const accessToken = generateAccessToken(oldUser);
        // const generateToken = generateRefreshToken (oldUser)
        result = {
          status: httpsCodes.SUCCESS_CODE,
          message: language.OTP_VERIFIED,
          result: oldUser,
          accessToken: accessToken,
          // generateToken : generateToken
        };
      } else {
        result = {
          status: httpsCodes.NOT_FOUND,
          message: "Password is wrong"
        };


      }
    } else {
      return result = {
        status: httpsCodes.NOT_FOUND,
        message: language.NOT_FOUND
      };
    }

    return result;

  } catch (error) {
    throw error;
  }
}
