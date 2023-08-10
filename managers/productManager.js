const Product = require("../models/userSchema")

module.exports.createUser = async (reqObj) => {
    try {
      let result = {};
        const data = await Product.create(reqObj);
        if (data) {
          result = {
            status: httpsCodes.SUCCESS_CODE,
            message: language.ONE_RECORD_CREATE,
            result: data
          };
        }
        result = {
            status: httpsCodes.NOT_FOUND,
            message: language.NOT_FOUND
          };
        return result;
    } catch (error) {
      throw error;
    }
  }