
const { httpsCodes } = require("../config/httpCode");
const { language } = require("../language/en/language");
const { User } = require("../model/index");
  
module.exports.createUser = async(reqObj)=>{
    try {
      let result = "";
      const data = await User.create(reqObj);
      result = { status: httpsCodes.NOT_FOUND, message: language.NOT_FOUND };
      if (data) {
        result = {
          status: httpsCodes.SUCCESS_CODE,
          message: language.ONE_RECORD_CREATE,
          result: data,
        };
      }
      return result;
    } catch (error) {
      throw error;
    }
  }


module.exports.getUser = async(req) =>{
    try {
      let result = "";
      const data = await User.findAll({
        // ...req.pagination,
        where: {
          ...req.filter,
        },
      });

      if (data.length === 0) {
        result = { status: httpsCodes.NOT_FOUND, message: language.NOT_FOUND };
        return;
      }

      if (data.length > 0) {
        result = {
          status: httpsCodes.SUCCESS_CODE,
          message: language.RECORD_FOUND,
          counts: data.length,
          result: data,
        };
      }
      return result;
    } catch (error) {
      throw error;
    }
  }
